<script>
  import NumberSlider from '@src/components/NumberSlider'

  export default {
    components: { NumberSlider },
    computed: {
      chassis() {
        return this.$store.state.car.chassis
      },
      weight: {
        set(weight) {
          this.$store.commit('car/SET_CHASSIS', {...this.chassis, weight: weight})
        },
        get() {
          return this.$store.state.car.chassis.weight
        },
      },
      frontalArea: {
        set(frontalArea) {
          this.$store.commit('car/SET_CHASSIS', {...this.chassis, frontal_area: frontalArea})
        },
        get() {
          return this.$store.state.car.chassis.frontal_area
        },
      },
      dragCoefficient: {
        set(dragCoefficient) {
          this.$store.commit('car/SET_CHASSIS', {...this.chassis, drag_coefficient: dragCoefficient})
        },
        get() {
          return this.$store.state.car.chassis.drag_coefficient
        },
      },
    },
  }
</script>

<template>
  <v-container>
    <number-slider
      v-model="weight"
      title="weight (in lbs)"
      :min="0"
      :max="10000"
      :step="1"
    />
    <number-slider
      v-model="frontalArea"
      title="frontal area (in sq. ft)"
      :min="0.0"
      :max="100.0"
      :step="0.1"
    />
    <number-slider
      v-model="dragCoefficient"
      title="drag coefficient"
      :min="0.00"
      :max="1.30"
      :step="0.01"
    />
  </v-container>
</template>

