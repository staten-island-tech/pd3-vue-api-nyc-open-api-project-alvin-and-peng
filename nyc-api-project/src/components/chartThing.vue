<template>
  <canvas id="myChart" :options="chartOptions" :data="chartData"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'chartThing'
}

mounted() {
const ctx = document.getElementById('myChart');

const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
}

const myChart = new Chart(ctx, {
  type: 'line',
  data: data
})

myChart
}
</script>

<style>
#myChart {
  max-width: 500px;
  max-height: 500px;
}
</style>
