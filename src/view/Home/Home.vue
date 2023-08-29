<template>
  <div class="app">
    <h2>Home</h2>
    <h3>{{ count }}</h3>
    <button @click="addCouner">+1</button>
    <h1>{{ name }}</h1>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useHomestore } from "../../store/Home";
const { count, name } = storeToRefs(useHomestore());
function addCouner() {
  count.value++;
}
</script>
