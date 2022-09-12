
<template>
  <h1 class="about">About</h1>
  <div class="buttons">
    <button @click="storeCounter.increaseCounter">{{ storeCounter.count }}</button>
  </div>
 </template>

<script setup>
  import { useCounterStore } from '../stores/counter';

  const storeCounter = useCounterStore()
</script>

<style>
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>
 