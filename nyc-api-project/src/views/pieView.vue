<template>
  <div class="contain">
    NYC Consumption (Million Gallons Per Day)
    <PieChart v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>
<script>
import PieChart from '../components/pieChart.vue'
import {} from 'vue'
export default {
  name: 'PieView',
  components: { PieChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['<1000', '1050-1100', '1150-1200', '1250-1300', '1350-1499', '1500+'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#caf0f8', '#ADD8f9', '#caf', '#add', 'rgb(39, 101, 152)']
      }
    }
  },

  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
      console.log(res)
      let data = await res.json()
      const uno = data.filter((york) => york.nyc_consumption_million_gallons_per_day < '1000')
      this.chartData.datasets[0].data.push(uno.length)
      const dos = data.filter(
        (york) =>
          york.nyc_consumption_million_gallons_per_day >= '1050' &&
          york.nyc_consumption_million_gallons_per_day <= '1100'
      )
      this.chartData.datasets[0].data.push(dos.length)
      const tres = data.filter(
        (york) =>
          york.nyc_consumption_million_gallons_per_day >= '1150' &&
          york.nyc_consumption_million_gallons_per_day <= '1200'
      )
      this.chartData.datasets[0].data.push(tres.length)
      const quadro = data.filter(
        (york) =>
          york.nyc_consumption_million_gallons_per_day >= '1250' &&
          york.nyc_consumption_million_gallons_per_day <= '1300'
      )
      this.chartData.datasets[0].data.push(quadro.length)
      const cinco = data.filter(
        (york) =>
          york.nyc_consumption_million_gallons_per_day >= '1350' &&
          york.nyc_consumption_million_gallons_per_day <= '1499'
      )
      this.chartData.datasets[0].data.push(cinco.length)
      const sixe = data.filter((york) => york.nyc_consumption_million_gallons_per_day >= '1500')
      this.chartData.datasets[0].data.push(sixe.length)
      this.loaded = true
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style>
.contain {
}
</style>
