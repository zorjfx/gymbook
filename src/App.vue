<template>
    <!-- <VueHeader></VueHeader> -->
    <!-- <CryptoPrice ticker="BTCUSDT"></CryptoPrice> -->
    <CryptoTrade></CryptoTrade>
</template>

<script>
/* eslint-disable */
import VueHeader from './components/VueHeader.vue';
import CryptoPrice from './components/CryptoPrice.vue';
import CryptoTrade from './components/CryptoTrade.vue';

export default {
    components: { VueHeader, CryptoPrice, CryptoTrade }
}
</script>

<style>

</style>
