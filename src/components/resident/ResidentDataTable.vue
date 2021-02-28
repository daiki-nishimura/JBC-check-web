<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="id"
      show-select
      class="elevation-1 data-table"
      height="768"
    >
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'ResidentDataTable',
  data() {
    return {
      selected: [],
      headers: [
        {
          text: '利用者名',
          align: 'start',
          sortable: false,
          value: 'name',
        },

        { text: '生年月日', value: 'birthday' },
        { text: '性別', value: 'sex' },
        { text: '身長', value: 'height' },
        { text: '体重', value: 'weight' },
        { text: 'アレルギー', value: 'allergies' },
        { text: '病歴', value: 'medicalHistory' },
        { text: '趣味嗜好', value: 'taste' },
        { text: '生活歴', value: 'lifeHistory' },
        { text: '備考', value: 'remarks' },
      ],
      items: [
        {
          id: 1,
          name: '西村だいき',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: 'こんにちは',
        },
        {
          id: 2,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
        {
          id: 3,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
        {
          id: 4,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
        {
          id: 5,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
        {
          id: 6,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
        {
          id: 7,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
        {
          id: 8,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
        {
          id: 9,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
        {
          id: 10,
          name: '',
          birthday: '',
          sex: '',
          height: 'cm',
          weight: 'kg',
          allergies: '',
          medicalHistory: '',
          taste: '',
          lifeHistory: '',
          remarks: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.data-table {
  &.v-data-table {
    thead {
      tr {
        height: 88px;
        th {
          font-size: 18px !important;
          background: #42a5f5;
        }
      }
    }
  }
}
tbody {
  tr {
    height: 68px;
    td {
      font-size: 18px !important;
    }
  }
}
</style>
