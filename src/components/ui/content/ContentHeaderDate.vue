<template>
  <div>
    <UiDatePicker @input="setDisplayDate" />
    <span class="text-h5">{{ displayDate }}</span>
  </div>
</template>

<script>
import { convertDateFormat, getCurrentDate } from '@/utils/date';
import UiDatePicker from '@/components/ui/date-picker/UiDatePicker.vue';

export default {
  name: 'UiContentHeaderDate',

  components: {
    UiDatePicker,
  },

  data() {
    return {
      /**
       * 表示する日付
       */
      displayDate: getCurrentDate('YYYY/MM/DD (ddd)'),
    };
  },

  methods: {
    /**
     * 表示する日付をセットする
     */
    setDisplayDate(date) {
      this.displayDate = convertDateFormat(date, 'YYYY/MM/DD (ddd)');
    },
  },
};
</script>
