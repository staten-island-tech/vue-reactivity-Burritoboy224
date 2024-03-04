<template>
    
  <div class="box">
       <main v-for="item in pokemonCenterItems"
  :Item="item"/>
  </div>

  <div class="cart">
      <cart v-for="item in pokemonCenterItems"
      :Item="item"/>
  </div>
 
</template>

<script setup>

import main from '@/components/main.vue';
import cart from '@/components/cart.vue';
import { pokemonCenterItems } from '@/stores/counter';

</script>