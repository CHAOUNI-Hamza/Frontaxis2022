import { createStore } from 'vuex'
import auth from './auth';
import axis from './axis';

export default createStore({
  state: {
    UrlBack: "http://localhost:8000"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    axis
  }
})
