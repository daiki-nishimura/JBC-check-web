<template>
  <ContentHeader>
    <v-btn icon @click="movingRegister">
      <v-icon x-large>mdi-plus-circle</v-icon>
    </v-btn>

    <v-spacer />

    <ContentHeaderDate />
  </ContentHeader>
</template>

<script>
import ContentHeaderDate from '@/components/common/ContentHeaderDate.vue';
import ContentHeader from '@/components/common/ContentHeader.vue';

export default {
  name: 'ResidentContentHeader',

  components: {
    ContentHeaderDate,
    ContentHeader,
  },
  methods: {
    movingRegister() {
      this.$router.push({
        name: 'ResidentRegister',
      });
    },
  },
};
</script>
