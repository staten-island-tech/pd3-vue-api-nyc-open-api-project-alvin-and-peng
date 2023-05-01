<!-- <template>
  <main>
    <NycConsumptionChart />
  </main>
</template>

<script>
import NycConsumptionChart from '../components/pieChart.vue'

</script> -->

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

