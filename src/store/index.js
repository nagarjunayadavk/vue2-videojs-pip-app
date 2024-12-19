// store.js (Vuex Store)
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPiPEnabled: false,
    player: null // Global state to track PiP mode
  },
  mutations: {
    enablePiP(state) {
      // console.log("---mutations enablePiP");
      state.isPiPEnabled = true;
    },
    player(state, data) {
      state.player = data;
    },
    disablePiP(state) {
      // console.log("---mutations disablePiP");
      state.isPiPEnabled = false;
    }
  },
  actions: {
    enablePiP({ commit }) {
      commit("enablePiP");
    },
    player({ commit }, data) {
      commit("player", data);
    },
    disablePiP({ commit }) {
      commit("disablePiP");
    }
  }
});
