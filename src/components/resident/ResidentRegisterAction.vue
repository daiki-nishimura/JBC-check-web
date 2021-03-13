<template>
  <v-card-actions class="justify-center">
    <ContentEditorButtons>
      <v-btn color="cancel" @click="$router.go(-1)">キャンセル</v-btn>

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
};
</script>
