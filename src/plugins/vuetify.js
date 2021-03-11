import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#42A5F5',
        secondary: '#455A64',
        cancel: '#E0E0E0',
      },
    },
  },
});
