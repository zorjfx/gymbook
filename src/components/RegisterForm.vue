<template>
    <div id="parent">
        <div id="child">
            <h2>Create an account</h2>
            <login-input placeholder="Username"
                @user-enter="(accountDataUsername) => username = accountDataUsername"></login-input>
            <login-input placeholder="Email"
                @user-enter="(accountDataUsername) => email = accountDataUsername"></login-input>
            <login-input placeholder="Password"
                @user-enter="(accountDataUsername) => password = accountDataUsername"></login-input>
            <login-input placeholder="Confirm password"
                @user-enter="(accountDataUsername) => passwordConfirm = accountDataUsername"></login-input>
            <div id="errorDiv"> {{ errorInfo }} </div>
            <button id="submitButton" @click="registerDataValidate()">Submit</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<script setup>

import LoginInput from './LoginInput.vue';
import { ref } from 'vue';
import { HTTPAPIClient } from '../api/userAPI.js';

const username = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const errorInfo = ref('');
const onlyLatinRegex = /^[A-Za-z]*$/;
const HTTPAPIClientReg = new HTTPAPIClient();

function registerDataValidate() {
    errorInfo.value = '';
    if (!username.value || username.value.length == 0) {
        errorInfo.value += 'Username cant be empty ';
    } else if (!password.value || password.value.length == 0) {
        errorInfo.value += 'Password cant be empty ';
    } else if (!onlyLatinRegex.test(username.value)) {
        errorInfo.value += 'Username can contain only latin ';
    } else if (password.value && password.value.length < 5) {
        errorInfo.value += 'Password is too short(min 5) ';
    } else if (!email.value.includes('@')) {
        errorInfo.value += 'Incorrect email ';
    } else if (passwordConfirm.value != password.value) {
        errorInfo.value += 'Passwords should match';
    } else {
        HTTPAPIClientReg.dataPost(email.value, username.value, password.value);
    }
    // console.log(password.value, username.value, passwordConfirm.value, email.value); 
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