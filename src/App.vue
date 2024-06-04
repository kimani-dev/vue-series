<script setup>
const name = 'Kimani';

const options = { href: 'https://google.com', target: '_blank' };

function capitalizeName(name) {
  name.toUpperCase();
}

const loggedIn = false;
const user = undefined;

// document.querySelector('#form').addEventListener('submit', (e) => {
//   e.preventDefault();
// });

function login() {
  console.log('You are now logged in');
}
</script>

<template>
  <h1>This is Vue js session taken by {{ capitalizeName(name) }}</h1>
  <a v-bind="options">Go to google</a>
  <br />
  <button>Understand Vue Js</button>

  <h2 v-if="loggedIn">Sensitive information {{ user?.sensitivieInformation }}</h2>
  <h2 v-else-if="!user">User is not defined</h2>
  <h2 v-else>Something else</h2>

  <form action="" @submit.prevent="login">
    <input type="text" placeholder="Full Name" />
    <input type="text" placeholder="Email" />
    <input type="submit" value="Submit" />
  </form>
</template>
