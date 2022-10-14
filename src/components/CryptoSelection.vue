<template>
    <select>
        <!-- <option v-for="cryptoPair in cryptoPairs" :value="cryptoPair.value">
            {{ cryptoPair.symbol }}
        </option> -->
    </select>
</template>

<script>
export default {}
</script>

<script setup>
import { getPrice, getCryptoPairs } from '../api/cryptoAPI.js';

getPrice('BTCUSDT');
getPrice('ETHUSDT');

getCryptoPairs().then(console.log);
</script>

<style scoped>

</style>