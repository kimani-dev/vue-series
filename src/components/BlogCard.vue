<script setup>
import moment from 'moment';
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: String,
  created_at: [Date, String],
  author: {
    type: String,
    // if reguired: true is not passed, the prop is assumed optional
    required: false,
    default: 'Anonymous'
  },
  tags: {
    type: Array,
    default: () => []
  }
});

const tagsSentence = computed(() => props.tags.join(','));
</script>

<template>
  <div class="card">
    <img :src="src" :alt="title" />

    <div class="time">
      <p>{{ moment(created_at).fromNow() }}</p>
      <p>by {{ author }}</p>
    </div>

    <h2>{{ title }}</h2>
    <p>{{ tagsSentence }}</p>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
  height: 400px;
  background-color: #f7f7f7;
  padding: 3px;
}

img {
  width: 100%;
}

.time {
  display: flex;
  justify-content: space-between;
  padding: 2px;
}
</style>
