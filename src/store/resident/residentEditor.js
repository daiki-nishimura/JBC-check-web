export const state = {
  editingData: {
    name: '',
    birthday: '',
    gender: '',
    height: '',
    weight: '',
    allergies: '',
    medicalHistory: '',
    preference: '',
    lifeHistory: '',
    remarks: '',
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
