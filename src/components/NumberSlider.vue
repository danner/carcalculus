<script>
  export default {
    props: {
      number: {
        type: [String, Number],
        default: "3.00",
      },
      title: {
        type: [String, Number],
        default: "",
      },
      min: {
        type: Number,
        default: 0.00,
      },
      max: {
        type: Number,
        default: 6.00,
      },
      step:  {
        type: Number,
        default: 0.01,
      },
    },
    methods: {
      updateNumber(number) {
        this.$emit('input', number);
      }
    },
  }
</script>

<template>
  <v-layout>
    <v-flex
      shrink
      style="width: 60px"
    >
      <v-text-field
        :value="number"
        class="mt-0"
        min="min"
        max="max"
        step="step"
        type="number"
        label="title"
        number
        @input="updateNumber($event)"
      />
    </v-flex>
    <v-flex>
      <v-slider
        :value="number"
        :min="min"
        :max="max"
        :step="step"
        number
        @input="updateNumber($event)"
      />
    </v-flex>
  </v-layout>
</template>

<style>

</style>
