<template>
    <base-form formTitle="Login" :onSubmitForm='loginDataValidate'>
        <login-input @user-entered="(usernameData, errorInfo) => { username = usernameData; errorInfo += errorInfo }"
            placeholder="Username" />
        <login-input @user-entered="(passwordData, errorInfo) => { password = passwordData; errorInfo += errorInfo }"
            placeholder="Password" />
        <input-error :errorInfo="errorInfo"></input-error>
    </base-form>
</template>

<script>
export default {}
</script>

<script setup>
import { ref } from 'vue';
import { HTTPAPIClient } from '../../api/httpClient.js';
import LoginInput from './LoginInput.vue';
import BaseForm from "./BaseForm.vue";
import InputError from "./InputError.vue";

const username = ref('');
const password = ref('');
const onlyLatinRegex = /^[A-Za-z]*$/;
const errorInfo = ref('');
const httpAPIClientLogic = new HTTPAPIClient();


function loginDataValidate() {
    errorInfo.value = '';
    if (!username.value || username.value.length === 0) {
        errorInfo.value = 'Username cannot be empty';
    } else if (!password.value || password.value.length === 0) {
        errorInfo.value = 'Password cannot be empty';
    }
    else if (!onlyLatinRegex.test(username.value)) {
        errorInfo.value += 'Username can only contain latin ';
    } else if (password.value && password.value.length <= 5) {
        errorInfo.value += 'Password is too short(min 5)';
    } else {
        httpAPIClientLogic.makeRequest(username.value, password.value);
    }
}
</script>
