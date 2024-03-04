<template>
    
  <div class="box">
    <cards v-for="item in pokemonCenterItems"
    :Item="item"/>
  </div>

  <div class="cart">
      <cart v-for="item in pokemonCenterItems"
      :Item="item"/>
  </div>
 
</template>

<script setup>

import cards from '@/components/cards.vue';
import cart from '@/components/cart.vue';
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