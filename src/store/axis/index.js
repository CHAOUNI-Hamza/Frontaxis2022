import axios from 'axios';
export default {
  namespaced: true,
  state: {
    axiss : [],
    axissTrashed: []
  },
  mutations: {
    setAxiss(state, data) {
      state.axiss = data
    },
    setTrashed(state, data) {
      state.axissTrashed = data
    }
  },
  getters: {
    getAxiss(state) {
      return state.axiss
    },
    getTrashed(state) {
      return state.axissTrashed
    }
  },
  actions: {

    async get({ commit, state }, filter) {
     try {
        const response = await axios.get('api/v1/company/index?filter='+ filter.filter +'&sortby='+ filter.sortby +'&orderby='+ filter.orderby +'&filtervalue='+ filter.filtervalue +'&paginate='+ filter.paginate +'&created_at='+ filter.created_at +'&updated_at='+ filter.updated_at +'&expand='+ filter.expand)
        commit('setAxiss', response.data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async trashed() {
      try {
        const response = await axios.get('api/v1/company/trashed')
        commit('axissTrashed', response.data.data)
      } catch (error) {
        console.log(error)
      }

  }},
  modules: {
  }
}
