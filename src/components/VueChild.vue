<template>
    <button @click="$emit('childClicked', { a: 10})">Hello</button>
</template>

<script>
export default {}
</script> 

<script setup>
    
</script>

<style scoped>
</style>