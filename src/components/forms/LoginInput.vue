<template>
    <input type="text" v-model="accountData" @input="onDataInput()" /> 
    <div id="errorDiv">{{ errorInfo }}</div>
</template>

<script>
export default {}
</script>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const accountData = ref(null);
const errorInfo = ref(null);

const emit = defineEmits(['userEntered']);
const props = defineProps(['placeholder']);


async function onDataInput(){
    if(!accountData.value || accountData.value.length === 0){
        errorInfo.value = `${props.placeholder} cannot be empty`;
    }else{
        emit('userEntered', accountData);
    }
}

</script>


<style scoped>
input {
    margin-top: 2%;
    margin-bottom: 2%;
    display: flex;
}
</style>
