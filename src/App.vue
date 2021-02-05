<template>
  <v-app>
    <AppNavigation />
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppNavigation from './components/AppNavigation.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    AppNavigation,
  },

  data: () => ({
    //
  }),
};
</script>
