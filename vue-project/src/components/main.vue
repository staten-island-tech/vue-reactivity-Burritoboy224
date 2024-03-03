<script setup>

import { pokemonCenterItems } from '@/stores/counter';
import { ref } from 'vue';

const exampleVariable = ref(0);

const props = defineProps({
   pokemonCenterItems: Object, 

});

function exampleFunc () {
    exampleVariable.value++;
   
}

</script>

<template>
    <div class="card">
        <h2>You bought: {{ Item.name }}</h2>
        <p>{{ pokemonCenterItems.price }}</p>
        <img :src="pokemonCenterItems.image" :alt="pokemonCenterItems.name">
        <button @click="exampleFunc">Buy This</button>
        <p>{{ exampleVariable }}</p>
     
    </div>
</template>

<style scoped>

.card {
    margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

</style>