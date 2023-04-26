<script setup>
import { computed } from 'vue'
const props = defineProps({
  water: Object,
  year: Number,
  id: Number,
  new_york_city_population: Number,
  nyc_consumption_million_gallons_per_day: Number,
  per_capita_gallons_per_person_per_day: Number
})

const waterPath = computed(() => {
  return `/waterData/${props.water.year}`
})
</script>

<template>
  <router-link :to="waterPath" class="card">
    <h1>{{ id }}</h1>
    <h2>Year: {{ water.year }}</h2>
    <h3>NYC Population: {{ water.new_york_city_population }}</h3>
    <p>Gallons Used Per Day(gallons): {{ water.nyc_consumption_million_gallons_per_day }}</p>
    <p>Average Gallons Used Per Day: {{ water.per_capita_gallons_per_person_per_day }}</p>
  </router-link>
</template>

<style lang="scss" scoped></style>
