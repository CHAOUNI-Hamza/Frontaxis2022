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
                            <button ref="test" @click="buttonshowtrached()" type="button" class="btn btn-block btn-danger btn-sm">Trached&ensp;<i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3" v-if="TableTrashed">
                            <!-- button remove trashed -->
                            <button @click="buttonremoveformtrashed()" type="button" class="btn btn-block btn-danger btn-sm">Remove Trached&ensp;<i class="fa fa-minus" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3" v-if="!FormCreated && !TableTrashed && !FormEdition">
                            <!-- button created -->
                            <button @click="ButtonCreated()" type="button" class="btn btn-block btn-success btn-sm">Created&ensp;<i class="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                        <div class="col-md-3" v-if="!TableTrashed">
                            <button @click="emptyfieldsearch()" class="btn btn-block btn-success btn-sm" data-v-29acd89a="">Emptys Search&ensp;<i class="fa fa-refresh" aria-hidden="true"></i></button>
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
                        :client="client"
                        @created="created()"
                        @onChangeLogo="onChangeLogo($event)"
                        @buttoncacherformecreated="buttoncacherformecreated()"
                    />
                    
                    <!-- end form updated -->                           
                    <FormUpdated
                        :FormEdition="FormEdition"
                        :client="client" @update="update($event)"
                        @onChangeLogo="onChangeLogo($event)"
                        @onChangePhotoCarousel="onChangePhotoCarousel($event)"
                        @onChangePhotoAgency="onChangePhotoAgency($event)"
                        @buttoncacherformedition="buttoncacherformedition()"
                    />
                    
                    <!-- start liste table -->
                    <TableListe
                        :filterGet="filterGet"
                        :last_page="last_page"
                        :clientss="counter"
                        :TableListe="TableListe"
                        @deletee="deletee($event)"
                        @edit="edit($event)"
                        @get="get()"
                    />
                    
                    <!-- start liste table trashed -->                      
                    <TableListeTrashed
                        :clientssTrashed="trasheed"
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
import TableListe from './Client/TableListe.vue'
import TableListeTrashed from './Client/TableListeTrashed.vue'
import FormCreated from './Client/FormCreated.vue'
import FormUpdated from './Client/FormUpdated.vue'
import Search from './Client/Search.vue'
import HeaderAdmin from './Client/HeaderAdmin.vue'
import axios from 'axios'

import { mapActions, mapGetters } from 'vuex'



export default {
  name: 'Client',
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
        client: {
          photo:'',
          name:'',
        },
        axiss: [],
        axissTrashed: [],
        // variable de filter
        filterGet: {
              filter: 'name',
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
              filter: 'name',
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
      this.client = {
          photo:'',
          name:'',
        }
    },
    // function cacher form edition
    buttoncacherformecreated() {
      this.FormCreated = !this.FormCreated
      this.client = {
          photo:'',
          name:'',
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
      this.client.photo = e.target.files[0]
    },
    // function created new
    ...mapActions({
          'created_' : 'clients/created'
      }),
      created() {
          this.created_(this.client);
          this.FormCreated = !this.FormCreated
        this.TableListe = true
        this.get()

        this.client = {
            photo:'',
            name:'',
          }
      },
    // get
    ...mapActions({
          'get_' : 'clients/get'
      }),
      get() {
          this.get_(this.filterGet);
      },
    // trashed
    ...mapActions({
          'getTrashed_' : 'clients/trashed'
      }),
      getTrashed() {
          this.getTrashed_(this.filterGet);
      },
    // edit
    async edit(id) {
      try {
        this.FormEdition = !this.FormEdition
        const response = await axios.get('api/v1/clients/index?expand='+ id)
        this.client = {
          id: response.data.data.id,
          name: response.data.data.name,
          photo: response.data.data.photo,
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
        formData.append('name', this.client.name);
        formData.append('photo', this.client.photo);

        const response = await axios.post('api/v1/clients/update/'+ id, formData)

        this.FormEdition = !this.FormEdition
        this.TableListe = true
        this.get()

        this.client = {
            photo:'',
            name:'',
          }

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
          'delete_' : 'clients/deletee'
      }),
      deletee(id) {
          this.delete_(id);
          this.FormEdition = this.FormEdition
          this.TableListe = true

          this.get()
      },
    // restore
    ...mapActions({
      'restore_' : 'clients/restore'
    }),
    restore(id) {
      this.restore_(id)
      this.TableListe = true
      this.TableTrashed = false
      this.get()
    },
    // forced
    ...mapActions({
      'forced_' : 'clients/forced'
    }),
    forced(id) {
      this.forced_(id)
      this.TableListe = false
          this.TableTrashed = true
          this.getTrashed()
    },
  },
  mounted() {
    this.get()
  },
  computed: {  
        counter() {
            return this.$store.getters['clients/getClientss'];
        },
        trasheed() {
            return this.$store.getters['clients/getTrashed'];
        },
        last_page() {
          return this.$store.getters['clients/getLastPage'];
        },
        last_page_trashed() {
          return this.$store.getters['clients/getLastPageTrashed'];
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
