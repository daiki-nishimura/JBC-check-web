<template>
  <v-app>
    <AppNavigation />
    <AppNavigationDrawer />

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppNavigation from './components/AppNavigation.vue';
import AppNavigationDrawer from './components/AppNavigationDrawer.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    AppNavigation,
    AppNavigationDrawer,
  },
};
</script>
