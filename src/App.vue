<script setup>
import BlogCard from '@/components/BlogCard.vue';
import { computed } from 'vue';

const blogs = [
  {
    img: 'https://citizentv.obs.af-south-1.myhuaweicloud.com/126887/conversions/Sakaja-og_image.webp',
    created_at: '2024-6-20',
    author: 'Levin Too',
    title: 'Reject Finance Bill 2024'
  },
  {
    img: 'https://citizentv.obs.af-south-1.myhuaweicloud.com/126871/conversions/Weta-pinned.webp',
    created_at: '2024-6-19',
    author: 'Edward Omondi',
    title: 'The Ayes have it: Finance Bill 2024 sails...'
  },
  {
    img: 'https://citizentv.obs.af-south-1.myhuaweicloud.com/126892/conversions/ENGLAND-pinned.webp',
    created_at: '2024-6-19',
    title: 'Underwhelming England held by Denmark',
    tags: ['#reject, #financebill']
  }
];

const validBlogs = computed(() =>
  blogs.map((blog) => ({ ...blog, created_at: new Date(blog.created_at) }))
);
</script>

<template>
  <div>
    <h1>Component Props</h1>
    <div class="row">
      <BlogCard
        v-for="blog in validBlogs"
        :key="blog.title"
        :src="blog.img"
        :author="blog.author"
        :title="blog.title"
        :created_at="blog.created_at"
        :tags="blog?.tags"
      />
    </div>
  </div>
</template>

<style>
.row {
  display: flex;
}
</style>
