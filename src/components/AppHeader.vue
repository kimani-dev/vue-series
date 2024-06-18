<script setup>
// props
defineProps({
  title: String
});

defineEmits(['login-click']);
</script>

<template>
  <nav>
    <div>
      <h3>{{ title }}</h3>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
    </div>
    <button @click="$emit('login-click')">Login</button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  margin-right: 5px;
  color: chocolate;
  justify-content: space-between;
}

nav div {
  display: flex;
}

a {
  margin-left: 5px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
