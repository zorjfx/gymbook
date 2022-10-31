<template>
    <div>
        <input type="text" placeholder="Quantity of the BTC tokens" v-model="newOrder.tokenQuantity">
        <crypto-selection @chosen="(chosenPair) => newOrder.ticker = chosenPair"></crypto-selection>
        <button @click="createOrder(false)">Buy</button>
        <button @click="createOrder(true)">Sell</button>
        <div :class="{profitGain: isProfit, profitLoss: !isProfit, noProfit: isProfit === null}">{{newOrder.profit}}</div>
        <button @click="onCloseDeal()">Close</button>
    </div>
</template>

<script>
export default {}
</script>

<script setup >
import { onBeforeUnmount, reactive, ref } from 'vue';
import { getPrice } from '../api/cryptoAPI';
import CryptoSelection from '../components/CryptoSelection.vue';

const newOrder = reactive({
    tokenQuantity: null,
    currentPrice: null,
    startPrice: null,
    profit: null,
    ticker: null,
    isSell: null,
});

const isProfit = ref(null);
const profitUpdateInterval = ref(null);


async function createOrder(isSell) {
    newOrder.startPrice = await getPrice(newOrder.ticker);
    newOrder.isSell = isSell;

    profitUpdateInterval.value = setInterval(async () => {
        newOrder.currentPrice = await getPrice(newOrder.ticker);

        const spent = newOrder.startPrice * newOrder.tokenQuantity;
        const currentValue = newOrder.currentPrice * newOrder.tokenQuantity;

        if(newOrder.isSell){
            newOrder.profit = spent - currentValue;
        }else{
            newOrder.profit = currentValue - spent;
        }

        if(newOrder.profit === 0){
            isProfit.value = null;
        } else if(newOrder.isSell){
            isProfit.value = newOrder.profit < 0;
        }else{
            isProfit.value = newOrder.profit > 0;
        }
    }, 100);
}

function onCloseDeal() {
    clearInterval(profitUpdateInterval.value);
}

onBeforeUnmount(() => {
    const a = [];
    clearInterval(profitUpdateInterval.value);
    const i = 1;

    while(i === 1){
        alert(1);
    }

});
</script>

<style>
.profitGain {
    color: green;
}

.profitLoss {
    color: red;
}

.noProfit {
    color: grey;
}
</style>