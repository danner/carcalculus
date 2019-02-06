// import axios from 'axios'

export const state = {
  chassis: {
    id: 1,
    name: 'Factory Five Cobra',
    weight: 2100,
    frontal_area: 18.5,
    drag_coefficient: 0.45,
  },
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
      {id: 1, rpm: 0, torque: 0},
      {id: 2, rpm: 1500, torque: 350},
      {id: 3, rpm: 4700, torque: 390},
      {id: 4, rpm: 5300, torque: 407},
      {id: 5, rpm: 6500, torque: 350},
      {id: 6, rpm: 7000, torque: 0},
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
    width: 315,
  },
}

export const mutations = {
  SET_ENGINE_DYNO(state, payload) {
    state.engine.dyno = {...state.engine, dyno: payload}
  },
  SET_ENGINE_DYNO_POINT(state, payload) {
    const index = state.engine.dyno.findIndex(point => point.id === payload.id)
    const oldPoint = state.engine.dyno[index]
    state.engine.dyno.splice(index, 1, payload)
    if(oldPoint.rpm !== payload.rpm) {
      // sort the dyno if the rpm changed.
      state.engine.dyno.sort((point1, point2) => point1.rpm - point2.rpm)
    }
  },
  ADD_ENGINE_DYNO_POINT(state, payload) {
    state.engine.dyno.push({...payload, id: Math.max(...state.engine.dyno.map(point => point.id)) + 1})
    // sort the dyno after add?
    state.engine.dyno.sort((point1, point2) => point1.rpm - point2.rpm)
  },
  REMOVE_ENGINE_DYNO_POINT(state, payload) {
    const index = state.engine.dyno.findIndex(point => point.id === payload);
    state.engine.dyno.splice(index, 1)
  },
  SET_TRANSMISSION_GEAR_RATIO(state, payload) {
    state.transmission.gears.find(gear => gear.id === payload.gear.id).ratio = payload.value
  },
  SET_CHASSIS(state, newValue) {
    state.chassis = {...newValue}
  },
  SET_DRIVETRAIN(state, newValue) {
    state.drivetrain = {...newValue}
  },
  SET_ENGINE(state, newValue) {
    // deep copy because the dyno
    state.engine = JSON.parse(JSON.stringify(newValue))
  },
  SET_TRANSMISSION(state, newValue) {
    // deep copy because of the gears
    state.transmission = JSON.parse(JSON.stringify(newValue))
  },
  SET_WHEELS(state, newValue) {
    state.wheels = {...newValue}
  }
}

export const getters = {
  // // Whether the user is currently logged in.
  // loggedIn(state) {
  //   return !!state.currentUser
  // },
}

export const actions = {
  // // This is automatically run in `src/state/store.js` when the app
  // // starts, along with any other actions named `init` in other modules.
  // init({ state, dispatch }) {
  //   setDefaultAuthHeaders(state)
  //   dispatch('validate')
  // },

  // // Logs in the current user.
  // logIn({ commit, dispatch, getters }, { username, password } = {}) {
  //   if (getters.loggedIn) return dispatch('validate')

  //   return axios.post('/api/session', { username, password }).then(response => {
  //     const user = response.data
  //     commit('SET_CURRENT_USER', user)
  //     return user
  //   })
  // },

  // // Logs out the current user.
  // logOut({ commit }) {
  //   commit('SET_CURRENT_USER', null)
  // },

  // // Validates the current user's token and refreshes it
  // // with new data from the API.
  // validate({ commit, state }) {
  //   if (!state.currentUser) return Promise.resolve(null)

  //   return axios
  //     .get('/api/session')
  //     .then(response => {
  //       const user = response.data
  //       commit('SET_CURRENT_USER', user)
  //       return user
  //     })
  //     .catch(error => {
  //       if (error.response && error.response.status === 401) {
  //         commit('SET_CURRENT_USER', null)
  //       }
  //       return null
  //     })
  // },
}

// ===
// Private helpers
// ===

// function getSavedState(key) {
//   return JSON.parse(window.localStorage.getItem(key))
// }

// function saveState(key, state) {
//   window.localStorage.setItem(key, JSON.stringify(state))
// }

// function setDefaultAuthHeaders(state) {
//   axios.defaults.headers.common.Authorization = state.currentUser
//     ? state.currentUser.token
//     : ''
// }
