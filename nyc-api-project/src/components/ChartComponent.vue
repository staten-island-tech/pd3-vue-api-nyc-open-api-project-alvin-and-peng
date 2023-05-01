<template>
  <canvas id="charts"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'

async function getWater() {
  let res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
  data = await res.json()

  console.log(data)
  return data
}

export default {
  name: 'NycPopulation',
  async mounted() {
    let data = await getWater()
    let a = data.map((e) => {
      return e.new_york_city_population
    })
    let b = data.map((e) => {
      return e.year
    })
    console.log(a)
    console.log(b)
    new Chart(document.getElementById('charts'), {
      type: 'bar',
      data: {
        labels: b,
        datasets: [
          {
            label: 'Nyc Population',
            data: a
          }
        ]
      }
    })
  }
}
</script>
