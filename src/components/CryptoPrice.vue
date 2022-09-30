

<template>
    <div :class=" {biggerPrice: bigger==true, lowerPrice: bigger==false, equalPrice: bigger==null }">{{props.ticker}} =
        {{price}}$</div>
</template>

<script>
export default {}
</script>

<script setup >



import { ref, defineProps, onUnmounted, onBeforeMount, onMounted, } from 'vue';

const props = defineProps(['ticker']);

const price = ref(null);

const lastPrice = ref(null);

let bigger = ref(null);



onBeforeMount(() => {
    getPrice().then(() => {
        price.value = lastPrice.value;
    });
});


let updatePriceInterval = setInterval(async () => {
    await getPrice();
    if (price.value < lastPrice.value) {
        bigger.value = true;
    } else if (price.value > lastPrice.value) {
        bigger.value = false;
    }
    price.value = lastPrice.value;
}, 5000);



async function getPrice() {
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=' + props.ticker);
    const data = await response.json();
    lastPrice.value = data.price;
}


onMounted(() => { updatePriceInterval });


onUnmounted(() => { clearInterval(updatePriceInterval) })

</script>


<style>
.biggerPrice {
    color: green;
}

.lowerPrice {
    color: red;
}

.equalPrice {
    color: grey;
}
</style>