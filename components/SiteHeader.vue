<template>
  <header class="sticky top-0 h-screen p-4">
    <ul class="menu w-56 rounded-box bg-base-200">
      <li>
        <NuxtLink to="/" active-class="active">Home</NuxtLink>
      </li>
      <li v-for="page in menu" :key="page">
        <NuxtLink :to="page.link" active-class="active">{{ page.label }}</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script setup>
const menu = useMenu()
</script>
