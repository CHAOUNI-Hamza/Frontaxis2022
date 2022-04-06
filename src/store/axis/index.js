import axios from 'axios';
export default {
  namespaced: true,
  state: {
    axiss : [],
    axissTrashed: [],
    last_page: [],
    last_page_trashed: []
  },
  mutations: {
    setAxiss(state, data) {
      state.axiss = data
    },
    setTrashed(state, data) {
      state.axissTrashed = data
    },
    setLastPage(state, data) {
      state.last_page = data
    },
    setLastPageTrashed(state, data) {
      state.last_page = data
    }
  },
  getters: {
    getAxiss(state) {
      return state.axiss
    },
    getTrashed(state) {
      return state.axissTrashed
    },
    getLastPage(state) {
      return state.last_page
    },
    getLastPageTrashed(state) {
      return state.last_page_trashed
    }
  },
  actions: {

    async get({ commit, state }, filter) {
     try {
        const response = await axios.get('api/v1/company/index?filter='+ filter.filter +'&sortby='+ filter.sortby +'&orderby='+ filter.orderby +'&filtervalue='+ filter.filtervalue +'&paginate='+ filter.paginate +'&created_at='+ filter.created_at +'&updated_at='+ filter.updated_at +'&expand='+ filter.expand+'&page='+ filter.page)
        commit('setAxiss', response.data.data)
        commit('setLastPage', response.data.meta.last_page)
        console.log(response.data.meta.last_page)
      } catch (error) {
        console.log(error)
      }
    },
    async trashed({ commit, state }) {
      try {
        const response = await axios.get('api/v1/company/trashed')
        commit('setTrashed', response.data.data)
        commit('setLastPageTrashed', response.data.meta.last_page)
      } catch (error) {
        console.log(error)
      }
    },
    async deletee(_, id) {
      
      try {

          const response = await axios.delete('api/v1/company/destroy/'+ id)
          console.log(id)

          

         Swal.fire(
  'Good job!',
  '',
  'success'
)

        } catch (error) {
            console.log(error);
        }
    },
    async restore(_, id) {
      
      try {

          const response = await axios.post('api/v1/company/restore/'+ id)

         Swal.fire(
  'Good job!',
  '',
  'success'
)

        } catch (error) {
            console.log(error);
        }
    },
    async forced(_, id) {
      
      try {

          const response = await axios.post('api/v1/company/forced/'+ id)

          

         Swal.fire(
  'Good job!',
  '',
  'success'
)

        } catch (error) {
            console.log(error);
        }
    }
  },
  modules: {
  }
}
