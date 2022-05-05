import axios from 'axios';
export default {
  namespaced: true,
  state: {
    produits : [],
    produitsTrashed: [],
    last_page: [],
    last_page_trashed: [],
    id_update: 1
  },
  mutations: {
    setProduits(state, data) {
      state.produits = data
    },
    setTrashed(state, data) {
      state.produitsTrashed = data
    },
    setLastPage(state, data) {
      state.last_page = data
    },
    setLastPageTrashed(state, data) {
      state.last_page = data
    }
  },
  getters: {
    getProduits(state) {
      return state.produits
    },
    getTrashed(state) {
      return state.produitsTrashed
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
        const response = await axios.get('api/v1/produit/index?filter='
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
        commit('setProduits', response.data.data)
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
        const response = await axios.get('api/v1/produit/trashed?filter='
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

            axios.delete('api/v1/produit/destroy/'+ id)
            
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
    // restore
    async restore(_, id) {     
      try {

          const response = await axios.post('api/v1/produit/restore/'+ id)

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

            axios.post('api/v1/produit/forced/'+ id)
            
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
    async created(_, produits) {
      try {
        let formData = new FormData();
        formData.append('title', produits.title);
        formData.append('photo', produits.photo);
        formData.append('description', produits.description);
        formData.append('social', produits.social);
        formData.append('service_id', produits.service_id);
        
        const response = await axios.post('api/v1/produit/store', formData)
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
