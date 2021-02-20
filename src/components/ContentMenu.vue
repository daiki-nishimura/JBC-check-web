<template>
  <v-toolbar flat color="blue-grey lighten-4">
    <v-row>
      <v-col>
        <v-layout align-center>
          <v-icon x-large>mdi-plus-circle</v-icon>
          <v-spacer />
          <v-menu v-model="menu" offset-y :close-on-content-click="false">
            <template #activator="{ on }">
              <v-btn v-model="menu" icon elevation="0" v-on="on" @click="menu">
                <v-icon x-large>mdi-calendar-blank</v-icon>
              </v-btn>
            </template>
            <v-date-picker
              v-model="picker"
              :day-format="(date) => new Date(date).getDay()"
              locale="jp-ja"
              @click="menu = false"
            />
          </v-menu>
          <span class="text-h5">{{ value }}</span>
        </v-layout>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: `DatePicker`,

  /* カレンダーの取得 */
  props: {
    value: {
      type: String,
      default: new Date().toISOString().substr(0, 10),
    },
  },
  data() {
    return {
      menu: false,
    };
  },
  /* カレンダーの選択した日にちをvalueに返す */
  computed: {
    picker: {
      get() {
        return this.value;
      },
      set() {
        this.menu = false;
      },
    },
  },
};
</script>
