<template>
    <div id="parent">
        <div id="child">
            <h2>{{ props.formTitle }}</h2>
            <slot></slot>
            <button id="submitButton" @click="props.onSubmitForm()">Submit</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<script setup>
import { defineProps } from "vue";

const props = defineProps(['formTitle', 'onSubmitForm']);
</script>

<style scoped>
#parent {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
}

#child {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -125px 0 0 -125px;
}

h2 {
    margin: 0;
    padding: 0;
}

#submitButton {
    width: 171px;
}
</style>