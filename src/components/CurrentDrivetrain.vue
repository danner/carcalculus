<script>
  import NumberSlider from '@src/components/NumberSlider'

  export default {
    components: { NumberSlider },
    computed: {
      drivetrain() {
        return this.$store.state.car.drivetrain
      },
      finalDrive: {
        set(finalDrive) {

          this.$store.commit('car/SET_DRIVETRAIN', {...this.drivetrain, final_drive: finalDrive})
        },
        get() {
          return this.$store.state.car.drivetrain.final_drive
        },
      },
      losses: {
        set(losses) {
          this.$store.commit('car/SET_DRIVETRAIN', {...this.drivetrain, losses: losses})
        },
        get() {
          return this.$store.state.car.drivetrain.losses
        },
      },
    },
  }
</script>

<template>
  <v-container>
    <number-slider
      v-model="finalDrive"
      title="final drive"
    />
    <number-slider
      v-model="losses"
      title="losses"
      :max="1.00"
    />
  </v-container>
</template>

