<template>
  <div>
    <canvas ref="pieChart"></canvas>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data() {
    return {
      data: [],
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
        const data = await response.json()
        this.data = data
        this.renderChart({
          labels: this.data.map(item => item.type_of_use),
          datasets: [{
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            data: this.data.map(item => item.total_gallons_per_day)
          }]
        }, this.options)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
