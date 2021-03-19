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
  name(state, { name }) {
    state.editingData.name = name;
  },
  birthday(state, { birthday }) {
    state.editingData.birthday = birthday;
  },
  gender(state, { gender }) {
    state.editingData.gender = gender;
  },
  height(state, { height }) {
    state.editingData.height = height;
  },
  weight(state, { weight }) {
    state.editingData.weight = weight;
  },
  allergies(state, { allergies }) {
    state.editingData.allergies = allergies;
  },
  medicalHistory(state, { medicalHistory }) {
    state.editingData.medicalHistory = medicalHistory;
  },
  preference(state, { preference }) {
    state.editingData.preference = preference;
  },
  lifeHistory(state, { lifeHistory }) {
    state.editingData.lifeHistory = lifeHistory;
  },
  remarks(state, { remarks }) {
    state.editingData.remarks = remarks;
  },
};

export const actions = {
  setName({ commit }, { name }) {
    commit('name', { name });
  },
  setBirthday({ commit }, { birthday }) {
    commit('birthday', { birthday });
  },
  setGender({ commit }, { gender }) {
    commit('gender', { gender });
  },
  setHeight({ commit }, { height }) {
    commit('height', { height });
  },
  setWeight({ commit }, { weight }) {
    commit('weight', { weight });
  },
  setAllergies({ commit }, { allergies }) {
    commit('allergies', { allergies });
  },
  setMedicalHistory({ commit }, { medicalHistory }) {
    commit('medicalHistory', { medicalHistory });
  },
  setPreference({ commit }, { preference }) {
    commit('preference', { preference });
  },
  setLifeHistory({ commit }, { lifeHistory }) {
    commit('lifeHistory', { lifeHistory });
  },
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
