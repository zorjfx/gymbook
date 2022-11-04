<template>
    <div>
        <span>a</span>
        <span>b</span>
        <span>c</span>
        <span>d</span>
        <span>e</span>
        <button @click="onClick()"></button>
    </div>
</template>

<script>
export default {

}
</script>

<script setup>
import { defineProps, ref } from 'vue';

const closedDeal = ref(props.order);

const props = defineProps(['order']);

function onClick() {
    console.log(closedDeal.value);
}

</script>

<style scoped>

</style>