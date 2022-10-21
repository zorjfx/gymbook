<template>
    <div>
        <input type="text" placeholder="Quantity of the BTC tokens" v-model="tokenQuantity">
        {{ tokenQuantity }}
        {{ selectedValue }}
    </div>
</template>

<script>
export default {}
</script>

<script setup>
import { ref } from 'vue';


const tokenQuantity = ref(null);
const selectedValue = ref(null);

</script>

<style>
</style>