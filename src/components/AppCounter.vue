<script setup>
import { ref } from 'vue';

const count = ref(0);

function increaseCount() {
  count.value++;
}
</script>

<template>
  <div class="content">
    <h5>The count is {{ count }}</h5>
    <button @click="increaseCount">Increase Count</button>
  </div>
</template>

<style scoped>
.content {
  background-color: burlywood;
  padding: 5px;
  margin-top: 5px;
}
</style>
