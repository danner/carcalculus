<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

import CurrentCar from '@src/components/CurrentCar'
import CurrentChart from '@src/components/CurrentChart'

export default {
  page: {
    title: '',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, CurrentCar, CurrentChart },
  data: () => ({
    current_car: {
      drivetrain: {
        id: 1,
        name: "8.8 torsen 2",
        final_drive: 3.07,
        losses: 0.15,
      },
      engine: {
        id: 1,
        title: "347 Stroker",
        dyno: [
          {rpm: 0, torque: 0},
          {rpm: 1500, torque: 350},
          {rpm: 4700, torque: 390},
          {rpm: 5300, torque: 407},
          {rpm: 6500, torque: 350},
          {rpm: 7000, torque: 0},
        ],
      },
      transmission: {
          id: 1,
          title: "t-56 magnum short",
          gears: [
            {id: 1, ratio: "2.66"},
            {id: 2, ratio: "1.80"},
            {id: 3, ratio: "1.30"},
            {id: 4, ratio: "1.00"},
            {id: 5, ratio: "0.80"},
            {id: 6, ratio: "0.63"},
          ],
        },
      wheels: {
        id: 1,
        name: "Nitto NT555 G2",
        diameter: 25.67,
        revs_per_mile: 808,
      },
    },
  }),
}
</script>

<template>
  <Layout>
    <p v-if="isLoading">
      Loading...
    </p>
    <v-app>
      <v-content>
        <current-chart
          v-bind="current_car"
          row
        />
        <current-car
          v-bind="current_car"
          row
        />
      </v-content>
    </v-app>
  </Layout>
</template>
