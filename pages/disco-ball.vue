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
        ref="ring"
        :scale="1.25"
      >
        <TresSphereGeometry :args="[1, 64, 32]" />
        <TresMeshPhysicalMaterial
          roughness="0.1"
          metalness="0.9"
          color="silver"
          :flat-shading="true"
          :transparent="true"
          iridescence="1"
          iridescence-i-o-r="3"
        />
      </TresMesh>
      <TresDirectionalLight color="#fff" :intensity="0.75" :position="[3, 3, -3]" />
      <TresDirectionalLight color="#fff" :intensity="0.75" :position="[3, -3, -3]" />
      <TresDirectionalLight color="#fff" :intensity="0.75" :position="[-3, -3, 3]" />
      <TresAmbientLight :intensity="0.5" />
      <Suspense>
        <Environment files="/hdr/illovo_beach_balcony_1k.hdr" />
      </Suspense>
    </TresCanvas>
  </main>
</template>

<script setup>
const { onLoop } = useRenderLoop()

const ring = shallowRef(null)

onLoop(({ delta, _elapsed }) => {
  if (ring.value) {
    ring.value.rotation.y += delta * 0.15
  }
})
</script>
