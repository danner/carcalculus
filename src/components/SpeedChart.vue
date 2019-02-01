<script>
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
  },
  data: () => ({
    rpmIncrement: 300,
  }),
  computed: {
    chassis() {
      return this.$store.state.car.chassis
    },
    drivetrain() {
      return this.$store.state.car.drivetrain
    },
    engine() {
      return this.$store.state.car.engine
    },
    transmission() {
      return this.$store.state.car.transmission
    },
    wheels() {
      return this.$store.state.car.wheels
    },
    transmissionSpeeds() {
      return {
        labels: this.rpmLabels,
        datasets: this.calculateTransmissionSpeeds(this.engine, this.transmission, this.drivetrain, this.wheels, this.rpmIncrement)
      }
    },
    rpmLabels() {
      return this.calculateRpmLabels(this.engine, 300)
    },
  },
  watch: {
    chartData () {
      this.$data._chart.update()
    }
  },
  methods: {
    calculateRpmLabels(engine, increment) {
      if (engine.dyno) {
        const [maxRpm] = engine.dyno.slice(-1)
        return Array.from(
          { length: Math.ceil(maxRpm.rpm / increment) + 1 },
          (v, i) => i * increment
        )
      } else {
        return Array.from({ length: 20 }, (v, i) => i * increment)
      }
    },
    gearSpeeds(rpmPoints, gearRatio, finalDriveRatio, wheelDiameter) {
      const MILES_TO_INCHES = 63360
      return rpmPoints.map(rpm =>
        (
          ((60 / MILES_TO_INCHES) * (rpm * wheelDiameter * Math.PI)) /
          (gearRatio * finalDriveRatio)
        ).toFixed(2)
      )
    },
    calculateTransmissionSpeeds(engine, transmission, drivetrain, wheels, increment) {
      // calculate all the gears.
      return transmission.gears.map(gear => ({
        label: 'gear ' + gear.id,
        data: this.gearSpeeds(
          this.rpmLabels,
          gear.ratio,
          drivetrain.final_drive,
          wheels.diameter
        ),
      }))
    },
  },
}
</script>

<template>
  <div>
    <line-chart
      :chart-data="transmissionSpeeds"
      :options="{responsive: true}"
    />
  </div>
</template>
