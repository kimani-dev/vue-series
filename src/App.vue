<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { ref } from 'vue';

const isLoggedIn = ref(false);

function login() {
  isLoggedIn.value = true;
}
</script>

<template>
  <div>
    <h1>Component Basics</h1>
    <AppHeader title="Uber Eats" @login-click="login" />
    <app-counter v-if="isLoggedIn" />
    <app-counter v-if="isLoggedIn" />
    <h4 v-else>You are not logged in</h4>
  </div>
</template>
