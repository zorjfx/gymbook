/* eslint-disable */
<template>
    <button :class="{ active: clicked }" id="defaultButton" @:click="onClick()">{{buttonLabel}}</button>
</template>

<script setup>
import { ref } from 'vue';


function onClick() {
    clicked.value = !clicked.value;
    console.log(clicked.value);
    buttonLabel.value = clicked.value ? "clicked" : "unclicked";

}

const clicked = ref(false);
const buttonLabel = ref("not clicked");
</script>

<script>

export default {
}
</script>

<style>
button {
    height: 200px;
    width: 100px;
}

.active {
    background-color: red;
}
</style>
