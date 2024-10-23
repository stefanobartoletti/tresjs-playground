<template>
  <main class="flex flex-1 items-center justify-center overflow-hidden bg-slate-800">
    <div class="mx-auto grid aspect-square max-h-[80%]  min-w-full grid-cols-4 grid-rows-4 md:min-w-[40%]">
      <div v-for="letter in letters" :key="letter" class=" col-span-2 aspect-square" :class="letter.classes">
        <TresCanvas preset="realistic" :alpha="true">
          <TresPerspectiveCamera
            :position="[3, 3, 3]"
            :look-at="[0, 0, 0]"
          />
          <Levioso>
            <Suspense>
              <Text3D
                :text="letter.char"
                font="/fonts/Inter_Bold.json"
                size="2"
                bevel-size="0.04"
                bevel-thickness="0.1"
                curve-segments="12"
                bevel-segments="12"
              >
                <TresMeshPhysicalMaterial
                  :color="letter.color"
                  roughness="0.5"
                  metalness="0.5"
                  ior="1.5"
                />
              </Text3D>
            </Suspense>
          </Levioso>
          <MouseParallax
            :factor="1.5"
            :ease="1"
          />
          <TresDirectionalLight
            color="#fff"
            :intensity="1"
            :position="[1, 3, 1]"
          />
          <TresAmbientLight :intensity="0.5" />
        </TresCanvas>
      </div>
    </div>
  </main>
</template>

<script setup>
const letters = ref([
  { char: 'Y', color: '#facc15', classes: 'row-start-1 col-start-2' },
  { char: 'X', color: '#3b82f6', classes: 'row-start-2 col-start-1' },
  { char: 'B', color: '#ef4444', classes: 'row-start-2 col-start-3' },
  { char: 'A', color: '#10b981', classes: 'row-start-3 col-start-2' },
])
</script>
