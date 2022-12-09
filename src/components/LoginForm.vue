<template>
    <div id="parent">
        <div id="child">
            <h2>Log in</h2>
            <login-input @user-enter="(accountDataUsername) => username = accountDataUsername" placeholder="Username">
            </login-input>
            <login-input @user-enter="(accountDataPassword) => password = accountDataPassword" placeholder="Password">
            </login-input>
            <div id="errorDiv">{{ errorInfo }}</div>
            <button @click="loginDataValidate()" id="submitButton">Submit</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<script setup>
import { ref } from 'vue';
import { HTTPAPIClient } from '../api/userAPI.js';
import LoginInput from './LoginInput.vue';
// `     `

const username = ref('');
const password = ref('');
const onlyLatinRegex = /^[A-Za-z]*$/;
const errorInfo = ref('');
const HTTPAPIClientLogin = new HTTPAPIClient();

function loginDataValidate() {
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
        HTTPAPIClientLogin.dataPost(username.value, password.value);
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