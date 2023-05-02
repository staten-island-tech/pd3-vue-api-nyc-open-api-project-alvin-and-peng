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
        labels: ['Total NYC Consumption', 'Consumption per Person'],
        datasets: [
          {
            data: [],
            backgroundColor: ['#caf0f8', '#ADD8f9']
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },

  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
      console.log(res)
      let data = await res.json()
      let nycConsumption = 0
      let perPersonConsumption = 0
      data.forEach((york) => {
        nycConsumption += Number(york.nyc_consumption_million_gallons_per_day)
        perPersonConsumption += Number(york.per_capita_gallons_per_person_per_day)
      })
      perPersonConsumption = perPersonConsumption / data.length
      this.chartData.datasets[0].data.push(nycConsumption.toFixed(2))
      this.chartData.datasets[0].data.push(perPersonConsumption.toFixed(2))
      this.loaded = true
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style>
.contain {
  align-items: center;
  text-align: center;
  scale: 87%;
}
</style>