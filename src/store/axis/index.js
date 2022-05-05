import axios from 'axios';
export default {
  namespaced: true,
  state: {
    axiss : [],
    axissTrashed: [],
    id_update: 1
  },
  mutations: {
    setAxiss(state, data) {
      state.axiss = data
    },
    setTrashed(state, data) {
      state.axissTrashed = data
    },
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
    // get
    async get({ commit, state }, filter) {
     try {
        const response = await axios.get('api/v1/company/index')
        commit('setAxiss', response.data.data)
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
        const response = await axios.get('api/v1/company/trashed?filter='
        + filter.filter +'&sortby='
        + filter.sortby +'&orderby='
        + filter.orderby +'&filtervalue='
        + filter.filtervalue +'&paginate='
        + filter.paginate +'&created_at='
        + filter.created_at +'&updated_at='
        + filter.updated_at +'&expand='
        + filter.expand +'&page='+ filter.page)
        commit('setTrashed', response.data.data)
      } catch (error) {
        console.log(error)
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

            axios.delete('api/v1/company/destroy/'+ id)
            
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

          const response = await axios.post('api/v1/company/restore/'+ id)

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

            axios.post('api/v1/company/forced/'+ id)
            
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
    async created(_, axis) {
      try {
        let formData = new FormData();
        formData.append('logo', axis.logo);
        formData.append('photo_carousel', axis.photo_carousel);
        formData.append('description_agency', axis.description_agency);
        formData.append('photo_agency', axis.photo_agency);
        formData.append('address', axis.address);
        formData.append('email', axis.email);
        formData.append('phone', axis.phone);
        formData.append('localisation', axis.localisation);
        formData.append('social', axis.social);     
        const response = await axios.post('api/v1/company/store', formData)
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
