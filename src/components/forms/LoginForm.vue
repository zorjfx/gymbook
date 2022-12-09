<template>
    <base-form formTitle="Login" :onSubmitForm='loginDataValidate'>
        <login-input @user-enter="(accountDataUsername) => username = accountDataUsername" placeholder="Username" />
        <login-input @user-enter="(accountDataPassword) => password = accountDataPassword" placeholder="Password" />
    </base-form>
</template>

<script>
export default {}
</script>

<script setup>
import { ref } from 'vue';
import { HTTPAPIClient } from '../../api/userAPI.js';
import LoginInput from './LoginInput.vue';
import BaseForm from "./BaseForm.vue";


const username = ref('');
const password = ref('');
const onlyLatinRegex = /^[A-Za-z]*$/;
const errorInfo = ref('');
const httpAPIClientLogic = new HTTPAPIClient();


function loginDataValidate() {
    errorInfo.value = '';

    if (!onlyLatinRegex.test(username.value)) {
        errorInfo.value += 'Username can contain only latin ';
    } else if (password.value && password.value.length <= 5) {
        errorInfo.value += 'Password is too short(min 5)';
    } else {
        httpAPIClientLogic.dataPost(username.value, password.value);
    }
}
</script>
