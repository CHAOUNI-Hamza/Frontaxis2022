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
                            <button ref="test" @click="buttonshowtrached()" type="button" class="btn btn-block btn-danger btn-sm">Trached   <i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3" v-if="TableTrashed">
                            <!-- button remove trashed -->
                            <button @click="buttonremoveformtrashed()" type="button" class="btn btn-block btn-danger btn-sm">Remove Trached   <i class="fa fa-minus" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3" v-if="!FormCreated && !TableTrashed && !FormEdition">
                            <!-- button created -->
                            <button @click="ButtonCreated()" type="button" class="btn btn-block btn-success btn-sm">Created   <i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3" v-if="!TableTrashed">
                            <button @click="emptyfieldsearch()" class="btn btn-block btn-success btn-sm" data-v-29acd89a="">Emptys Search   <i class="fa fa-refresh" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <!-- start form search -->
                    <Search 
                    :filterGet="filterGet"
                    :TableTrashed="TableTrashed"
                     />

                    <!-- start form created -->
                    <FormCreated 
                        :FormCreated="FormCreated"
                        :produit="produit"
                        :services="services"
                        @created="created()"
                        @onChangeLogo="onChangeLogo($event)"
                        @buttoncacherformecreated="buttoncacherformecreated()"
                    />
                    
                    <!-- end form updated -->                           
                    <FormUpdated
                        :FormEdition="FormEdition"
                        :produit="produit"
                        :services="services"
                        @update="update($event)"
                        @onChangeLogo="onChangeLogo($event)"
                        @onChangePhotoCarousel="onChangePhotoCarousel($event)"
                        @onChangePhotoAgency="onChangePhotoAgency($event)"
                        @buttoncacherformedition="buttoncacherformedition()"
                    />
                    
                    <!-- start liste table -->
                    <TableListe
                        :filterGet="filterGet"
                        :last_page="last_page"
                        :produits="counter"
                        :TableListe="TableListe"
                        @deletee="deletee($event)"
                        @edit="edit($event)"
                        @get="get()"
                    />
                    
                    <!-- start liste table trashed -->                      
                    <TableListeTrashed
                        :produitsTrashed="trasheed"
                        :last_page_trashed="last_page_trashed"
                        :TableTrashed="TableTrashed"
                        @restore="restore($event)"
                        @forced="forced($event)"
                    />

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
import TableListe from './Produit/TableListe.vue'
import TableListeTrashed from './Produit/TableListeTrashed.vue'
import FormCreated from './Produit/FormCreated.vue'
import FormUpdated from './Produit/FormUpdated.vue'
import Search from './Produit/Search.vue'
import HeaderAdmin from './Produit/HeaderAdmin.vue'
import axios from 'axios'

import { mapActions, mapGetters } from 'vuex'



export default {
  name: 'Produit',
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
        produit: {
          photo:'',
          title:'',
          description:'',
          social:'',
          service_id:'',
        },
        produits: [],
        produitsTrashed: [],
        // variable de filter
        filterGet: {
              filter: 'title',
              sortby: 'id',
              orderby: 'asc',
              filtervalue: '',
              paginate: '5',
              created_at: '',
              updated_at: '',
              expand: '',
              date_from: '',
              date_to: '',
              page: 1
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
              filter: 'title',
              sortby: 'id',
              orderby: 'asc',
              filtervalue: '',
              paginate: '5',
              created_at: '',
              updated_at: '',
              expand: '',
              date_from: '',
              date_to: '',
              page: 1
        }
    },
    // function cacher form edition
    buttoncacherformedition() {
      this.FormEdition = !this.FormEdition
      this.produit = {
          photo:'',
          title:'',
          description:'',
          social:'',
          service_id:'',
        }
    },
    // function cacher form edition
    buttoncacherformecreated() {
      this.FormCreated = !this.FormCreated
      this.produit = {
          photo:'',
          title:'',
          description:'',
          social:'',
          service_id:'',
        }
    },
    // function cacher form trashed
    buttonremoveformtrashed() {
      this.TableTrashed = false
      this.FormCreated = false
      this.FormEdition = false
      this.FormTrashed = false
      this.TableListe = true
      this.get()
    },
    // function affiche table trashed
    buttonshowtrached() {
      this.getTrashed()
      this.TableTrashed = true
      this.TableListe = false
      this.FormCreated = false
    },
    // function affiche form created
    ButtonCreated() {
      this.FormCreated = !this.FormCreated
    },
    // les functions de change images
    onChangeLogo(e) {
      this.produit.photo = e.target.files[0]
    },
    // function created new
    ...mapActions({
          'created_' : 'produits/created'
      }),
      created() {
          this.created_(this.produit);
          this.FormCreated = !this.FormCreated
        this.TableListe = true
        this.get()
        this.produit = {
          photo:'',
          title:'',
          description:'',
          social:'',
          service_id:'',
        }
      },
    // get
    ...mapActions({
          'get_' : 'produits/get'
      }),
      get() {
          this.get_(this.filterGet);
      },
    // trashed
    ...mapActions({
          'getTrashed_' : 'produits/trashed'
      }),
      getTrashed() {
          this.getTrashed_(this.filterGet);
      },
    // edit
    async edit(id) {
      try {
        this.FormEdition = !this.FormEdition
        const response = await axios.get('api/v1/produit/index?expand='+ id)
        this.produit = {
          id: response.data.data.id,
          photo: response.data.data.photo,
          title: response.data.data.title,
          description: response.data.data.description,
          social: response.data.data.social,
          service_id: response.data.data.service_id,
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'No Data Found',
        })
      }
    },
    // update
  async update(id) {
    try {
        let formData = new FormData();
        formData.append('title', this.produit.title);
        formData.append('photo', this.produit.photo);
        formData.append('description', this.produit.description);
        formData.append('social', this.produit.social);
        formData.append('service_id', this.produit.service_id);

        const response = await axios.post('api/v1/produit/update/'+ id, formData)

        this.FormEdition = !this.FormEdition
        this.TableListe = true
        this.produit = {
          photo:'',
          title:'',
          description:'',
          social:'',
          service_id:'',
        }
        this.get()

       Swal.fire(
        'Updated',
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
    // delete
    ...mapActions({
          'delete_' : 'produits/deletee'
      }),
      deletee(id) {
          this.delete_(id);
          this.FormEdition = this.FormEdition
          this.TableListe = true
          this.get()
      },
    // restore
    ...mapActions({
      'restore_' : 'produits/restore'
    }),
    restore(id) {
      this.restore_(id)
      this.TableListe = true
      this.TableTrashed = false
      this.get()
    },
    // forced
    ...mapActions({
      'forced_' : 'produits/forced'
    }),
    forced(id) {
      this.forced_(id)
      this.TableListe = false
          this.TableTrashed = true
          this.getTrashed()
    },
    // get services
    ...mapActions({
          'getServices_' : 'services/get'
      }),
      getServices() {
          this.getServices_(this.filterGet);
      },
  },
  mounted() {
    this.get()
    this.getServices()
  },
  computed: {  
        counter() {
            return this.$store.getters['produits/getProduits'];
        },
        trasheed() {
            return this.$store.getters['produits/getTrashed'];
        },
        last_page() {
          return this.$store.getters['produits/getLastPage'];
        },
        last_page_trashed() {
          return this.$store.getters['produits/getLastPageTrashed'];
        },
        services() {
            return this.$store.getters['services/getServicess'];
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
