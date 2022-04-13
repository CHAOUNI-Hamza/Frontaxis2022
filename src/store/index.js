import { createStore } from 'vuex'
import auth from './auth';
import axis from './axis';
import clients from './clients';

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
    axis,
    clients
  }
})
