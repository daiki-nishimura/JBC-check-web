import Validator from '@/utils/validator';

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

export const getters = {
  /**
   * 入力検証
   * @param  editingData
   * @returns {function(*): Validator}
   */
  validation({ editingData }) {
    const rules = {
      name: 'required',
    };

    const attributeNames = {
      name: '名前',
    };

    const validation = new Validator(editingData, rules);
    validation.setAttributeNames(attributeNames);

    validation.check();

    return validation;
  },

  /**
   * エラーコレクション
   * @param  state
   * @param  validation
   * @returns {*}
   */
  errors(state, { validation }) {
    return validation.errors;
  },

  /**
   * エラーがあるか
   * @param  state
   * @param  validation
   * @returns {boolean}
   */
  hasErrors(state, { validation }) {
    return validation.errorCount > 0;
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
   * 身長の変更
   * @param state
   * @param height
   */
  height(state, { height }) {
    state.editingData.height = height;
  },

  /**
   * 体重の変更
   * @param state
   * @param weight
   */
  weight(state, { weight }) {
    state.editingData.weight = weight;
  },

  /**
   * アレルギーの変更
   * @param state
   * @param allergies
   */
  allergies(state, { allergies }) {
    state.editingData.allergies = allergies;
  },

  /**
   * 病歴の変更
   * @param state
   * @param medicalHistory
   */
  medicalHistory(state, { medicalHistory }) {
    state.editingData.medicalHistory = medicalHistory;
  },

  /**
   * 趣味嗜好の変更
   * @param state
   * @param preference
   */
  preference(state, { preference }) {
    state.editingData.preference = preference;
  },

  /**
   * 生活歴の変更
   * @param state
   * @param lifeHistory
   */
  lifeHistory(state, { lifeHistory }) {
    state.editingData.lifeHistory = lifeHistory;
  },

  /**
   * 備考の変更
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
   * @param commit
   * @param birthday
   */
  setBirthday({ commit }, { birthday }) {
    commit('birthday', { birthday });
  },

  /**
   * 性別を設定する
   * @param commit
   * @param gender
   */
  setGender({ commit }, { gender }) {
    commit('gender', { gender });
  },

  /**
   * 身長を設定する
   * @param commit
   * @param height
   */
  setHeight({ commit }, { height }) {
    commit('height', { height });
  },

  /**
   * 体重を設定する
   * @param commit
   * @param weight
   */
  setWeight({ commit }, { weight }) {
    commit('weight', { weight });
  },

  /**
   * アレルギーを設定する
   * @param commit
   * @param allergies
   */
  setAllergies({ commit }, { allergies }) {
    commit('allergies', { allergies });
  },

  /**
   * 病歴を設定する
   * @param commit
   * @param medicalHistory
   */
  setMedicalHistory({ commit }, { medicalHistory }) {
    commit('medicalHistory', { medicalHistory });
  },

  /**
   * 趣味嗜好を設定する
   * @param commit
   * @param preference
   */
  setPreference({ commit }, { preference }) {
    commit('preference', { preference });
  },

  /**
   * 生活歴を設定する
   * @param commit
   * @param lifeHistory
   */
  setLifeHistory({ commit }, { lifeHistory }) {
    commit('lifeHistory', { lifeHistory });
  },

  /**
   * 備考を設定する
   * @param commit
   * @param remarks
   */
  setRemarks({ commit }, { remarks }) {
    commit('remarks', { remarks });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
