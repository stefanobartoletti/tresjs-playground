<template>
  <main class="flex-1">
    <TresCanvas
      clear-color="#facc15"
      preset="realistic"
    >
      <TresPerspectiveCamera
        :position="[3, 3, 3]"
        :look-at="[0, 0, 0]"
      />
      <Text3D
        text="My 3D Text"
        font="/fonts/Inter_Bold.json"
      >
        <TresMeshPhongMaterial color="#8b5cf6" />
      </Text3D>
      <TresDirectionalLight color="#fff" :intensity="0.5" />
      <TresAmbientLight :intensity="0.1" />
    </TresCanvas>
  </main>
</template>

<script setup>

</script>
