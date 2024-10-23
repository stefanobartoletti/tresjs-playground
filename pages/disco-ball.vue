<template>
  <main class="flex-1">
    <TresCanvas
      clear-color="#333"
    >
      <TresPerspectiveCamera
        :position="[3, 3, 3]"
        :look-at="[0, 0, 0]"
      />
      <TresMesh
        ref="ring"
        :scale="1.25"
      >
        <TresSphereGeometry :args="[1, 64, 32]" />
        <TresMeshPhysicalMaterial
          roughness="0.1"
          metalness="0.9"
          color="silver"
          :flat-shading="true"
        />
      </TresMesh>
      <TresDirectionalLight color="#fff" :intensity="0.75" :position="[3, 3, -3]" />
      <TresDirectionalLight color="#fff" :intensity="0.75" :position="[3, -3, -3]" />
      <TresDirectionalLight color="#fff" :intensity="0.75" :position="[-3, -3, 3]" />
      <TresAmbientLight :intensity="0.5" />
      <Environment preset="modern" />
    </TresCanvas>
  </main>
</template>

<script setup>
const { onLoop } = useRenderLoop()

const ring = shallowRef(null)

onLoop(({ delta, _elapsed }) => {
  if (ring.value) {
    ring.value.rotation.y += delta * 0.25
  }
})
</script>
