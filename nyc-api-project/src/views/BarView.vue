<template>
  <div class="contain">
    Years for Average Consumption of Water Per Person (Gallons)
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
        labels: ['110-120', '130-140', '150-160', '170-180', '190-200', '200+'],
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
      const one = data.filter(
        (york) =>
          york.per_capita_gallons_per_person_per_day <= '120' &&
          york.per_capita_gallons_per_person_per_day >= '110'
      )
      this.chartData.datasets[0].data.push(one.length)
      const two = data.filter(
        (york) =>
          york.per_capita_gallons_per_person_per_day >= '130' &&
          york.per_capita_gallons_per_person_per_day <= '140'
      )
      this.chartData.datasets[0].data.push(two.length)
      const three = data.filter(
        (york) =>
          york.per_capita_gallons_per_person_per_day >= '150' &&
          york.per_capita_gallons_per_person_per_day <= '160'
      )
      this.chartData.datasets[0].data.push(three.length)
      const four = data.filter(
        (york) =>
          york.per_capita_gallons_per_person_per_day >= '170' &&
          york.per_capita_gallons_per_person_per_day <= '180'
      )
      this.chartData.datasets[0].data.push(four.length)
      const five = data.filter(
        (york) =>
          york.per_capita_gallons_per_person_per_day < '200' &&
          york.per_capita_gallons_per_person_per_day >= '190'
      )
      this.chartData.datasets[0].data.push(five.length)
      const six = data.filter((york) => york.per_capita_gallons_per_person_per_day >= '200')
      this.chartData.datasets[0].data.push(six.length)
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
