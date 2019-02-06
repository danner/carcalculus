<script>
  import { mapMutations } from 'vuex'

  export default {
    computed: {
      dyno: {
        set(dyno) {
          this.$store.commit('car/SET_ENGINE_DYNO', dyno)
        },
        get() {
          return this.$store.state.car.engine.dyno
        }
      }
    },
    methods: {
      ...mapMutations({
        addPoint: 'car/ADD_ENGINE_DYNO_POINT',
        removePoint: 'car/REMOVE_ENGINE_DYNO_POINT',
        updatePoint: 'car/SET_ENGINE_DYNO_POINT',
      })
    },
  }
</script>

<template>
  <v-container>
    <v-layout
      v-for="point in dyno"
      :key="point.id"
      row
      wrap
    >
      <v-flex xs5>
        <v-text-field
          :value="point.rpm"
          :min="0"
          :max="20000"
          :step="1"
          type="number"
          label="rpm"
          number
          @change="updatePoint({...point, rpm: $event})"
        />
      </v-flex>
      <v-flex xs5>
        <v-text-field
          :value="point.torque"
          :min="0"
          :max="2000"
          :step="1"
          type="number"
          label="torque"
          number
          @change="updatePoint({...point, torque: $event})"
        />
      </v-flex>
      <v-flex xs2>
        <v-btn
          fab
          flat
          small
          color="primary"
          @click="removePoint(point.id)"
        >
          <v-icon dark>
            remove
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-flex
      offset-xs10
      xs2
    >
      <v-btn
        fab
        flat
        small
        color="primary"
        @click="addPoint({})"
      >
        <v-icon dark>
          add
        </v-icon>
      </v-btn>
    </v-flex>
  </v-container>
</template>

<style>

</style>
