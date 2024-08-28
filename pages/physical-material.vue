<template>
  <main class="flex-1">
    <TresCanvas
      clear-color="#444"
      preset="realistic"
    >
      <TresPerspectiveCamera
        :position="[3, 3, 3]"
        :look-at="[0, 0, 0]"
      />
      <TresMesh
        ref="ring"
        :scale="0.1"
      >
        <TresTorusKnotGeometry :args="[10, 3, 200, 32]" />
        <TresMeshPhysicalMaterial
          color="#049ef4"
          roughness="0.1"
          metalness="0.7"
          ior="1.5"
          reflectivity="0.5"
          sheen="1"
          sheen-roughness="0.2"
          sheen-color="#0f0"
        />
      </TresMesh>
      <TresDirectionalLight color="#fff" />
      <TresAmbientLight color="#fff" intensity="0.5" />
    </TresCanvas>
  </main>
</template>

<script setup>
const { onLoop } = useRenderLoop()

const ring = shallowRef(null)

onLoop(({ delta, elapsed }) => {
  if (ring.value) {
    ring.value.rotation.y += delta * 0.15

    ring.value.rotation.x = elapsed * 0.2
  }
})
</script>
