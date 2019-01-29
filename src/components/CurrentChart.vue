<script>
  import DynoChart from '@src/components/DynoChart'
  import SpeedChart from '@src/components/SpeedChart'

export default {
    components: { DynoChart, SpeedChart },
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
}
</script>

<template>
  <v-layout>
    <v-expansion-panel
      expand
      focusable
    >
      <v-expansion-panel-content>
        <div slot="header">
          Dyno
        </div>
        <v-card>
          <dyno-chart
            :engine="engine"
          />
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">
          Speed
        </div>
        <v-card>
          <speed-chart
            v-bind="$props"
          />
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>

<style lang="scss" module>
@import '@design';
</style>
