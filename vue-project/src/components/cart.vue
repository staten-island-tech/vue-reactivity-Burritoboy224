<template>
    <div class="card">
        <h2>You bought: {{ Item.name }}</h2>
        <p>Total price: ${{ Item.price * Item.purchase }}</p>
        <img :src="Item.image" :alt="Item.name">
    </div>
</template>

<script setup>

import { ref } from 'vue';

const props = defineProps({
   Item: Object, 
});

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
img{
  min-width: 30%;
  max-width: 50%;
}
</style>