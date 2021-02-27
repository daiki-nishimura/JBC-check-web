<template>
  <v-data-table
    :headers="headers"
    :items="利用者名"
    item-key="name"
    show-select
    class="elevation-1 data-table"
    height="720"
  >
    <template v-slot:items="props">
      <td>{{ props.item.ApplicationType }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'ResidentDataTable',
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: '利用者',
          align: 'start',
          sortable: false,
          value: 'value',
          width: String,
        },
        { text: '生年月日', value: '生年月日', width: '20%' },
        { text: '性別', value: '性別' },
        { text: '身長', value: '身長' },
        { text: '体重', value: '体重' },
        { text: 'アレルギー', value: 'アレルギー' },
      ],
      利用者名: [
        {
          name: 'Frozen Yogurt',
          生年月日: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.data-table {
  font-size: 40px !important;
}
</style>
