<template>
  <div>
    <PieChart :chart-data="chartData" :chart-options="chartOptions"/>
  </div>
</template>

<script>
import PieChart from '../components/pieChart.vue' 
import { reactive } from 'vue'

export default {
  name: 'PieView',
  components: { PieChart },

  setup() {
    const chartData = reactive({
      labels: [],
      datasets: [
        {
          label: 'NYC Consumption Per Day',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ]
        }
      ]
    })

    const chartOptions = reactive({
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'NYC Consumption Per Day'
      }
    })

    return {
      chartData,
      chartOptions
    }
  },
  mounted() {
    fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
      .then(response => response.json())
      .then(data => {
        const consumptionData = data.reduce((acc, item) => {
          const date = new Date(item.date)
          const day = date.toLocaleDateString('en-US', { weekday: 'long' })
          acc[day] = (acc[day] || 0) + parseFloat(item.consumption.replace(/,/g, ''))
          return acc
        }, {})

        const labels = Object.keys(consumptionData)
        const values = Object.values(consumptionData)

        this.chartData.labels = labels
        this.chartData.datasets[0].data = values
      })
      .catch(error => console.error(error))
  }
}
</script>
