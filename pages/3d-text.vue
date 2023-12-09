<template>
  <main class="flex flex-1  items-center justify-center overflow-hidden bg-slate-200">
    <div class="mx-auto grid aspect-square max-h-[80%]  min-w-full grid-cols-4 grid-rows-4 md:min-w-[40%]">
      <div v-for="letter in letters" :key="letter" class=" col-span-2 aspect-square" :class="letter.classes">
        <TresCanvas
          preset="realistic"
          :alpha="true"
        >
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
              >
                <TresMeshPhongMaterial :color="letter.color" />
              </Text3D>
            </Suspense>
          </Levioso>
          <TresDirectionalLight color="#fff" :intensity="1" />
          <TresAmbientLight :intensity="0.5" />
        </TresCanvas>
      </div>
    </div>
  </main>
</template>

<script setup>
const letters = ref([
  { char: 'X', color: '#3b82f6', classes: 'row-start-1 col-start-2' },
  { char: 'Y', color: '#10b981', classes: 'row-start-2 col-start-1' },
  { char: 'A', color: '#ef4444', classes: 'row-start-2 col-start-3' },
  { char: 'B', color: '#facc15', classes: 'row-start-3 col-start-2' },

])
</script>

<style scoped>

</style>
```
