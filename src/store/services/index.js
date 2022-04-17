import axios from 'axios';
export default {
  namespaced: true,
  state: {
    servicess : [],
    servicessTrashed: [],
    last_page: [],
    last_page_trashed: [],
    id_update: 1
  },
  mutations: {
    setServicess(state, data) {
      state.servicess = data
    },
    setTrashed(state, data) {
      state.servicessTrashed = data
    },
    setLastPage(state, data) {
      state.last_page = data
    },
    setLastPageTrashed(state, data) {
      state.last_page = data
    }
  },
  getters: {
    getServicess(state) {
      return state.servicess
    },
    getTrashed(state) {
      return state.servicessTrashed
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
        const response = await axios.get('api/v1/services/index?filter='
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
        commit('setServicess', response.data.data)
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
        const response = await axios.get('api/v1/services/trashed?filter='
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
        
        Swal.fire({
          icon: 'error',
          title: 'No Data Found',
        })
      }
    },
    // delete
    async deletee(_, id) {

      
      
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
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })

        const response = await axios.delete('api/v1/services/destroy/'+ id)
          
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

          const response = await axios.post('api/v1/services/restore/'+ id)

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
            
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })

        const response = await axios.post('api/v1/services/forced/'+ id)


        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'No Data Found',
          })
        }
    },
    // created
    async created(_, services) {
      try {
        let formData = new FormData();
        formData.append('photo', services.photo);
        formData.append('title', services.title);
        
        const response = await axios.post('api/v1/services/store', formData)
        Swal.fire(
            'Created',
            '',
            'success'
            )

      } catch (error) {
          console.log(error)
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
