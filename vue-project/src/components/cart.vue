<template>
    <div class="card">
    <h2>You Bought: {{ Item.name }}</h2>
    <h3>Each cost: ${{ Item.price }}</h3>
    <img :src="Item.img" :alt="Item.name">
    <h2>Which Costed You This Much: ${{ Number(Item.purchase.value) * Number(Item.price) }}</h2></div>
   
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