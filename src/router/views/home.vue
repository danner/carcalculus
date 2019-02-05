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
        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
            sm8
            order-sm2
          >
            <current-chart />
          </v-flex>
          <v-flex
            xs12
            sm4
            order-sm1
          >
            <current-car />
          </v-flex>
        </v-layout>
      </v-content>
    </v-app>
  </Layout>
</template>
