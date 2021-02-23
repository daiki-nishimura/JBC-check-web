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
          v-model="picker"
          :day-format="(date) => new Date(date).getDate()"
          no-title
          locale="ja"
        />
      </v-menu>

      <span class="text-h5">{{ formatShowDate }}</span>
    </v-toolbar>
  </v-card>
</template>

<script>
import { convertDateFormat, getCurrentDate } from '@/utils/date';

export default {
  name: 'ContentMenu',

  data() {
    return {
      date: undefined,
      formatShowDate: getCurrentDate('YYYY/MM/DD (ddd)'),
    };
  },

  computed: {
    picker: {
      get() {
        return this.date;
      },
      set(value) {
        this.date = value;
        this.formatShowDate = convertDateFormat(value, 'YYYY/MM/DD (ddd)');
      },
    },
  },
};
</script>
