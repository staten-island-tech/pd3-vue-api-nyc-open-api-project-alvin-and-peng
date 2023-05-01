<template>
  <div class="container">
    <BarChart v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import {} from 'vue'
export default {
  name: 'BarView',
  components: { BarChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [
          'TESTING1',
          'TESTING2',
          'TESTING3',
          'TESTING4',
          'TESTING5',
          'TESTING6',
          'TESTING7',
          'TESTING8',
          'TESTING9',
          'TESTING10',
          'TESTING11',
          'TESTING12',
          'TESTING13'
        ],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#caf0f8', '#ADD8f9', '#90e0ef', '#00b4d8', '#0077b6']
      }
    }
  },

  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
      console.log(res)
      let data = await res.json()
      const watery = data.filter((york) => york.nyc_consumption_million_gallons_per_day)
      this.chartData.datasets[0].data.push(watery.length)
      this.loaded = true
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>
.container {
  align-items: center;
  text-align: center;
}
</style>
