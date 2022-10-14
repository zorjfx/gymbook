<template>
    <!-- <VueHeader></VueHeader> -->
    <!-- <CryptoPrice ticker="BTCUSDT"></CryptoPrice> -->
    <!-- <crypto-trade></crypto-trade>-->
    <vue-parent :counter="clickedTimes"></vue-parent>
    <vue-child @child-clicked="childButtonClicked"></vue-child>
</template>

<script>
/* eslint-disable */
import VueHeader from './components/VueHeader.vue';
import CryptoPrice from './components/CryptoPrice.vue';
import CryptoTrade from './components/CryptoTrade.vue';
import VueParent from './components/VueParent.vue';
import VueChild from './components/VueChild.vue';

import { ref } from "vue";

export default {
    components: { VueHeader, CryptoPrice, CryptoTrade, VueParent, VueChild },
    setup(){
        const clickedTimes = ref(0);

        function childButtonClicked(event){
            console.log(event)
            clickedTimes.value++;
        }

        return {
            childButtonClicked,
            clickedTimes,
        }
    }
}
</script>

<style>

</style>
