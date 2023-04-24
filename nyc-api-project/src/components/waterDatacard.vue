<template>
  <RouterLink :to="wtrpath">
    <div class="card">
      <h2>Year: {{ water.year }}</h2>
      <h3>NY city population: {{ water.new_york_city_population }}</h3>
      <h3>
        NY consuption in million gallons per day:
        {{ water.nyc_consumption_million_gallons_per_day }}
      </h3>
      <h3>Per peson gallons per day: {{ water.per_capita_gallons_per_person_per_day }}</h3>
    </div>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  water: Object,
  year: Number,
  new_york_city_population: Number,
  nyc_consumption_million_gallons_per_day: Number,
  per_capita_gallons_per_person_per_day: Number
})
const wtrpath = computed(() => {
  return `/waterdata/${props.water.year}`
})
</script>

<style>
.card {
  text-align: center;
  margin: 20px auto;
  border: 3px solid rgb(186, 183, 51);
  background-color: beige;
}

h2 {
  font-weight: 700;
}

h3 {
  font-weight: 550;
}
</style>
