import { createStore } from 'vuex'
import auth from './auth';
import axis from './axis';
import clients from './clients';
import services from './services';
import produits from './produits';
import front from './front';

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
    clients,
    services,
    produits,
    front
  }
})
