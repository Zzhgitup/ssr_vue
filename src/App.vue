<template>
  <div class="app">
    <h2>Vue APP</h2>
    <h3>{{ count }}</h3>
    <button @click="addCouner">+1</button>
  </div>
  <div>
    <router-link to="/home">
      <button>home</button>
    </router-link>
    <router-link to="/pagea">
      <button>page1</button>
    </router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref } from "vue";
const count = ref(100);
function addCouner() {
  console.log("nihao ");
  count.value++;
}
</script>
