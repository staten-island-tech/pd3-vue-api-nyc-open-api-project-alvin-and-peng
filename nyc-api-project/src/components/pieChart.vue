<template>
  <div>
    <h1>NYC Consumption per Day</h1>
    <canvas id="myChart"></canvas>
  </div>
</template>


<script>
import { Pie } from 'vue-chartjs'

export default {
  name: 'NycConsumptionChart',
  extends: Pie,
  data() {
    return {
      consumptionData: [],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {
    fetch('https://data.cityofnewyork.us/resource/ia2d-e54m.json')
      .then(response => response.json())
      .then(data => {
        this.consumptionData = data.map(item => item.nyc_consumption_gallons_per_day)
        this.renderChart(
          {
            labels: ['NYC Consumption per Day', 'Other Consumption'],
            datasets: [
              {
                backgroundColor: ['#41B883', '#E46651'],
                data: [this.consumptionData[0], 1 - this.consumptionData[0]],
              },
            ],
          },
          this.options
        )
      })
  },
}
</script>
