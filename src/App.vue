<template>
    <!-- <VueHeader></VueHeader> -->
    <!-- <CryptoPrice ticker="BTCUSDT"></CryptoPrice> -->
    <CryptoTrade></CryptoTrade>
    <!-- <CryptoSelection></CryptoSelection> -->
</template>

<script>
/* eslint-disable */
import VueHeader from './components/VueHeader.vue';
import CryptoPrice from './components/CryptoPrice.vue';
import CryptoTrade from './components/CryptoTrade.vue';
import CryptoSelection from './components/CryptoSelection.vue';


export default {
    components: { VueHeader, CryptoPrice, CryptoTrade, CryptoSelection }
}
</script>

<style>

</style>
