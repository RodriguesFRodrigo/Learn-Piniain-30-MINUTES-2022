
<template>
  <div class="home">
    <Counter/>
    <div class="buttons">
      <button @click="storeCounter.decreaseCounter">-</button>
      <button @click="storeCounter.increaseCounter">+</button>
    </div>
    <hr>
    <div>
      This counter is {{ storeCounter.oddOrEven }}
    </div>
    <hr>
    <div>
      <h3>Edit count:</h3>
      <input type="number" v-model="storeCounter.count">
    </div>
  </div>
</template>

<script setup>
// Importing
import { useCounterStore } from '@/stores/counter';
import Counter from '../components/Counter.vue';

// Use
const storeCounter = useCounterStore()

</script>

<style scoped>
  .count {
    font-size: 60px;
    margin: 20px;
  }

  .buttons button {
    font-size: 40px;
    margin: 10px;
  }
</style>
