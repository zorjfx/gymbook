<template>
    <div>
        <h2>Create an account</h2>
        <input type="text" placeholder="Username" v-model="username">
        <input type="text" placeholder="Password" v-model="password">
        <button @click="dataPost()">Submit</button>
    </div>
</template>

<script>
export default {

}
</script>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref(null);
const password = ref(null);

async function dataPost() {
    const result = await axios.post('https://test.com/login', { username: username.value, password: password.value });
}

</script>

<style>

</style>