<script setup>
// List rendering
const users = [
  {
    name: 'Mirriam Njeri',
    email: 'mirriam@gmail.com'
  },
  {
    name: 'Brian Kimani',
    email: 'brian@gmail.com'
  },
  {
    name: 'David Maina',
    email: 'david@gmail.com'
  }
];
</script>

<template>
  <div>
    <h1>List Rendering</h1>

    <!-- destructuring a v-for -->
    <div class="user" v-for="({ name, email }, index) in users" :key="email">
      {{ `User number ${index + 1}` }}
      <p>{{ name }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<style scoped>
.user {
  background-color: gray;
  color: white;
  padding: 2px;
  padding-left: 10px;
  margin-top: 10px;
}
</style>
