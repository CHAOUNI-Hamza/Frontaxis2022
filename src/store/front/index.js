import axios from 'axios';
export default {
  namespaced: true,
  state: {
      getFront: []
  },
  mutations: {
    setFront(state, data) {
        state.getFront = data
    }
  },
  getters: {
      getFront(state) {
          return state.getFront
      }
  },
  actions: {
      // get
    async get({ commit, state }, url) {
        try {
           const response = await axios.get(url)
           commit('setFront', response.data.data)
         } catch (error) {
          router.push({ name: 'Home' })
         }
       }
  },
  modules: {
  }
}
