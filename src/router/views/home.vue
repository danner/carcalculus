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
  }),
}
</script>

<template>
  <Layout>
    <v-app>
      <v-content>
        <current-chart
          row
        />
        <current-car
          row
        />
      </v-content>
    </v-app>
  </Layout>
</template>
