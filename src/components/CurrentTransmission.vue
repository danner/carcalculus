<script>
  import NumberSlider from '@src/components/NumberSlider'

  export default {
    components: { NumberSlider },
    computed: {
      gears() {
        return this.$store.state.car.transmission.gears
      }
    },
    methods: {
      updateGearRatio(gear, e) {
        this.$store.commit('car/SET_TRANSMISSION_GEAR_RATIO', {
          gear: gear,
          value: e
        })
      },
    }
  }
</script>

<template>
  <v-container>
    <number-slider
      v-for="gear in gears"
      :key="gear.id"
      :number="gear.ratio"
      :title="gear.id"
      @input="updateGearRatio(gear, $event)"
    />
  </v-container>
</template>

