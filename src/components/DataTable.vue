<script setup>
defineProps({
  headers: {
    type: Array,
    required: true,
    // check if every element has a title and value property
    validator: (value) => value.every((h) => !!h.title && h.value)
  },
  items: Array
});
</script>

<template>
  <!-- table title -->
  <slot>
    <!-- fallback content -->
    <strong>Items</strong>
  </slot>

  <table>
    <!-- headers -->
    <tr>
      <th v-for="(header, index) in headers" :key="index">{{ header.title }}</th>
    </tr>
    <tr v-for="(item, itemIndex) in items" :key="itemIndex">
      <td v-for="(header, index) in headers" :key="index">{{ item[header.value] }}</td>
    </tr>
  </table>

  <!-- table footer : named slot -->
  <slot name="footer" :numOfItems="items.length"></slot>
</template>
