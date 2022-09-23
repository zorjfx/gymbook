

<template>
    <div :class="[bigger ? biggerPrice : '',  lowerPrice] ">{{price}} </div>
</template>

<script>
export default {
}
</script>

<script setup>

import { ref, defineProps, onMounted } from 'vue';

const props = defineProps(['ticker']);

const price = ref('none');

let bigger = ref(false);

function getPrice() {
    const response = fetch('https://api.binance.com/api/v3/ticker/price?symbol=' + props.ticker).then(response => {
        response.json().then(jsonData => {
            console.log(jsonData);
            price.value = jsonData.symbol + " = " + jsonData.price + '$';
            if (price.value > jsonData.price) {
                bigger = false;
            } else if (jsonData.price > price.value) {
                bigger = true;
            }
        })
    });
}

getPrice();


onMounted(() => {
    setInterval(() => {
        getPrice();
    }, 5000)

})

console.log(props.ticker)

</script>


<style>
.biggerPrice {
    color: lime;
}

.lowerPrice {
    color: red;
}
</style>