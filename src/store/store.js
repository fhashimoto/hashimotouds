import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectSabor: null,
    selectTamanho: null,
    selectPersona: [],
    personaValorTotal: 0,
    personaTempoTotal: 0,
    step: 0
  }
});