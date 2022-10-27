<template>
    <div>
        <input type="text" placeholder="Quantity of the BTC tokens" v-model="tokenQuantity">
        <CryptoSelection @chosen="(chosenPair) => ticker.value = chosenPair">
        </CryptoSelection>
        <button @click="onBuy()">Buy</button>
        <button @click="onSell()">Sell</button>
        <div :class="{payback: payback, notPayback: !payback, equal: payback == null}">{{profit}}
        </div>
    </div>
</template>

<script>
export default {}
</script>

<script setup >
import { onBeforeUnmount, ref } from 'vue';
import { getPrice } from '../api/cryptoAPI';
import CryptoSelection from '../components/CryptoSelection.vue';

const tokenQuantity = ref(null);

const currentPrice = ref(null);

const startPrice = ref(null);

const profit = ref(0);

const payback = ref(null);

const ticker = ref(null);

const reverseProfit = ref(null);

let profitUpdate = setInterval(async () => {
    currentPrice.value = await getPrice(ticker);

    const spent = startPrice.value * tokenQuantity.value;

    const payment = currentPrice.value * tokenQuantity.value;

    profit.value = (payment) - (spent);

    if (profit.value > 0 && !reverseProfit.value || profit.value < 0 && reverseProfit.value) {
        payback.value = true;
    } else if (profit.value < 0 && !reverseProfit.value || profit.value > 0 && reverseProfit.value) {
        payback.value = false;
    }
}, 10000);



async function onBuy() {
    startPrice.value = await getPrice(ticker);
}

async function onSell() {
    startPrice.value = await getPrice(ticker);
    reverseProfit.value = true;
}

function onCloseDeal() {
    clearInterval(profitUpdate);
}

onBeforeUnmount(() => {
    clearInterval(profitUpdate);
})

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