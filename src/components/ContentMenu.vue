<template>
  <v-card tile elevation="0">
    <v-toolbar flat color="blue-grey lighten-4">
      <v-btn icon>
        <v-icon x-large>mdi-plus-circle</v-icon>
      </v-btn>

      <v-spacer />

      <v-menu offset-y>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon x-large>mdi-calendar-blank</v-icon>
          </v-btn>
        </template>
        <v-date-picker
          v-model="hoge"
          :day-format="(date) => new Date(date).getDate()"
          no-title
          locale="ja"
        />
      </v-menu>

      <span class="text-h5">{{ formatDate }}</span>
    </v-toolbar>
  </v-card>
</template>

<script>
// datejsの名前
import datejs from '@/util/date';

export default {
  name: 'ContentMenu',

  data() {
    return {
      // 2020-09-13
      date: undefined,
      // formatDateの名前
      formatDate: datejs.getNow(),
    };
  },
  computed: {
    // hogeの名前
    hoge: {
      get() {
        return this.date;
      },
      set(value) {
        this.date = value;
        // convertFormat
        this.formatDate = datejs.convertFormat(value, 'YYYY/MM/DD (ddd)');
      },
    },
  },
};
</script>
