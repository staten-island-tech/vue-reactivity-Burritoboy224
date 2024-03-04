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
.card {
    border: .5rem blue solid;
    padding: .5rem;
    width: 30%;
    margin: 1rem;

}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
button{
    width: 6vh;
    height: 6vh;
    font-size: 2vh;
}
img{
  min-width: 30%;
  max-width: 50%;
}
</style>
