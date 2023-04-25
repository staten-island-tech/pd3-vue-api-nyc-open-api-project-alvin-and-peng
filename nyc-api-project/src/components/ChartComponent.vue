<template>
  <Bar id="mychart" :options="chartOptions" :data="chartData" />
</template>

<script>
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

const water = ref('')
async function getWater() {
  let res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
  let Data = await res.json()
  water.value = Data
}
onMounted(() => {
  getWater()
})

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        // labels: ['January', 'February', 'March'],
        // datasets: [{ data: [40, 20, 12] }]
        labels: ['water.year'],
        datasets: [{ data: ['water.new_york_city_population'] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style>
#mychart {
}
</style>
