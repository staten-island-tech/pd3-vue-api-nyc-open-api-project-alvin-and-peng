<script setup>
import { ref, onMounted } from 'vue'
import waterDatacard from '../components/waterDatacard.vue'
const water = ref('')
async function getWater() {
  let res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
  let Data = await res.json()
  water.value = Data
}
onMounted(() => {
  getWater()
})
</script>

<template>
  <div class="container">
    <waterDatacard
      v-for="(title, index) in water"
      :key="title.year"
      :id="index + 1"
      :water="title"
    />
  </div>
</template>
