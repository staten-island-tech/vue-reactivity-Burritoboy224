<script setup>

import { ref } from 'vue';
import {pokemonCenterItems} from '../stores/counter.js'
const exampleVariable = ref(0);

// ref() makes a variable reactive, so if it changes, it will update everywhere
const props = defineProps({
   Item: Object, 
   // main.vue wants this paremeter "Item" to be an object
});

function exampleFunc () {
    exampleVariable.value++;
    // to reference a ref() variable in the script,  need to use .value
}

</script>

<template>
    <div class="card">
        <div class="card">
        <h2>Name: {{ Item.name }}</h2>
        <!-- put things inside double {{}} to reference a variable -->
        <p>{{ Item.price }}</p>
        <img :src="Item.image" :alt="Item.name">
        <!-- put : before a property like src to reference a variable -->
        <button @click="exampleFunc">Click me</button>
        <!-- When this button is clicked, it runs the "exampleFunc" function -->
       <p>{{ exampleVariable }}</p>
        <!--  dont need .value to reference a ref() variable in the html -->
    </div>


    </div>
</template>

<style scoped>

.card {
    margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

</style>