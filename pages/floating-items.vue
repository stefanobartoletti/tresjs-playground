<template>
  <main class="relative flex flex-1 items-center justify-center overflow-hidden bg-blue-700 p-4">
    <h1 class="z-20 mx-auto text-center text-7xl font-bold text-yellow-400 md:text-9xl">Floating items title</h1>
    <div v-for="ring in rings" :key="ring" class="pointer-events-none absolute aspect-square w-48 md:w-80 " :class="ring.classes">
      <TresCanvas preset="realistic" :alpha="true">
        <TresPerspectiveCamera
          :position="[1.8, 1.8, 1.8]"
          :look-at="[0, 0, 0]"
        />
        <Levioso rotation-factor="2" float-factor="2">
          <TresMesh>
            <TresTorusGeometry :args="[1, 0.1, 32, 128]" />
            <MeshGlassMaterial :color="ring.color" />
          </TresMesh>
        </Levioso>
        <TresDirectionalLight color="#fff" :intensity="0.5" />
        <TresAmbientLight :intensity="0.1" />
      </TresCanvas>
    </div>
  </main>
</template>

<script setup>
const rings = ref([
  { color: '#b0b', classes: 'z-10 -translate-x-32 md:-translate-x-80' },
  { color: '#bb0', classes: 'z-30 translate-x-32 md:translate-x-80' },
  { color: '#0bb', classes: 'z-20' },
])
</script>
