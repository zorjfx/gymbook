<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <slot name="header">
                    GitHub
                </slot>
                <button type="button" class="btn-close" @click="close">
                    <span class="material-icons-outlined">close</span>
                </button>
            </header>

            <section class="modal-body">
                <slot name="body">
                    GitHub page
                </slot>
            </section>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<script setup>
import 'material-icons/iconfont/material-icons.css';


</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #000000;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 10px;
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #000000;
    background: transparent;
}

.btn-green {
    color: white;
    background: #000000;
    border: 1px solid #000000;
    border-radius: 2px;
}
</style>