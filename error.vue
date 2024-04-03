<template>
  <div>
    <SiteHeader />
    <div class="flex h-screen flex-col items-center justify-center gap-4 border">
      <p class="h1">{{ error.statusCode }}</p>
      <p>{{ error.message }}</p>
      <button class="btn" @click="handleError">Clear errors</button>
    </div>
  </div>
</template>

<script setup>
const error = useError()

const handleError = () => clearError({ redirect: '/' })
</script>
