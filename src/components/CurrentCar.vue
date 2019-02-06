<script>
import CurrentChassis from '@src/components/CurrentChassis'
import CurrentDrivetrain from '@src/components/CurrentDrivetrain'
import CurrentEngine from '@src/components/CurrentEngine'
import CurrentTransmission from '@src/components/CurrentTransmission'
import CurrentWheels from '@src/components/CurrentWheels'

export default {
  components: {
    CurrentChassis,
    CurrentDrivetrain,
    CurrentEngine,
    CurrentTransmission,
    CurrentWheels,
  },
  props: {
  },
  data: () => ({
    engine_choices: [
      {
        id: 1,
        name: '347 Stroker',
        dyno: [
          { id: 1, rpm: 0, torque: 0 },
          { id: 2, rpm: 1500, torque: 350 },
          { id: 3, rpm: 4700, torque: 390 },
          { id: 4, rpm: 5300, torque: 407 },
          { id: 5, rpm: 6500, torque: 350 },
          { id: 6, rpm: 7000, torque: 0 },
        ],
      },
      {
        id: 2,
        name: '94 Miata',
        dyno: [
          { id: 1, rpm: 0, torque: 0 },
          { id: 2, rpm: 2000, torque: 95 },
          { id: 3, rpm: 3000, torque: 100 },
          { id: 4, rpm: 4000, torque: 107 },
          { id: 5, rpm: 5000, torque: 113 },
          { id: 6, rpm: 6000, torque: 105 },
          { id: 7, rpm: 7000, torque: 85 },
          { id: 8, rpm: 8000, torque: 0 },
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
  <v-flex
    id="current-car"
  >
    <v-expansion-panel
      expand
      focusable
    >
      <v-expansion-panel-content>
        <div slot="header">
          Chassis
        </div>
        <v-card>
          <v-autocomplete
            v-model="chassis"
            :items="chassis_choices"
            return-object
            :auto-select-first="true"
            item-text="name"
          />
          <current-chassis />
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">
          Engine
        </div>
        <v-card>
          <v-autocomplete
            v-model="engine"
            :items="engine_choices"
            return-object
            :auto-select-first="true"
            item-text="name"
          />
          <current-engine />
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
            :auto-select-first="true"
            item-text="name"
          />
          <current-transmission />
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">
          Drivetrain
        </div>
        <v-card>
          <v-autocomplete
            v-model="drivetrain"
            :items="drivetrain_choices"
            return-object
            :auto-select-first="true"
            item-text="name"
          />
          <current-drivetrain />
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">
          Wheels
        </div>
        <v-card>
          <v-autocomplete
            v-model="wheels"
            :items="wheels_choices"
            return-object
            :auto-select-first="true"
            item-text="name"
          />
          <current-wheels />
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>
