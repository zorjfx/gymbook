

<template>
    <div>{{price}}</div>
</template>

<script>
export default {
}
</script>

<script setup>
import { onBeforeMount, ref, defineProps } from 'vue';

const props = defineProps(['ticker'])

const price = ref('none')


onBeforeMount(() => {
    const response = fetch('https://api.binance.com/api/v3/ticker/price?symbol=' + props.ticker).then(response => {
        response.json().then(jsonData => {
            price.value = jsonData['title'];
        })
    });
})

console.log(props.ticker)

</script>


<style>

</style>