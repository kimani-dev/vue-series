<script setup>
// props
defineProps({
  title: String
});

const emit = defineEmits({
  // validationg the additional data
  loginClick: ({ data }) => !!data
});

const additionalData = {
  x: 1,
  y: 2
};

function login() {
  emit('login-click', additionalData);
}
</script>

<template>
  <nav>
    <div>
      <h3>{{ title }}</h3>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
    </div>
    <!-- <button @click="$emit('login-click', additionalData)">Login</button> -->
    <button @click="login">Login</button>
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
