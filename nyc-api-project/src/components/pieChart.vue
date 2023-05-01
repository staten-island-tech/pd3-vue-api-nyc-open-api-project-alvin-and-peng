<template>
  <Bar id="PieChart" :options="chartOptions" :data="chartData"></Bar>
</template>

<script>
import { Pie } from 'vue-chartjs'
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
  name: 'PieChart',
  components: { Pie },
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
          }
        }
      })
    }
  }
}
</script>