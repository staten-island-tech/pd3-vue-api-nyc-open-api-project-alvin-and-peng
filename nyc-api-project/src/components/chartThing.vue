<template>
  <h2>ChartJS</h2>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

const labels = ['One', 'Two', 'Three', 'Four', 'Five']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'My Dataset',
      backgroundColor: 'rgb(255,99,132)',
      borderColor: 'rgb(255,99,132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }
  ]
}

const config = {
  type: 'line',
  data: data,
  options: {}
}
onMounted(() => {
  const myChart = new Chart(document.getElementById('myChart'), config)
})

export default {}
</script>

<style lang="scss" scoped></style>
