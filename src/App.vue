<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';

const age = ref(0);
const user = ref({
  name: 'Kimani',
  age: 70,
  location: {
    address: 'bla bla bla',
    something: {
      anything: ''
    }
  }
});

const x = ref(10);
const y = ref(20);

function increaseAge() {
  age.value++;
}

// function changeUserDetails(userDetails) {
//   user.value = {
//     ...user.value,
//     ...userDetails
//   };
// }

function changeName() {
  user.value.name = 'Levin';
}

function changeSomething() {
  user.value.location.something = 'Something new';
}

watch(age, (newAge, oldAge) => {
  console.log(oldAge, newAge);
  if (newAge >= 18) console.log('You are an adult!');
});

watch(user, (newUser) => {
  console.log(newUser);
});

watch(
  () => user.value.location.something,
  (newSomething) => {
    console.log(newSomething);
    console.log('Something has changed');
  }
);

// watching multiple reactive variables
watch([x, y], ([a, b]) => {
  console.log(a, b);
  // try to use something I am not watching
  // console.log(user.value);
});

// watch effect
watchEffect(() => {
  const addition = x.value + y.value;
  console.log(addition);
});

onMounted(() => {
  setTimeout(() => {
    x.value = 100;
    y.value = 200;
  }, 3000);
});
</script>
<template>
  <div>
    <h1>{{ age }}</h1>
    <button @click="increaseAge">Increase Age</button> <br />
    {{ user }} <br />
    <button @click="changeSomething">Change Something</button>
  </div>
</template>
