<template>
    <div class="allcards">
        <h2>{{ pokemonCenterItems.name }}</h2>
        <h3>${{ pokemonCenterItems.price }}</h3>
        <img :src="pokemonCenterItems.img" :alt="pokemonCenterItems.name"/>
       
        
    </div>
</template>

<script setup>
const props = defineProps({
    pokemonCenterItems: Object, 
});
</script>

<style scoped>

</style>