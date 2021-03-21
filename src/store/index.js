import Vue from 'vue';
import Vuex from 'vuex';
import resident from './resident';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...resident,
  },
});
