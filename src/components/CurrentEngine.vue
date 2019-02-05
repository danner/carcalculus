<script>
  import NumberSlider from '@src/components/NumberSlider'

  export default {
    components: { NumberSlider },
    computed: {
      dyno() {
        return this.$store.state.car.engine.dyno
      }
    },
    methods: {
      updateDynoPoint(rpm, torque) {
        this.$store.commit('car/SET_ENGINE_DYNO_POINT', {
          rpm: rpm,
          torque: torque
        })
      },
    }
  }
</script>

<template>
  <v-container>
    <v-flex
      v-for="point in dyno"
      :key="point.rpm"
    >
      <number-slider
        :value="point.torque"
        :title="'rpm: ' + point.rpm"
        :max="2000"
        :step="1"
        @input="updateDynoPoint(point.rpm, $event)"
      />
    </v-flex>
  </v-container>
</template>
