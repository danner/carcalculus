<script>
  import DynoChart from '@src/components/DynoChart'
  import SpeedChart from '@src/components/SpeedChart'

export default {
  components: { DynoChart, SpeedChart },
  data: () => ({
    tab: 0,
  })
};

</script>

<template>
  <v-flex
    id="current-chart"
    xs12
  >
    <v-flex xs12>
      <v-tabs
        v-model="tab"
        slider="blue"
      >
        <v-tab>
          Dyno
        </v-tab>
        <v-tab>
          Speed
        </v-tab>
      </v-tabs>
    </v-flex>
    <v-flex xs12>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <dyno-chart />
        </v-tab-item>
        <v-tab-item>
          <speed-chart />
        </v-tab-item>
      </v-tabs-items>
    </v-flex>
  </v-flex>
</template>

<style lang="scss" module>
@import '@design';
</style>
