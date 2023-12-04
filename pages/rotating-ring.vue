<template>
  <main class="flex-1">
    <TresCanvas
      clear-color="#333"
      preset="realistic"
    >
      <TresPerspectiveCamera
        :position="[3, 3, 3]"
        :look-at="[0, 0, 0]"
      />
      <TresMesh
        ref="torusRef"
        :scale="1"
      >
        <TresTorusGeometry :args="[1, 0.1, 32, 128]" />
        <TresMeshPhongMaterial color="gold" :shininess="150" />
      </TresMesh>
      <TresDirectionalLight color="#fff" :intensity="0.5" />
      <TresAmbientLight :intensity="0.1" />
    </TresCanvas>
  </main>
</template>

<script setup>
const { onLoop } = useRenderLoop()

const torusRef = shallowRef(null)

onLoop(({ delta, elapsed }) => {
  if (torusRef.value) {
    torusRef.value.rotation.y += delta * 0.15

    torusRef.value.rotation.x = elapsed * 0.2
  }
})
</script>
