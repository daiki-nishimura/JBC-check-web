<template>
  <div>
    <ContentEditorLayout>
      <ResidentEditor />
      <v-row class="mt-14" justify="center">
        <ResidentRegisterAction />
      </v-row>
    </ContentEditorLayout>
  </div>
</template>

<script>
import ResidentEditor from '@/components/resident/ResidentEditor.vue';
import ContentEditorLayout from '@/components/common/ContentEditorLayout.vue';
import ResidentRegisterAction from '@/components/resident/ResidentRegisterAction.vue';

export default {
  name: `ResidentRegister`,

  components: {
    ContentEditorLayout,
    ResidentEditor,
    ResidentRegisterAction,
  },
};
</script>
