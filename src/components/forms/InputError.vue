<template>
    <div id="errorDiv">{{ props.errorInfo }}</div>
</template>

<script>
export default {}
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({ 'errorInfo': Object })
</script>

<style scoped>
#errorDiv {
    color: brown;
}
</style>