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

const cycles = ref(0)

onLoop(({ _delta, elapsed }) => {
  const speedFactor = elapsed * 1

  const jump = {
    forth: Math.abs(Math.sin(speedFactor)) * 1.5,
    back: Math.abs(Math.sin(speedFactor * 2)) * 0.75,
  }

  cube1.value.rotation.y = speedFactor * 2
  cube1.value.position.x = Math.cos(speedFactor) * 1.5

  cube2.value.rotation.y = speedFactor * 2
  cube2.value.position.x = -1  *Math.cos(speedFactor) * 1.5

  plank.value.rotation.y = speedFactor * 4 // only integers to sync with the jump

  cycles.value = Math.floor(speedFactor / Math.PI)

  if (cycles.value % 2 === 0) {
    cube1.value.position.y = jump.forth
    cube2.value.position.y = jump.back
  }
  else {
    cube1.value.position.y = jump.back
    cube2.value.position.y = jump.forth
  }
})
</script>
