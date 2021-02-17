<template>
  <v-app>
    <AppNavigation />
    <AppNavigationDrawer />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';
import AppNavigationDrawer from '@/components/AppNavigationDrawer.vue';

export default {
  name: 'App',

  components: {
    AppNavigation,
    AppNavigationDrawer,
  },
};
</script>
