<template>
  <Bar id="BarChart" :options="chartOptions" :data="chartData"></Bar>
</template>

<script>
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
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => ({
        scales: {
          y: {
            beginAtZero: true
          },

          legend: {
            display: true,
            title: 'Amount'
          }
        }
      })
    }
  }
}
</script>
