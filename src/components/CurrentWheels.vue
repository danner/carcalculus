<script>
  import NumberSlider from '@src/components/NumberSlider'

  export default {
    components: { NumberSlider },
    computed: {
      wheels() {
        return this.$store.state.car.wheels
      },
      diameter: {
        set(diameter) {

          this.$store.commit('car/SET_WHEELS', {...this.wheels, diameter: diameter})
        },
        get() {
          return this.$store.state.car.wheels.diameter
        },
      },
      width: {
        set(width) {
          this.$store.commit('car/SET_WHEELS', {...this.wheels, width: width})
        },
        get() {
          return this.$store.state.car.wheels.width
        },
      },
    },
  }
</script>

<template>
  <v-container>
    <number-slider
      v-model="diameter"
      title="diameter (in inches)"
      :max="50.00"
      :step="0.01"
    />
    <number-slider
      v-model="width"
      title="width (in mm)"
      :max="500"
      :step="1"
    />
  </v-container>
</template>
