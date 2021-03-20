export const state = {
  editingData: {
    name: null,
    birthday: null,
    gender: null,
    height: null,
    weight: null,
    allergies: null,
    medicalHistory: null,
    preference: null,
    lifeHistory: null,
    remarks: null,
  },
};

export const mutations = {
  /**
   * 利用者名の更新
   * @param {state} state
   * @param {function} name
   */
  name(state, { name }) {
    state.editingData.name = name;
  },
  /**
   * 生年月日の更新
   * @param {state} state
   * @param {function} birthday
   */
  birthday(state, { birthday }) {
    state.editingData.birthday = birthday;
  },
  /**
   * 性別の更新
   * @param {state} state
   * @param {function} gender
   */
  gender(state, { gender }) {
    state.editingData.gender = gender;
  },
  /**
   * 身長の更新
   * @param {state} state
   * @param {function} height
   */
  height(state, { height }) {
    state.editingData.height = height;
  },
  /**
   * 体重の更新
   * @param {state} state
   * @param {function} weight
   */
  weight(state, { weight }) {
    state.editingData.weight = weight;
  },
  /**
   * アレルギーの更新
   * @param {state} state
   * @param {function} allergies
   */
  allergies(state, { allergies }) {
    state.editingData.allergies = allergies;
  },
  /**
   * 病歴の更新
   * @param {state} state
   * @param {function} medicalHistory
   */
  medicalHistory(state, { medicalHistory }) {
    state.editingData.medicalHistory = medicalHistory;
  },
  /**
   * 趣味嗜好の更新
   * @param {state} state
   * @param {function} preference
   */
  preference(state, { preference }) {
    state.editingData.preference = preference;
  },
  /**
   * 生活歴の更新
   * @param {state} state
   * @param {function} lifeHistory
   */
  lifeHistory(state, { lifeHistory }) {
    state.editingData.lifeHistory = lifeHistory;
  },
  /**
   * 備考の更新
   * @param {state} state
   * @param {function} remarks
   */
  remarks(state, { remarks }) {
    state.editingData.remarks = remarks;
  },
};

export const actions = {
  /**
   * 利用者名を設定する
   * @param {string} name
   * @param {function} commit
   */
  setName({ commit }, { name }) {
    commit('name', { name });
  },
  /**
   * 生年月日を設定する
   * @param {string} birthday
   * @param {function} commit
   */
  setBirthday({ commit }, { birthday }) {
    commit('birthday', { birthday });
  },
  /**
   * 性別を設定する
   * @param {string} gender
   * @param {function} commit
   */
  setGender({ commit }, { gender }) {
    commit('gender', { gender });
  },
  /**
   * 身長を設定する
   * @param {string} height
   * @param {function} commit
   */
  setHeight({ commit }, { height }) {
    commit('height', { height });
  },
  /**
   * 体重を設定する
   * @param {string} weight
   * @param {function} commit
   */
  setWeight({ commit }, { weight }) {
    commit('weight', { weight });
  },
  /**
   * アレルギーを設定する
   * @param {string} allergies
   * @param {function} commit
   */
  setAllergies({ commit }, { allergies }) {
    commit('allergies', { allergies });
  },
  /**
   * 病歴を設定する
   * @param {string} medicalHistory
   * @param {function} commit
   */
  setMedicalHistory({ commit }, { medicalHistory }) {
    commit('medicalHistory', { medicalHistory });
  },
  /**
   * 趣味嗜好を設定する
   * @param {string} preference
   * @param {function} commit
   */
  setPreference({ commit }, { preference }) {
    commit('preference', { preference });
  },
  /**
   * 生活歴を設定する
   * @param {string} lifeHistory
   * @param {function} commit
   */
  setLifeHistory({ commit }, { lifeHistory }) {
    commit('lifeHistory', { lifeHistory });
  },
  /**
   * 備考を設定する
   * @param {string} remarks
   * @param {function} commit
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
