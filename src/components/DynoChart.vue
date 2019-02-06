<script>
import ScatterChart from './ScatterChart.js'

export default {
  components: {
    ScatterChart
  },
  computed: {
    engine() {
      return this.$store.state.car.engine
    },
    dynoChart() {
      return {
        datasets: this.dynoPoints
      }
    },
    dynoPoints() {
      return [
        {
          label: "torque",
          fill: false,
          cubicInterpolationMode: 'monotone',
          borderColor: 'PaleVioletRed',
          backgroundColor: 'pink',
          data: this.engine.dyno.map(point => ({
            x: point.rpm,
            y: point.torque,
          }))
        },
        {
          label: "horsepower",
          fill: false,
          cubicInterpolationMode: 'monotone',
          borderColor: 'steelblue',
          backgroundColor: 'lightsteelblue',
          data: this.engine.dyno.map(point => ({
            x: point.rpm,
            y: (point.torque * point.rpm / 5252).toFixed(2),
          }))
        }
      ]
    },
  },
  watch: {
    chartData () {
      this.$data._chart.update()
    }
  },
}
</script>

<template>
  <div>
    <scatter-chart
      :chart-data="dynoChart"
      :options="{responsive: true, showLines: true}"
    />
  </div>
</template>
