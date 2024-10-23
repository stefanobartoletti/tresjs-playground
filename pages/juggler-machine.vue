<template>
  <main class="flex-1">
    <TresCanvas clear-color="#4F517D">
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

const height1 = ref(1.25)
const height2 = ref(1.75)
const cycles = ref(0)

onLoop(({ _delta, elapsed }) => {
  cube1.value.rotation.y = elapsed * 1.5
  cube1.value.position.x = Math.cos(elapsed) * 1.5
  cube1.value.position.y = Math.abs(Math.sin(elapsed)) * height1.value

  cube2.value.rotation.y = elapsed * 1.5
  cube2.value.position.x = -Math.cos(elapsed) * 1.5
  cube2.value.position.y = Math.abs(Math.sin(elapsed)) * height2.value

  plank.value.rotation.y = elapsed

  cycles.value = Math.floor(plank.value.rotation.y / Math.PI)

  if (cycles.value % 2 === 0) {
    height1.value = 1.25
    height2.value = 1.75
  }
  else {
    height1.value = 1.75
    height2.value = 1.25
  }
})
</script>
