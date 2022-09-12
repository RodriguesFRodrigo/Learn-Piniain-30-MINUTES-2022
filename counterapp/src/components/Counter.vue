<template>
  <div class="count">{{ storeCounter.count }}</div>
</template>

<script setup>
// Importing
import { useCounterStore } from '@/stores/counter';

// Use
const storeCounter = useCounterStore()
</script>

<style scoped>
.count {
  font-size: 60px;
  margin: 20px;
}
</style>