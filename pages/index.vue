<template>
  <main class="flex-1 p-4">
    <div class="grid grid-cols-4 gap-4">
      <NuxtLink v-for="item in menu" :key="item" :to="item.link">
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ item.label }}</h2>
          </div>
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
const menu = useMenu()
</script>
