<template>
    <div class="card">
        <h3>{{ Item.name }}</h3>
        <p>${{ Item.price }}</p>
        <img :src="Item.image" :alt="Item.name">
        <p>{{ Item.purchase }}</p>
        <button @click="buy">Buy</button>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const props = defineProps({
   Item: Object, 
});

function buy() {
    props.Item.purchase.value++;
}

</script>

<style scoped>

</style>
