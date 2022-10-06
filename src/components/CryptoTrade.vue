<template>
    <div>
        <input type="text" placeholder="Quantity of the BTC tokens" v-model="tokenQuantity">
        <button @click="makeOrder(true)">Buy</button>
        <button @click="makeOrder(false)">Sell</button>
        <div :class="{payback: payback, notPayback: !payback, equal: payback == null}">{{profit}}$</div>
    </div>
</template>

<script>
export default {}
</script>

<script setup >
import { ref } from 'vue';
import getPrice from '../api/priceRequest';

const tokenQuantity = ref(null);
const currentPrice = ref(null);
const startPrice = ref(null);
const profit = ref(0);
const payback = ref(null);
const BTCApi = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
let profitUpdate = setInterval(async () => {
    currentPrice.value = await getPrice(BTCApi);
    const spent = startPrice.value * tokenQuantity.value;
    const payment = currentPrice.value * tokenQuantity.value;
    if (payment > spent || payment < spent) {
        profit.value = (payment) - (spent);
    } else {
        profit.value = 0;
    }
    if (profit.value > 0) {
        payback.value = true;
    } else if (profit.value < 0) {
        payback.value = false;
    } else {
        payback.value = null;
    }

}, 10000);



async function makeOrder(bool) {
    if (bool) {
        startPrice.value = await getPrice(BTCApi);
        profitUpdate;
    } else if (!bool) {
        clearInterval(profitUpdate);
    }

}

</script>

<style>
.payback {
    color: green;
}

.notPayback {
    color: red;
}

.equal {
    color: grey;
}
</style>