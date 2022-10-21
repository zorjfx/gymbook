<template>
    <select @change.prevent="$emit('chosen', chosenPair)" v-model="chosenPair">
        <option v-for="cryptoPair in cryptoPairs" :key="cryptoPair.symbol">
            {{ cryptoPair.symbol }}
        </option>
    </select>
</template>

<script>
export default {}


</script>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { getCryptoPairs } from '../api/cryptoAPI.js';


const cryptoPairs = ref([]);
const chosenPair = ref(null);


onBeforeMount(async () => {
    getCryptoPairs().then((result) => {
        cryptoPairs.value = result
    })
})

</script>

<style scoped>

</style>