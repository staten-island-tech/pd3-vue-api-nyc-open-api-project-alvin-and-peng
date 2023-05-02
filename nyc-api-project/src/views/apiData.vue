<script setup>
import waterCards from '../components/waterCards.vue'
import { ref, onMounted } from 'vue'

const water = ref('')
async function getWater() {
  const response = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
  const data = await response.json()
  water.value = data
}

onMounted(() => {
  getWater()
})
</script>

<template>
  <div class="container">
    <waterCards v-for="(title, index) in water" :key="title.year" :id="index + 1" :water="title" />
  </div>
</template>
