<template>
  <main class="flex-1">
    <div v-for="i in 3" :key="i" class="min-h-screen border-2 border-solid border-red-500 bg-red-200">
      <h2>Main {{ i }}</h2>
    </div>
  </main>
</template>
