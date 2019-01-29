<script>
  import Vue from 'vue';
  import VueFrappe from 'vue2-frappe';
  Vue.use(VueFrappe);

  export default {
    props: {
      engine: {
        type: Object,
        default: null,
      },
      transmission: {
        type: Object,
        default: null,
      },
      drivetrain: {
        type: Object,
        default: null,
      },
      wheels: {
        type: Object,
        default: null,
      },
    },
    methods: {
      rpmLabels(engine, increment) {
        if(engine.dyno){
          const [maxRpm] = engine.dyno.slice(-1);
          return Array.from({ length: Math.ceil(maxRpm.rpm/increment)+1 }, (v, i) => (i*increment));
        } else {
          return Array.from({ length: 20 }, (v, i) => i*increment);
        }
      },
      gearSpeeds(rpmPoints, gearRatio, finalDriveRatio, wheelDiameter) {
        const MILES_TO_INCHES = 63360;
        return rpmPoints.map(rpm => (60/MILES_TO_INCHES)*(rpm*wheelDiameter*Math.PI)/(gearRatio * finalDriveRatio));
      },
      speedValues(engine, transmission, drivetrain, wheels, increment) {
        // calculate all the gears.
        // TODO: Memoize the results
        const rpmPoints = this.rpmLabels(engine, increment);
        let gears = [];
        for (let gear of transmission.gears) {
          gears.push(this.gearSpeeds(rpmPoints, gear.ratio, drivetrain.final_drive, wheels.diameter))
        }
        return gears;
      },
    },
  }
</script>

<template>
  <div>
    <!-- id - Every chart must have an id. -->
    <!-- title - The title displayed on the chart -->
    <!-- type - The type of chart: line, bar, percent, pie, or axis-mixed. -->
    <!-- labels - Names for each value on the x-axis. -->
    <!-- height- Optional: How tall the chart should be. -->
    <!-- colors - Separate colors for each dataset. -->
    <!-- lineOptions - Additional options for how to display line charts. See docs. -->
    <!-- datasets - An array of objects containing names and values for each data set. -->
    <vue-frappe
      id="my-chart-id"
      type="line"
      :labels="rpmLabels(engine, 300).map(rpm => rpm.toString())"
      :colors="['#008F68', '#FAE042']"
      :line-options="{regionFill: 1}"
      :data-sets="speedValues(engine, transmission, drivetrain, wheels, 300)"
    />
  </div>
</template>

