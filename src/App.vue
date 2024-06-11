<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const school = ref('');

const interval = setInterval(() => {
  console.log('I run every second');
}, 1000);

onMounted(() => {
  // this callback will run when the component has been mounted to the DOM
  const schoolInput = document.getElementById('school');
  schoolInput.addEventListener('change', (e) => {
    school.value = e.target.value;
  });
});

onBeforeUnmount(() => clearInterval(interval));
</script>

<template>
  <div>
    <h1>Lifecycle Hooks</h1>

    {{ school }}
    <!-- input with a lazy modifier -->
    <input type="text" id="school" placeholder="School" />
  </div>
</template>
