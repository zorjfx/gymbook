<template>
    <base-form formTitle="Register" :onSubmitForm='registerDataValidate'>
        <login-input placeholder="Username"
            @user-enter="(accountDataUsername) => username = accountDataUsername"></login-input>
        <login-input placeholder="First name"
            @user-enter="(accountDataUsername) => username = accountDataUsername"></login-input>
        <login-input placeholder="Email"
            @user-enter="(accountDataUsername) => email = accountDataUsername"></login-input>
        <login-input placeholder="Password"
            @user-enter="(accountDataUsername) => password = accountDataUsername"></login-input>
        <login-input placeholder="Confirm password"
            @user-enter="(accountDataUsername) => passwordConfirm = accountDataUsername"></login-input>
    </base-form>
</template>

<script>
export default {}
</script>

<script setup>
import LoginInput from './LoginInput.vue';
import BaseForm from "./BaseForm.vue";
import { ref } from 'vue';
import { HTTPAPIClient } from '../../api/userAPI.js';

const username = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const errorInfo = ref('');
const onlyLatinRegex = /^[A-Za-z]*$/;
const HTTPAPIClientReg = new HTTPAPIClient();


function registerDataValidate() {
    errorInfo.value = '';

    if (!onlyLatinRegex.test(username.value)) {
        errorInfo.value += 'Username can contain only latin ';
    } else if (password.value.length < 5) {
        errorInfo.value += 'Password is too short(min 5) ';
    } else if (!email.value.includes('@')) {
        errorInfo.value += 'Incorrect email ';
    } else if (passwordConfirm.value !== password.value) {
        errorInfo.value += 'Passwords should match';
    } else {
        HTTPAPIClientReg.dataPost(email.value, username.value, password.value);
    }
    // console.log(password.value, username.value, passwordConfirm.value, email.value); 
}

</script>
