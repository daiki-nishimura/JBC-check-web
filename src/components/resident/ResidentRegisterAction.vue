<template>
  <v-card-actions class="justify-center">
    <ContentEditorButtons>
      <v-btn color="cancel" @click="cancel">キャンセル</v-btn>

      <v-btn color="primary" :disabled="canRegister" class="white--text">登録</v-btn>
    </ContentEditorButtons>
  </v-card-actions>
</template>

<script>
import ContentEditorButtons from '@/components/common/ContentEditorButtons.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ResidentRegisterAction',

  components: {
    ContentEditorButtons,
  },

  computed: {
    ...mapGetters('residentEditor', ['hasErrors']),

    /**
     * 登録できるか
     * @returns {boolean}
     */
    canRegister() {
      return !this.hasErrors;
    },
  },

  methods: {
    cancel() {
      this.$router.push({
        name: 'ResidentList',
      });
    },
  },
};
</script>
