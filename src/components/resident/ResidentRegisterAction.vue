<template>
  <v-card-actions class="justify-center">
    <ContentEditorButtons>
      <v-btn color="cancel" @click="cancel">キャンセル</v-btn>

      <v-btn color="primary" :disabled="canRegister" class="white--text" @click="registerResident">登録</v-btn>
    </ContentEditorButtons>
  </v-card-actions>
</template>

<script>
import ContentEditorButtons from '@/components/common/ContentEditorButtons.vue';
import { mapGetters,mapActions } from 'vuex';


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
    return this.hasErrors;
    },
  },

  methods: {
    ...mapActions('residentEditor', ['registerResident']),
    
      cancel() {
      this.$router.push({
        name: 'ResidentList',
      });
    },
  },
};
</script>
