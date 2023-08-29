<template>
  <div class="app">
    <h2>Page A</h2>
    <h3>{{ count }}</h3>
    <button @click="addCouner">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(100);
function addCouner() {
  console.log("nihao ");
  count.value++;
}
</script>
