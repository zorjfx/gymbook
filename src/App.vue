<template>
    <!-- <VueHeader></VueHeader> -->
    <!-- <CryptoPrice ticker="BTCUSDT"></CryptoPrice> -->
    <!-- <crypto-trade @deal-closed="(order) => closedDeal = order"></crypto-trade>
    <crypto-history :order="closedDeal"></crypto-history> -->
    <login-form></login-form>
</template>

<script>
/* eslint-disable */
import VueHeader from './components/VueHeader.vue';
import CryptoPrice from './components/CryptoPrice.vue';
import CryptoTrade from './components/CryptoTrade.vue';
import CryptoSelection from './components/CryptoSelection.vue';
import CryptoHistory from './components/CryptoHistory.vue';
import LoginForm from './components/LoginForm.vue';
import { ref } from 'vue';

// const closedDeal = ref(null);

export default {
    components: { VueHeader, CryptoPrice, CryptoTrade, CryptoSelection, CryptoHistory, LoginForm }
}




</script>

