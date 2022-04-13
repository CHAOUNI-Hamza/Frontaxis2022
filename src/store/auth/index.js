import axios from 'axios';
export default {
  namespaced: true,
  state: {
      token: null,
      user: null
  },
  mutations: {
      setToken(state, token) {
          state.token = token
      },
      setUser(state, data) {
        state.user = data
    }
  },
  getters: {
      authentication(state) {
          return state.token && state.user;
      },
      user(state) {
        return state.user;
    }
  },
  actions: {
    async login( {dispatch}, credentials) {
        try {
            const response = await axios.post('api/v1/admin/login', credentials)
            return dispatch('attempt', response.data.access_token)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Please verify your email and password',
                /*text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'*/
              })
        }
    },
    async attempt({commit, state}, token) {
        try {
            if(token) {
                commit('setToken', token)
            }

            if(!state.token) {
                return;
            }

            const response = await axios.get('api/v1/admin/me')
            
            commit('setUser', response.data)
        } catch (error) {
            commit('setUser', null)
            commit('setToken', null)
        }
    }
  },
  modules: {
  }
}
