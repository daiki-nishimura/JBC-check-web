<template>
  <v-card-actions class="justify-center">
    <ContentEditorButtons>
      <div class="ma-3">
        <v-btn class="mr-4" color="cancel">キャンセル</v-btn>

        <v-btn class="white--text" color="primary">登録</v-btn>
      </div>
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
