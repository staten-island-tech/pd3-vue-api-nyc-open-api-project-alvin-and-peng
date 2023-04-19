<script setup>
import { ref, onMounted } from 'vue'
const water = ref('')
async function getWater() {
  const response = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
  const data = await response.json()
  water.value = data.total
}

onMounted(() => {
  getWater()
})
</script>

<template>
  <div></div>
</template>
