<script setup>
// Composition API
import { ref, computed, onMounted } from 'vue';

const bankBalance = ref(100);
const name = ref('Kimani');

// note: whatever you pass in ref is the initial value of that variable
// note: when you pass a reactive value inside another ref, it is unwrapped
const balanceInKES = computed(() => bankBalance.value * 130.5);
const statement = computed(() => `${name.value}'s bank balance is USD ${bankBalance.value}`);

function increaseBalance() {
  bankBalance.value += 20;
}

function updateName(first, last) {
  name.value = `${first} ${last}`;
}

// vue depends on Javascript proxies to handle reactivity
const person = {
  name: 'Kimani',
  age: 55
};

let proxy = new Proxy(person, {
  get() {
    // update the DOM
    console.log('We are accessing a property in the person object');
    return 'Different thing';
  },
  set() {
    // update the DOM
    // return new value
    return '';
  }
});

console.log(proxy.name);

onMounted(() => {
  console.log('The component has been mounted');
});
</script>

<template>
  <div>
    <h1>Reactivity</h1>
    <!-- State unwrapping -->
    <p>USD: {{ bankBalance }}</p>
    <p>KES: {{ balanceInKES }}</p>

    <h5>{{ statement }}</h5>
    <button @click="increaseBalance">Pay Me!!</button>
    <button @click="updateName('David', 'Kimani')">Update Name</button>
  </div>
</template>
