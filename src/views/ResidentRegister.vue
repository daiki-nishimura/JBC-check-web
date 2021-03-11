<template>
  <div>
    <ContentEditorLayout>
      <ResidentEditor />
      <ResidentRegisterAction />
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
