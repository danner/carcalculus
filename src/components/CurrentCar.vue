<script>
import CurrentTransmission from '@src/components/CurrentTransmission'
import CurrentEngine from '@src/components/CurrentEngine'

export default {
  components: { CurrentTransmission, CurrentEngine },
  props: {
  },
  data: () => ({
    engine_choices: [
      {
        id: 1,
        name: '347 Stroker',
        dyno: [
          { torque: 0, rpm: 0 },
          { torque: 350, rpm: 1500 },
          { torque: 390, rpm: 4700 },
          { torque: 407, rpm: 5300 },
          { torque: 350, rpm: 6500 },
          { torque: 0, rpm: 7000 },
        ],
      },
      {
        id: 2,
        name: '94 Miata',
        dyno: [
          { torque: 0, rpm: 0 },
          { torque: 95, rpm: 2000 },
          { torque: 100, rpm: 3000 },
          { torque: 107, rpm: 4000 },
          { torque: 113, rpm: 5000 },
          { torque: 105, rpm: 6000 },
          { torque: 85, rpm: 7000 },
          { torque: 0, rpm: 8000 },
        ],
      },
    ],
    transmission_choices: [
      {
        id: 1,
        name: 't-56 magnum short',
        gears: [
          {
            id: 1,
            ratio: '2.66',
          },
          {
            id: 2,
            ratio: '1.80',
          },
          {
            id: 3,
            ratio: '1.30',
          },
          {
            id: 4,
            ratio: '1.00',
          },
          {
            id: 5,
            ratio: '0.80',
          },
          {
            id: 6,
            ratio: '0.63',
          },
        ],
      },
      {
        id: 2,
        name: '4 speed top loader',
        gears: [
          {
            id: 1,
            ratio: '2.32'
          },
          {
            id: 2,
            ratio: '1.69'
          },{
            id: 3,
            ratio: '1.29'
          },
          {
            id: 4,
            ratio: '1.00'
          },
        ],
      },
      {
        id: 3,
        name: '94 miata',
        gears: [
          {
            id: 1,
            ratio: '3.136'
          },
          {
            id: 2,
            ratio: '1.888'
          },{
            id: 3,
            ratio: '1.330'
          },
          {
            id: 4,
            ratio: '1.00'
          },
          {
            id: 5,
            ratio: '0.814'
          },
        ],
      },
      {
        id: 4,
        name: 'TKO 600 5 Speed',
        gears: [
          {
            id: 1,
            ratio: '2.87'
          },
          {
            id: 2,
            ratio: '1.89'
          },{
            id: 3,
            ratio: '1.28'
          },
          {
            id: 4,
            ratio: '1.00'
          },
          {
            id: 5,
            ratio: '0.82'
          },
        ],
      },
    ],
    drivetrain_choices: [
      {
        id: 1,
        name: '8.8 torsen 2',
        final_drive: 3.07,
        losses: 0.15,
      },
      {
        id: 2,
        name: 'miata torsen',
        final_drive: 4.1,
        losses: 0.15,
      },
    ],
    wheels_choices: [
      {
        id: 1,
        name: 'Nitto R555 G2',
        diameter: 25.7,
        width: 345,
        revs_per_mile: 808,
      },
      {
        id: 2,
        name: 'Toyo Proxes T1R',
        diameter: 21.7,
        width: 205,
        revs_per_mile: 930,
      },
    ],
    chassis_choices: [
      {
        id: 1,
        name: 'Factory Five Cobra',
        weight: 2100,
        frontal_area: 18.5,
        drag_coefficient: 0.45,
      },
      {
        id: 2,
        name: '94 mazda miata',
        weight: 2450,
        frontal_area: 18.42,
        drag_coefficient: 0.38,
      },
    ],
  }),
  computed: {
    chassis: {
      set(chassis) {
        this.$store.commit('car/SET_CHASSIS', chassis)
      },
      get() {
        return this.$store.state.car.chassis
      },
    },
    drivetrain: {
      set(drivetrain) {
        this.$store.commit('car/SET_DRIVETRAIN', drivetrain)
      },
      get() {
        return this.$store.state.car.drivetrain
      },
    },
    engine: {
      set(engine) {
        this.$store.commit('car/SET_ENGINE', engine)
      },
      get() {
        return this.$store.state.car.engine
      },
    },
    transmission: {
      set(transmission) {
        this.$store.commit('car/SET_TRANSMISSION', transmission)
      },
      get() {
        return this.$store.state.car.transmission
      },
    },
    wheels: {
      set(wheels) {
        this.$store.commit('car/SET_WHEELS', wheels)
      },
      get() {
        return this.$store.state.car.wheels
      },
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
          Engine
        </div>
        <v-card>
          <current-engine
            :engine="engine"
            :transmission="transmission"
          />
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">
          Transmission
        </div>
        <v-card>
          <v-autocomplete
            v-model="transmission"
            :items="transmission_choices"
            return-object
            label="Select"
            item-text="name"
          />
          <current-transmission />
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>
