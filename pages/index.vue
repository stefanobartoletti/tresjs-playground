<template>
  <main class="flex-1 p-4">
    <div class="grid grid-cols-4 gap-4">
      <NuxtLink v-for="item in menu" :key="item" :to="`/${item.slug}`">
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img :src="`/img/${item.slug}.png`" :alt="item.label" />
          </figure>
          <div class="card-body px-6 py-4">
            <span class="card-title">{{ item.label }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
const menu = useMenu()
</script>
