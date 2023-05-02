<script>
export default {
  props: {
    water: Object,
    year: Number,
    id: Number,
    new_york_city_population: Number,
    nyc_consumption_million_gallons_per_day: Number,
    per_capita_gallons_per_person_per_day: Number
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ id }}</h1>
    <h2>Year: {{ water.year }}</h2>
    <h3>NYC Population: {{ water.new_york_city_population }}</h3>
    <p>Gallons Used Per Day(gallons): {{ water.nyc_consumption_million_gallons_per_day }}</p>
    <p>Average Gallons Used Per Day: {{ water.per_capita_gallons_per_person_per_day }}</p>
  </div>
</template>

<style scoped>
.container {
  background-color: aliceblue;
  border: 1px solid black;
  max-width: 250px;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px;
  margin: 50px;
}
</style>
