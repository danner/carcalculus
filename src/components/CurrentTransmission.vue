<script>
  import NumberSlider from '@src/components/NumberSlider'

  export default {
    components: { NumberSlider },
    props: {
      id: {
        type: Number,
        default: 1,
      },
      title: {
        type: String,
        default: "",
      },
      gears: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>

<template>
  <v-container>
    <number-slider
      v-for="gear in gears"
      :key="gear.id"
      :number="gear.ratio"
      :title="gear.id"
      @input="gear.ratio = $event"
    />
  </v-container>
</template>

