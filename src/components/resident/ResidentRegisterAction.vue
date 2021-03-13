<template>
  <v-card-actions class="justify-center">
    <ContentEditorButtons>
      <v-btn color="cancel" @click="movingRegister">キャンセル</v-btn>

      <v-btn class="white--text" color="primary">登録</v-btn>
    </ContentEditorButtons>
  </v-card-actions>
</template>

<script>
import ContentEditorButtons from '@/components/common/ContentEditorButtons.vue';

export default {
  name: 'ResidentRegisterAction',

  components: {
    ContentEditorButtons,
  },
  methods: {
    movingRegister() {
      this.$router.push({
        name: 'ResidentList',
      });
    },
  },
};
</script>
