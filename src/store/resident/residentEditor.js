// stateを作っていく
// JSDocも忘れずに
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
    remarks: ''
  },
};

export const mutations = {
    name(state, { name }) {
        state.editingData.name = name;
    
    birthday(state, { birthday }) 
        state.editingData.birthday = birthday;
    }
  },

export const actions = {
  setName({ commit }, { name }) {
    commit('name', { name });
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

