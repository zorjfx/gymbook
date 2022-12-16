<template>
    <input type="text" v-model="accountData" @input="$emit('userEntered', accountData)" />
</template>

<script>
export default {}
</script>

<script setup>
import { ref, defineProps } from 'vue';

const accountData = ref(null);

defineProps(['placeholder']);
</script>


<style scoped>
input {
    margin-top: 2%;
    margin-bottom: 2%;
    display: flex;
}
</style>
