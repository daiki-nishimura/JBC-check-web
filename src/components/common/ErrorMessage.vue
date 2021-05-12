<template>
  <div>
    <p v-if="hasErrorWithName"></p>

    <p v-if="hasErrorWithBirthday"></p>

    <p v-if="hasErrorWithGender"></p>

    <p v-if="hasErrorWithGender"></p>

    <p v-if="hasErrorWithHeight"></p>

    <p v-if="hasErrorWithWeight"></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: `ErrorMassege`,

  computed: {
    ...mapGetters('residentEditor', ['errors']),

    /**
     * 名前にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithName() {
      return this.errors.has('name');
    },

    /**
     * 生年月日にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithBirthday() {
      return this.errors.has('birthday');
    },

    /**
     * 性別にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithGender() {
      return this.errors.has('gender');
    },

    /**
     * 身長にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithHeight() {
      return this.errors.has('height');
    },

    /**
     * 体重にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithWeight() {
      return this.errors.has('weight');
    },
  },
};
</script>
