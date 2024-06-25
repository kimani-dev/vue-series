<script setup>
import AppHeader from '@/components/AppHeader.vue';
import DataTable from '@/components/DataTable.vue';
import { ref } from 'vue';

const isLoggedIn = ref(false);

function login(data) {
  console.log(data);
  isLoggedIn.value = true;
}

const headers = [
  {
    title: 'User',
    value: 'user'
  },
  {
    title: 'Email',
    value: 'email'
  },
  {
    title: 'Phone Number',
    value: 'phone'
  }
];

const users = [
  {
    user: 'David Kimani',
    email: 'kimani@gmail.com',
    phone: '9328093'
  },
  {
    user: 'Brian Kimani',
    email: 'brian@gmail.com',
    phone: '0284-920'
  }
];
</script>

<template>
  <div>
    <h1>Component Basics</h1>
    <AppHeader title="Uber Eats" @login-click="login" />
    <app-counter v-if="isLoggedIn" />
    <app-counter v-if="isLoggedIn" />
    <h4 v-else>You are not logged in</h4>

    <!-- Data table -->
    <DataTable :headers :items="users">
      <a href="">Users</a>

      <!-- using a named slot -->
      <template #footer="{ numOfItems }">
        <div>
          <p>There are {{ numOfItems }} users in this table</p>
        </div>
      </template>
    </DataTable>
    <DataTable :headers :items="users" />
    <DataTable :headers :items="users">
      <i>Users</i>
    </DataTable>
  </div>
</template>
