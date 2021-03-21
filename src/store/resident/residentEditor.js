export const state = {
  editingData: {
    /**
     * 利用者名
     */
    name: null,

    /**
     * 生年月日
     */
    birthday: null,

    /**
     * 性別
     */
    gender: null,

    /**
     * 身長
     */
    height: null,

    /**
     * 体重
     */
    weight: null,

    /**
     * アレルギー
     */
    allergies: null,

    /**
     * 病歴
     */
    medicalHistory: null,

    /**
     * 趣味嗜好
     */
    preference: null,

    /**
     * 生活歴
     */
    lifeHistory: null,

    /**
     * 備考
     */
    remarks: null,
  },
};

export const mutations = {
  /**
   * 利用者名の変更
   * @param  state
   * @param  name
   */
  name(state, { name }) {
    state.editingData.name = name;
  },

  /**
   * 生年月日の変更
   * @param  state
   * @param  birthday
   */
  birthday(state, { birthday }) {
    state.editingData.birthday = birthday;
  },

  /**
   * 性別の変更
   * @param state
   * @param gender
   */
  gender(state, { gender }) {
    state.editingData.gender = gender;
  },

  /**
   * 身長の更新
   * @param state
   * @param height
   */
  height(state, { height }) {
    state.editingData.height = height;
  },

  /**
   * 体重の更新
   * @param state
   * @param weight
   */
  weight(state, { weight }) {
    state.editingData.weight = weight;
  },

  /**
   * アレルギーの更新
   * @param state
   * @param allergies
   */
  allergies(state, { allergies }) {
    state.editingData.allergies = allergies;
  },

  /**
   * 病歴の更新
   * @param state
   * @param medicalHistory
   */
  medicalHistory(state, { medicalHistory }) {
    state.editingData.medicalHistory = medicalHistory;
  },

  /**
   * 趣味嗜好の更新
   * @param state
   * @param preference
   */
  preference(state, { preference }) {
    state.editingData.preference = preference;
  },

  /**
   * 生活歴の更新
   * @param state
   * @param lifeHistory
   */
  lifeHistory(state, { lifeHistory }) {
    state.editingData.lifeHistory = lifeHistory;
  },

  /**
   * 備考の更新
   * @param state
   * @param remarks
   */
  remarks(state, { remarks }) {
    state.editingData.remarks = remarks;
  },
};

export const actions = {
  /**
   * 利用者名を設定する
   * @param name
   * @param commit
   */
  setName({ commit }, { name }) {
    commit('name', { name });
  },

  /**
   * 生年月日を設定する
   * @param birthday
   * @param commit
   */
  setBirthday({ commit }, { birthday }) {
    commit('birthday', { birthday });
  },

  /**
   * 性別を設定する
   * @param gender
   * @param commit
   */
  setGender({ commit }, { gender }) {
    commit('gender', { gender });
  },

  /**
   * 身長を設定する
   * @param height
   * @param commit
   */
  setHeight({ commit }, { height }) {
    commit('height', { height });
  },

  /**
   * 体重を設定する
   * @param weight
   * @param commit
   */
  setWeight({ commit }, { weight }) {
    commit('weight', { weight });
  },

  /**
   * アレルギーを設定する
   * @param allergies
   * @param commit
   */
  setAllergies({ commit }, { allergies }) {
    commit('allergies', { allergies });
  },

  /**
   * 病歴を設定する
   * @param medicalHistory
   * @param commit
   */
  setMedicalHistory({ commit }, { medicalHistory }) {
    commit('medicalHistory', { medicalHistory });
  },

  /**
   * 趣味嗜好を設定する
   * @param preference
   * @param commit
   */
  setPreference({ commit }, { preference }) {
    commit('preference', { preference });
  },

  /**
   * 生活歴を設定する
   * @param lifeHistory
   * @param commit
   */
  setLifeHistory({ commit }, { lifeHistory }) {
    commit('lifeHistory', { lifeHistory });
  },

  /**
   * 備考を設定する
   * @param remarks
   * @param commit
   */
  setRemarks({ commit }, { remarks }) {
    commit('remarks', { remarks });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
