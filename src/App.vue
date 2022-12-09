<template>
    <!-- <CryptoPrice ticker="BTCUSDT"></CryptoPrice> -->
    <!-- <crypto-trade @deal-closed="(order) => closedDeal = order"></crypto-trade>
    <crypto-history :order="closedDeal"></crypto-history> -->
    <!-- <login-form></login-form> -->
    <!-- <register-form></register-form> -->
    <login-modal></login-modal>
</template>

<script>
/* eslint-disable */
import CryptoPrice from './components/CryptoPrice.vue';
import CryptoTrade from './components/CryptoTrade.vue';
import CryptoSelection from './components/CryptoSelection.vue';
import CryptoHistory from './components/CryptoHistory.vue';
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';
import LoginModal from './components/LoginModal.vue';

export default {
    components: { CryptoPrice, CryptoTrade, CryptoSelection, CryptoHistory, LoginForm, RegisterForm, LoginModal }
}




</script>

