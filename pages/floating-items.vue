<template>
  <main class="relative flex flex-1 items-center justify-center bg-blue-400">
    <h1 class="z-20 mx-auto text-9xl font-bold">Floating text title</h1>
    <div class="pointer-events-none absolute z-10 aspect-square w-80 -translate-x-56">
      <TresCanvas

        alpha="true"
        premultiplied-alpha="false"
      >
        <TresPerspectiveCamera
          :position="[1.6, 1.6, 1.6]"
          :look-at="[0, 0, 0]"
        />
        <TresMesh
          ref="ring1"
          :scale="1"
        >
          <TresTorusGeometry :args="[1, 0.1, 32, 128]" />
          <TresMeshPhongMaterial color="red" :shininess="150" />
        </TresMesh>
        <TresDirectionalLight color="#fff" :intensity="0.5" />
        <TresAmbientLight :intensity="0.1" />
      </TresCanvas>
    </div>

    <div class="pointer-events-none absolute z-30 aspect-square w-80 translate-x-56">
      <TresCanvas
        preset="realistic"
        alpha="true"
        premultiplied-alpha="false"
      >
        <TresPerspectiveCamera
          :position="[1.6, 1.6, 1.6]"
          :look-at="[0, 0, 0]"
        />
        <TresMesh
          ref="ring2"
          :scale="1"
        >
          <TresTorusGeometry :args="[1, 0.1, 32, 128]" />
          <TresMeshPhongMaterial color="lightgreen" :shininess="150" />
        </TresMesh>
        <TresDirectionalLight color="#fff" :intensity="0.5" />
        <TresAmbientLight :intensity="0.1" />
      </TresCanvas>
    </div>
  </main>
</template>

<script setup>
const { onLoop } = useRenderLoop()

const ring1 = shallowRef(null)
const ring2 = shallowRef(null)

onLoop(({ delta, elapsed }) => {
  if (ring1.value) {
    ring1.value.rotation.y += delta * 0.15

    ring1.value.rotation.x = elapsed * 0.2
  }
  if (ring2.value) {
    ring2.value.rotation.y = elapsed * -0.15
    ring2.value.rotation.x += delta * -0.2
  }
})
</script>
