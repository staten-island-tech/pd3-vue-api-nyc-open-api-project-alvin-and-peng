<template>
  <div class="container">
    <BarChart v-if="loaded" :chartData="chartdata" :chartOptions="chartOptions" />
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'

export default {
  name: 'LineView',
  components: { BarChart },
  data() {
    return {
      loaded: false,
      chartdata: {
        labels: [],
        datasets: []
      },
      chartOptions: {}
    }
  },

  methods: {
    allThing: async function () {
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')

        const consumptionData = await res.json()
        let labels = ['A', 'B', 'C', 'D', 'E', 'F']
        let consumption = []

        labels.forEach((label) => {
          consumption.push(consumptionData.filter((rest) => rest.consumption === label).length)
        })

        this.chartData = {
          labels: labels,
          datasets: [
            {
              data: consumption,
              backgroundColor: '#FF5733',
              label: 'bruhbabooey'
            }
          ]
        }

        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    },
    async mounted() {
      this.allThing()
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
