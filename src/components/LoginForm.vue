<template>
    <div id="parent">
        <div id="child">
            <h2>Create an account</h2>
            <input type="text" placeholder="Username" v-model="username">
            <input type="text" placeholder="Password" v-model="password">
            <div id="errorDiv">{{ errorInfo }}</div>
            <button @click="accountDataValidate()" id="submitButton">Submit</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<script setup>
import { ref } from 'vue';
import { dataPost } from '../api/userAPI.js'

const username = ref('');
const password = ref('');
const onlyLatinRegex = /^[A-Za-z]*$/;
const errorInfo = ref('');

function accountDataValidate() {
    errorInfo.value = '';
    if (!username.value || username.value.length == 0) {
        errorInfo.value += 'Username cant be empty ';
    } else if (!password.value || password.value.length == 0) {
        errorInfo.value += 'Password cant be empty ';
    } else if (!onlyLatinRegex.test(username.value)) {
        errorInfo.value += 'Username can contain only latin ';
    } else if (password.value && password.value.length <= 5) {
        errorInfo.value += 'Password is too short(min 5)';
    } else {
        dataPost(username.value, password.value);
    }
}

</script>

<style scoped>
input {
    margin-top: 2%;
    margin-bottom: 2%;
    display: flex;
}

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

#errorDiv {
    color: brown;
}

#submitButton {
    width: 171px;
}
</style>