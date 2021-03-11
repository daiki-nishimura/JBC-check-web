<template>
  <div>
    <ContentEditor>
      <ResidentEditor />
      <v-row class="mt-14" justify="center">
        <ResidentRegisterAction />
      </v-row>
    </ContentEditor>
  </div>
</template>

<script>
import ResidentEditor from '@/components/resident/ResidentEditor.vue';
import ContentEditor from '@/components/common/ContentEditor.vue';
import ResidentRegisterAction from '@/components/resident/ResidentRegisterAction.vue';

export default {
  name: `ResidentRegister`,

  components: {
    ContentEditor,
    ResidentEditor,
    ResidentRegisterAction,
  },
};
</script>
