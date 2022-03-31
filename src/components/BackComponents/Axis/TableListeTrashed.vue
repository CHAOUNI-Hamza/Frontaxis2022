<template>
<div v-if="TableTrashed" class="col-12">
                    <div class="card">
                    <div class="card-header">
                    <h3 class="card-title">Table Liste Trashed</h3>
                    <div class="card-tools">
                    <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">
                    <div class="input-group-append">
                    <button type="submit" class="btn btn-default">
                    <i class="fas fa-search"></i>
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                    <thead>
                    <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>Localisation</th>
                    <th>Social</th>
                    <th>Logo</th>
                    <th>Photo Carousel</th>
                    <th>Photo Agence</th>
                    </tr>
                    </thead>
                    <tbody v-if="axissTrashed.length">
                    <tr v-for="(axise, index) in axissTrashed" v-bind:key="axise.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ axise.email.substr(0, 10) }}...</td>
                    <td>{{ axise.phone.substr(0, 10) }}...</td>
                    <td>{{ axise.address.substr(0, 10) }}...</td>
                    <td>{{ axise.description_agency.substr(0, 10) }}...</td>
                    <td>{{ axise.localisation.substr(0, 10) }}...</td>
                    <td>{{ axise.social.substr(0, 10) }}...</td>
                    <td><img :src="$store.state.UrlBack+axise.logo" alt="" width="100%"></td>
                    <td><img :src="$store.state.UrlBack+axise.photo_carousel" alt="" width="100%"></td>
                    <td><img :src="$store.state.UrlBack+axise.photo_agency" alt="" width="100%"></td>
                    <td><button @click="restore(axise.id)" class="btn btn-success"><i class="fa fa-recycle" aria-hidden="true"></i></button></td>
                    <td><button @click="forced(axise.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
                    </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td>
                          Lodding ...
                        </td>
                      </tr>
                    </tbody>
                    <!--<Pagination :data="laravelData" @pagination-change-page="getResults" />-->
                    </table>
                    </div>

                    </div>

                    </div>
</template>

<script>
//import Pagination from 'laravel-vue-pagination'


export default {
  name: 'TableListeTrashed',
  props: [
      'axissTrashed', 'TableTrashed'
  ],
  components: {

  },
  data() {
    return {
        //data here
    }
  },
    watch: {
    },
  methods: {
    restore(id) {
      this.$emit('restore', id)
    },
    forced(id) {
      this.$emit('forced', id)
    }
  },
  mounted() {
    
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
