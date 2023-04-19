<script setup>
import { ref, onMounted } from 'vue'
const water = ref('')
async function getWater() {
  let res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
  let data = await res.json()
  water.value = data.results
}
onMounted(() => {
  getWater()
})
</script>

<template>
  <main></main>
</template>
