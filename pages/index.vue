<template>
  <main class="mt-20 flex-1 p-4">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <HomeCard v-for="item in menu" :key="item" :item="item" />
    </div>
  </main>
</template>

<script setup>
const menu = useMenu()
</script>
