<template>
  <v-app>
    <AppNavigation />
    <NavigationDrawer />

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppNavigation from './components/AppNavigation.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    AppNavigation,
    NavigationDrawer,
  },
};
</script>
