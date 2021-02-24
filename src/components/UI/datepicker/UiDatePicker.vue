<template>
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
</template>

<script>
export default {
  name: 'UiDatePicker',

  data() {
    return {
      date: undefined,
    };
  },

  computed: {
    picker: {
      get() {
        return this.date;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
