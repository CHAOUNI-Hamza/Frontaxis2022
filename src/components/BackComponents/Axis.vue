<template>
<div class="wrapper">

    <AdminNav />

    <AdminAsideTop />

    <div class="content-wrapper">
        <HeaderAdmin />
        <div class="content"> 
            <div class="container-fluid">
                <div class="row">
                    <div class="row">
                        <div class="col-md-3" v-if="!TableTrashed">
                            <!-- button affiche trashed -->
                            <button @click="buttonshowtrached()" type="button" class="btn btn-block btn-danger btn-sm">Trached   <i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3" v-if="TableTrashed">
                            <!-- button remove trashed -->
                            <button @click="buttonremoveformtrashed()" type="button" class="btn btn-block btn-danger btn-sm">Remove Trached   <i class="fa fa-minus" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3" v-if="!FormCreated && !TableTrashed && !FormEdition">
                            <!-- button created -->
                            <button @click="ButtonCreated()" type="button" class="btn btn-block btn-success btn-sm">Created   <i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3">
                            <button @click="emptyfieldsearch()" class="btn btn-block btn-success btn-sm" data-v-29acd89a="">Emptys Search   <i class="fa fa-refresh" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <!-- start form search -->
                    <Search :filterGet="filterGet" />

                    <!-- start form created -->
                    <FormCreated :FormCreated="FormCreated" :axis="axis" @created="created()" @onChangeLogo="onChangeLogo($event)" @onChangePhotoCarousel="onChangePhotoCarousel($event)" @onChangePhotoAgency="onChangePhotoAgency($event)" @buttoncacherformecreated="buttoncacherformecreated()" />
                    
                    <!-- end form updated -->                           
                    <FormUpdated :FormEdition="FormEdition" :axis="axis" @update="update($event)" @onChangeLogo="onChangeLogo($event)" @onChangePhotoCarousel="onChangePhotoCarousel($event)" @onChangePhotoAgency="onChangePhotoAgency($event)" @buttoncacherformedition="buttoncacherformedition()" />
                    
                    <!-- start liste table -->
                    <TableListe :axiss="counter" :TableListe="TableListe" @deletee="deletee($event)" @edit="edit($event)" @get="get()" />
                    
                    <!-- start liste table trashed -->                      
                    <TableListeTrashed :axissTrashed="axissTrashed" :TableTrashed="TableTrashed" @restore="restore($event)" @forced="forced($event)" />

                </div>
            </div>
        </div>
    </div>

    <AdminAsideBottom />

    <AdminFooter />

</div>
</template>

<script>
import AdminNav from './TemplateAdmin/AdminNav.vue'
import AdminAsideTop from './TemplateAdmin/AdminAsideTop.vue'
import AdminAsideBottom from './TemplateAdmin/AdminAsideBottom.vue'
import AdminFooter from './TemplateAdmin/AdminFooter.vue'
import TableListe from './Axis/TableListe.vue'
import TableListeTrashed from './Axis/TableListeTrashed.vue'
import FormCreated from './Axis/FormCreated.vue'
import FormUpdated from './Axis/FormUpdated.vue'
import Search from './Axis/Search.vue'
import HeaderAdmin from './Axis/HeaderAdmin.vue'
import axios from 'axios'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Axis',
  props: {
    
  },
  components: {
    AdminNav,
    AdminAsideTop,
    AdminAsideBottom,
    AdminFooter,
    TableListe,
    TableListeTrashed,
    FormCreated,
    FormUpdated,
    Search,
    HeaderAdmin
  },
  data() {
      return {
        Search: '',
        // affiche et cacher Table Trashed
        TableTrashed: false,
        // affiche et cacher formulaire created
        FormCreated: false,
        // affiche et cacher formulaire edition
        FormEdition: false,
        // affiche et cacher formulaire trashed
        FormTrashed: false,
        // affiche et cacher liste ( gets )
        TableListe: true,
        // variable des formation inputs
        axis: {
          logo:'',
          photo_carousel:'',
          description_agency:'',
          photo_agency:'',
          address:'',
          email:'',
          phone:'',
          localisation:'',
          social:'',
        },
        axiss: [],
        axissTrashed: [],
        // variable de filter
        filterGet: {
              filter: 'email',
              sortby: 'id',
              orderby: 'asc',
              filtervalue: '',
              paginate: '5',
              created_at: '',
              updated_at: '',
              expand: '',
              date_from: '',
              date_to: ''
        }
      }
  },
    watch: {

      filterGet: {
                handler: function (newQ, old) {
          this.get()
                },
                deep: true
            }
    },
  methods: {
    // function pour vider les input de recherche
    emptyfieldsearch() {
      this.filterGet = {
              filter: 'email',
              sortby: 'id',
              orderby: 'asc',
              filtervalue: '',
              paginate: '5',
              created_at: '',
              updated_at: '',
              expand: '',
              date_from: '',
              date_to: ''
        }
    },
    // function cacher form edition
    buttoncacherformedition() {
      this.FormEdition = !this.FormEdition
      this.axis = {
          logo:'',
          photo_carousel:'',
          description_agency:'',
          photo_agency:'',
          address:'',
          email:'',
          phone:'',
          localisation:'',
          social:'',
        }
    },
    // function cacher form edition
    buttoncacherformecreated() {
      this.FormCreated = !this.FormCreated
      this.axis = {
          logo:'',
          photo_carousel:'',
          description_agency:'',
          photo_agency:'',
          address:'',
          email:'',
          phone:'',
          localisation:'',
          social:'',
        }
    },
    // function cacher form trashed
    buttonremoveformtrashed() {
      this.TableTrashed = false
      this.FormCreated = false
      this.FormEdition = false
      this.FormTrashed = false
      this.TableListe = true
    },
    // function affiche table trashed
    buttonshowtrached() {
      this.trashed()
      this.TableTrashed = !this.TableTrashed
      this.TableListe = false
      this.FormCreated = false
    },
    // function affiche form created
    ButtonCreated() {
      this.FormCreated = !this.FormCreated
    },
    // les functions de change images
    onChangeLogo(e) {
      this.axis.logo = e.target.files[0]
    },
    onChangePhotoCarousel(e) {
      this.axis.photo_carousel = e.target.files[0]
    },
    onChangePhotoAgency(e) {
      this.axis.photo_agency = e.target.files[0]
    },
    // function created new
    async created() {
        try {
          let formData = new FormData();
          formData.append('logo', this.axis.logo);
          formData.append('photo_carousel', this.axis.photo_carousel);
          formData.append('description_agency', this.axis.description_agency);
          formData.append('photo_agency', this.axis.photo_agency);
          formData.append('address', this.axis.address);
          formData.append('email', this.axis.email);
          formData.append('phone', this.axis.phone);
          formData.append('localisation', this.axis.localisation);
          formData.append('social', this.axis.social);
          
          const response = await axios.post('api/v1/company/store', formData)

          this.FormCreated = !this.FormCreated
          this.TableListe = true
          this.get()

          this.axis = {
          logo:'',
          photo_carousel:'',
          description_agency:'',
          photo_agency:'',
          address:'',
          email:'',
          phone:'',
          localisation:'',
          social:'',
        }

         Swal.fire(
  'Good job!',
  '',
  'success'
)

        } catch (error) {
            console.log(error); 
        }
    },
    // get
    ...mapActions({
          'get_' : 'axis/get'
      }),
      get() {
          this.get_(this.filterGet);
      },
    // trashed
    ...mapActions({
          'getTrashed' : 'axis/getTrashed'
      }),
      getTrashed() {
          this.getTrashed(this.filterGet);
      },
    // edit
    async edit(id) {
      try {
        this.FormEdition = !this.FormEdition
        const response = await axios.get('api/v1/company/index?expand='+ id)
        this.axis = {
          id: response.data.data.id,
          logo: response.data.data.logo,
          photo_carousel: response.data.data.photo_carousel,
          description_agency: response.data.data.description_agency,
          photo_agency: response.data.data.photo_agency,
          address: response.data.data.address,
          email: response.data.data.email,
          phone: response.data.data.phone,
          localisation: response.data.data.localisation,
          social: response.data.data.social,
        }
      } catch (error) {
        console.log(error)
      }
    },
    // update
    async update(id) {
      
      try {
          let formData = new FormData();
          formData.append('logo', this.axis.logo);
          formData.append('photo_carousel', this.axis.photo_carousel);
          formData.append('description_agency', this.axis.description_agency);
          formData.append('photo_agency', this.axis.photo_agency);
          formData.append('address', this.axis.address);
          formData.append('email', this.axis.email);
          formData.append('phone', this.axis.phone);
          formData.append('localisation', this.axis.localisation);
          formData.append('social', this.axis.social);
          

          const response = await axios.post('api/v1/company/update/'+ id, formData)

          this.FormEdition = !this.FormEdition
          this.TableListe = true
          this.get()

         Swal.fire(
  'Good job!',
  '',
  'success'
)

        } catch (error) {
            console.log(error);
        }
    },
    // delete
    async deletee(id) {
      
      try {

          const response = await axios.delete('api/v1/company/destroy/'+ id)

          this.FormEdition = this.FormEdition
          this.TableListe = true
          this.get()

         Swal.fire(
  'Good job!',
  '',
  'success'
)

        } catch (error) {
            console.log(error);
        }
    },
    // restore
    async restore(id) {
      
      try {

          const response = await axios.post('api/v1/company/restore/'+ id)

          this.TableListe = true
          this.TableTrashed = false
          this.get()

         Swal.fire(
  'Good job!',
  '',
  'success'
)

        } catch (error) {
            console.log(error);
        }
    },
    // forced
    async forced(id) {
      
      try {

          const response = await axios.post('api/v1/company/forced/'+ id)

          this.TableListe = false
          this.TableTrashed = true
          this.trashed()

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
  mounted() {
    this.get()
  },
  computed: {  
    counter() {
            return this.$store.getters['axis/getAxiss'];
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper .content .btn {
    margin-bottom: 20px;
    margin-left: 20px;
}
.wrapper .table img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
.wrapper .content .table .btn {
    width: 70%;
    margin-bottom: 20px;
}
</style>
