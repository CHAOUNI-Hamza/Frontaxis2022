import axios from 'axios';
export default {
  namespaced: true,
  state: {
    clientss : [],
    clientssTrashed: [],
    last_page: [],
    last_page_trashed: [],
    id_update: 1
  },
  mutations: {
    setClientss(state, data) {
      state.clientss = data
    },
    setTrashed(state, data) {
      state.clientssTrashed = data
    },
    setLastPage(state, data) {
      state.last_page = data
    },
    setLastPageTrashed(state, data) {
      state.last_page = data
    }
  },
  getters: {
    getClientss(state) {
      return state.clientss
    },
    getTrashed(state) {
      return state.clientssTrashed
    },
    getLastPage(state) {
      return state.last_page
    },
    getLastPageTrashed(state) {
      return state.last_page_trashed
    }
  },
  actions: {
    // get
    async get({ commit, state }, filter) {
     try {
        const response = await axios.get('api/v1/clients/index?filter='
        + filter.filter +'&sortby='
        + filter.sortby +'&orderby='
        + filter.orderby +'&filtervalue='
        + filter.filtervalue +'&paginate='
        + filter.paginate +'&created_at='
        + filter.created_at +'&updated_at='
        + filter.updated_at +'&expand='
        + filter.expand+'&page='
        + filter.page+'&date_to='
        + filter.date_to+'&date_from='
        + filter.date_from)
        commit('setClientss', response.data.data)
        commit('setLastPage', response.data.meta.last_page)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'No Data Found',
        })
      }
    },
    // trashed
    async trashed({ commit, state }, filter) {
      try {
        const response = await axios.get('api/v1/clients/trashed?filter='
        + filter.filter +'&sortby='
        + filter.sortby +'&orderby='
        + filter.orderby +'&filtervalue='
        + filter.filtervalue +'&paginate='
        + filter.paginate +'&created_at='
        + filter.created_at +'&updated_at='
        + filter.updated_at +'&expand='
        + filter.expand +'&page='+ filter.page)
        commit('setTrashed', response.data.data)
        //commit('setLastPageTrashed', response.data.meta.last_page)
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'No Data Found',
        })
      }
    },
    // delete
    async deletee({ commit, dispatch }, id) {

      try {

        axios.delete('api/v1/clients/destroy/'+ id)

          Swal.fire(
            'Votre fichier a été supprimé.',
            '',
            'success'
          )
        
          
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'No Data Found',
          })
        }
    },
    // restore
    async restore(_, id) {     
      try {

          const response = await axios.post('api/v1/clients/restore/'+ id)

         Swal.fire(
              'Restore',
              '',
              'success'
            )

        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'No Data Found',
          })
        }
    },
    // forced
    async forced(_, id) {
    
      try {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            axios.post('api/v1/clients/forced/'+ id)
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })

        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'No Data Found',
          })
        }
    },
    // created
    async created(_, clients) {
      try {
        let formData = new FormData();
        formData.append('photo', clients.photo);
        formData.append('name', clients.name);
        
        const response = await axios.post('api/v1/clients/store', formData)
        Swal.fire(
            'Created',
            '',
            'success'
            )

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'No Data Found',
        })
      }
  }
  },
  modules: {
  }
}
