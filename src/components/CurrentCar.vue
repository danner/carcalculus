<script>
  import CurrentTransmission from '@src/components/CurrentTransmission'
  import CurrentEngine from '@src/components/CurrentEngine'

  export default {
    components: { CurrentTransmission, CurrentEngine },
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
    data: () => ({
      engine_choices: [
        {
          id: 1,
          title: "347 Stroker",
          dyno: [
            {torque: 0, rpm: 0},
            {torque: 350, rpm: 1500},
            {torque: 390, rpm: 4700},
            {torque: 407, rpm: 5300},
            {torque: 350, rpm: 6500},
            {torque: 0, rpm: 7000},
          ],
        },{
          id: 2,
          title: "94 Miata",
          dyno: [
            {torque: 0, rpm: 0},
            {torque: 95, rpm: 2000},
            {torque: 100, rpm: 3000},
            {torque: 107, rpm: 4000},
            {torque: 113, rpm: 5000},
            {torque: 105, rpm: 6000},
            {torque: 85, rpm: 7000},
            {torque: 0, rpm: 8000},
          ],
        },
      ],
      transmission_choices: [
        {
          id: 1,
          title: "t-56 magnum short",
          gears: [
            {
              id: 1,
              ratio: "2.66",
            },
            {
              id: 2,
              ratio: "1.80",
            },
            {
              id: 3,
              ratio: "1.30",
            },
            {
              id: 4,
              ratio: "1.00",
            },
            {
              id: 5,
              ratio: "0.80",
            },
            {
              id: 6,
              ratio: "0.63",
            },
          ],
        },
        {
          id: 2,
          title: " 4 speed top loader",
          gears: [{}, {}, {}, {},],
        },
        {
          id: 3,
          title: "94 miata",
          gears: [{}, {}, {}, {}, {}],
        },
        {
          id: 4,
          title: "",
          gears: [{}, {}, {}, {}, {}],
        },
      ],
      drivetrain_choices: [
        {
          id: 1,
          name: "8.8 torsen 2",
          final_drive: 3.07,
          losses: 0.15,
        },
        {
          id: 2,
          name: "miata torsen",
          final_drive: 4.1,
          losses: 0.15,
        },
      ],
      wheels_choices: [
        {
          id: 1,
          name: "cobra blah",
          diameter: 25.7,
          revs_per_mile: 808,
        },
        {
          id: 2,
          name: "94 miata summer",
          diameter: 21.7,
          revs_per_mile: 930,
        },
      ],
    })
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
          <current-transmission
            v-bind="transmission"
          />
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>


