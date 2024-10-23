<template>
  <NuxtLink :to="`/${item}`">
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img :src="`/img/${item}.png`" :alt="useKebabToCapital(item)" />
      </figure>
      <div class="card-body px-6 py-4">
        <span class="card-title">{{ useKebabToCapital(item) }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  item: { type: String, required: true },
})
</script>
