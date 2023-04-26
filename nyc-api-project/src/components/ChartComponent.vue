<template>
  <canvas id="charts"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
import { ref } from 'vue'

const waterdatas = ref('')
async function getWater() {
  let res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
  waterdatas.value = await res.json()
  let data = waterdatas.value
  console.log(data)
  return data
}

export default {
  name: 'nycpopulation',
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
        labels: a,
        datasets: [
          {
            label: 'Nyc Population',
            data: b
          }
        ]
      }
    })
  }
}
</script>
