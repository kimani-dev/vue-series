<script>
// options Api
export default {
  data: () => ({
    bankBalance: 100,
    name: 'Kimani',
    nums: [1, 2, 3, 4]
  }),
  methods: {
    increaseBalance() {
      this.bankBalance += 20;
    }
  },
  mounted() {
    // do something when the component is rendered
  }
};
</script>

<template>
  <div>
    <h1>Reactivity</h1>

    <p>{{ bankBalance }}</p>
    <button @click="increaseBalance">Pay Me!!</button>
  </div>
</template>
