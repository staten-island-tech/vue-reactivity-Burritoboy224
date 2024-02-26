<template>
    <main v-for="item in counter"
    :Item="item"/>
    <!-- for every "item" in the array, give the parameter "item" to main.vue  -->
</template>

<script setup>

import main from '@/components/main.vue';
import { counter } from '@/stores/counter';

</script>

<style scoped></style>