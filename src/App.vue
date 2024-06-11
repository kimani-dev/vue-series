<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  isDeveloper: false,
  stacks: [],
  languages: [],
  school: ''
});

// get school from the DOM and listen to change/input events
const schoolInput = document.getElementById('school');
schoolInput?.addEventListener('input', (e) => {
  form.value.school = e.target.value;
});
</script>

<template>
  <div>
    {{ form }}
    <form>
      <!-- Text value -->
      <input type="text" placeholder="Full Name" v-model="form.name" /> <br />

      <!-- Boolean value -->
      <label for="">Are you a developer?</label>
      <input type="checkbox" v-model="form.isDeveloper" /> <br />

      <!-- multi select checkbox -->
      <label for="">Which stacks are you familiar with?</label> <br />
      <label for="">MERN stack</label>
      <input type="checkbox" value="MERN" v-model="form.stacks" /> <br />
      <label for="">TALL stack</label>
      <input type="checkbox" value="TALL" v-model="form.stacks" /> <br />
      <label for="">MEAN stack</label>
      <input type="checkbox" value="MEAN" v-model="form.stacks" /> <br />

      <!-- Multi select dropdown -->
      <label for="">Which Language do you normally use?</label>
      <select v-model="form.languages" multiple>
        <!-- For multiple selections hold down CTRL -->
        <option value="js">Javascript</option>
        <option value="java">Java</option>
        <option value="dart">Dart</option>
      </select>
      <br />

      <!-- input with a lazy modifier -->
      <input type="text" placeholder="School" v-model.lazy="form.school" />
    </form>
  </div>
</template>
