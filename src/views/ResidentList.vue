<template>
  <div>
    <ResidentContentHeader />

    <ResidentDataTable />
  </div>
</template>

<script>
import ResidentContentHeader from '@/components/resident/ResidentContentHeader.vue';
import ResidentDataTable from '@/components/resident/ResidentDataTable.vue';

export default {
  name: 'ResidentList',

  components: {
    ResidentContentHeader,
    ResidentDataTable,
  },
};
</script>
