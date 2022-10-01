<template>
    <div>
        <input type="text" placeholder="Quantity of the BTC tokens" v-model="tokenQuantity">
        <button @onclick="buyOnClick()">Buy</button>
        <button @onclick="sellOnClick()">Sell</button>
        <div :class="{payback: payback, notPayback: !payback, equal: payback == null}">{{profit}}$</div>
    </div>
</template>

<script>
export default {}
</script>

<script setup >
import { onMounted, ref } from 'vue';


const tokenQuantity = ref(null);
const BTCPrice = ref(null);
const startBTCPrice = ref(null);
const profit = ref(0);
const payback = ref(null);
let profitUpdate = setInterval(async () => {
    await intervalGetPrice();
    if (BTCPrice.value * tokenQuantity.value > startBTCPrice.value * tokenQuantity.value || BTCPrice.value * tokenQuantity.value < startBTCPrice.value * tokenQuantity.value) {
        profit.value = (BTCPrice.value * tokenQuantity.value) - (startBTCPrice.value * tokenQuantity.value)
    } else {
        profit.value = 0
    }
    if (profit.value > 0) {
        payback.value = true;
    } else if (profit.value < 0) {
        payback.value = false;
    } else {
        payback.value = null;
    }
}, 10000);

onMounted(async () => {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const data = await response.json();
    startBTCPrice.value = data.price;
})

async function intervalGetPrice() {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const data = await response.json();
    BTCPrice.value = data.price;
}

function buyOnClick() {
    profitUpdate;
}

function sellOnClick() {
    clearInterval(profitUpdate);
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