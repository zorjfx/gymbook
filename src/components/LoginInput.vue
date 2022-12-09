<template>
    <input type="text" v-model="accountData" @input="$emit('userEnter', accountData)">
</template>

<script>
export default {}
</script>

<script setup>
import { ref } from 'vue';

const accountData = ref(null);
</script>