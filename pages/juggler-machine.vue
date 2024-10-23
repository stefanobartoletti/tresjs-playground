<template>
  <main class="flex-1">
    <TresCanvas
      clear-color="#4F517D"
    >
      <TresPerspectiveCamera
        :position="[2, 2, 5]"
        :look-at="[0, 0, 0]"
      />
      <!-- cube 1 -->
      <TresMesh ref="cube1">
        <TresBoxGeometry :args="[0.4, 0.4, 0.4]" />
        <TresMeshPhysicalMaterial
          roughness="0.1"
          metalness="0.9"
          color="#00DB81"
        />
      </TresMesh>
      <!-- cube 2 -->
      <TresMesh ref="cube2">
        <TresBoxGeometry :args="[0.4, 0.4, 0.4]" />
        <TresMeshPhysicalMaterial
          roughness="0.1"
          metalness="0.9"
          color="#fc34a1"
        />
      </TresMesh>
      <!-- plank -->
      <TresMesh ref="plank" :position="[0, -0.2, 0]">
        <TresBoxGeometry :args="[3.5, 0.05, 0.2]" />
        <TresMeshPhysicalMaterial
          roughness="0.1"
          metalness="0.9"
          color="#0081db"
        />
      </TresMesh>
      <!-- pole -->
      <TresMesh :position="[0, -1.2, 0]">
        <TresCylinderGeometry :args="[0.1, 0.1, 2, 32]" />
        <TresMeshPhysicalMaterial
          roughness="0.1"
          metalness="0.9"
          color="#0081db"
        />
      </TresMesh>
      <TresDirectionalLight color="#fff" :intensity="0.5" />
      <TresAmbientLight :intensity="0.5" />
      <Environment preset="modern" />
    </TresCanvas>
  </main>
</template>

<script setup>
const { onLoop } = useRenderLoop()

const cube1 = shallowRef(null)
const cube2 = shallowRef(null)
const plank = shallowRef(null)

onLoop(({ _delta, elapsed }) => {
  if (cube1.value) {
    cube1.value.rotation.y = elapsed * 1.5
    cube1.value.position.x = Math.cos(elapsed) * 1.5
    cube1.value.position.y = Math.abs(Math.sin(elapsed)) * 1.25
  }

  if (cube2.value) {
    cube2.value.rotation.y = elapsed * 1.5
    cube2.value.position.x = -Math.cos(elapsed) * 1.5
    cube2.value.position.y = Math.abs(Math.sin(elapsed)) * 1.75
  }

  if (plank.value) {
    plank.value.rotation.y = elapsed
  }
})
</script>
