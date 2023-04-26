<template>
  <Line id="myChart"></Line>
</template>

<script>
import Chart from 'chart.js/auto'
import { ref } from 'vue'

const water = ref('')
async function getWater() {
  const response = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
  const data = await response.json()
  water.value = data
}

export default {
  name: 'chartThing',
  async mounted() {
    let dataa = await getWater()
    let a = dataa.map((e) => {
      return e.nyc_consumption_million_gallons_per_day
    })
    let b = dataa.map((e) => {
      return e.per_capita_gallons_per_person_per_day
    })

    console.log(a)
    console.log(b)
  }
}

const ctx = document.getElementById('myChart')
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: a,
    datasets: [
      {
        label: 'NYC Water Consumption Per Day (Millions)',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }
    ]
  }
})

chart
</script>

<style>
#myChart {
  max-width: 500px;
  max-height: 500px;
}
</style>
