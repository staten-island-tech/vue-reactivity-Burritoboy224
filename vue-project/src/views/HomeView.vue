<template>
    
    <div class="box">
         <main v-for="item in pokemonCenterItems"
    :pokemonCenterItems="item"/>
    <!-- for every "item" in the array, give the parameter "item" to main.vue  -->
    </div>
   
</template>

<script setup>

import main from '@/components/main.vue';
import { pokemonCenterItems } from '@/stores/counter';

</script>

<style scoped>
.box{
    display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
