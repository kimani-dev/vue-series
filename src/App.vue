<script setup>
import { ref } from 'vue';

const user = ref({
  email: null,
  password: null
});

const isLoggedIn = ref(false);
const emailVerified = ref(false);

function login() {
  if (user.value.email && user.value.password) {
    isLoggedIn.value = true;
    return;
  }
  alert('Please fill in all the fields');
}

function verifyEmail() {
  emailVerified.value = true;
}
</script>
<template>
  <div>
    {{ isLoggedIn }}
    <h1>Conditional Rendering</h1>
    <form @submit.prevent="login" v-if="!isLoggedIn">
      <input type="email" placeholder="Email Address" v-model="user.email" /> <br />
      <input type="password" placeholder="Password" v-model="user.password" /> <br />
      <input type="submit" value="Login" />
    </form>

    <!-- email verification -->
    <div v-else-if="!emailVerified">
      <h2>Your email is not verified. Verify your email to continue</h2>
      <button @click="verifyEmail">Verify email</button>
    </div>

    <!-- Dashboard -->
    <h2 v-else>Welcome to your dashboard</h2>
  </div>
</template>
