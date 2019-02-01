<script>
  import DynoChart from '@src/components/DynoChart'
  import SpeedChart from '@src/components/SpeedChart'

export default {
  components: { DynoChart, SpeedChart },
};

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
          <dyno-chart />
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">
          Speed
        </div>
        <v-card>
          <speed-chart />
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>

<style lang="scss" module>
@import '@design';
</style>
