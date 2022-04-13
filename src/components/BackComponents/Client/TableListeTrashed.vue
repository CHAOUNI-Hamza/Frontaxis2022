<template>
<div v-if="TableTrashed" class="col-12">
                    <div class="card">
                    <div class="card-header">
                    <h3 class="card-title">Table Liste Trashed</h3>
                    <div class="card-tools">
                    <div class="input-group input-group-sm" style="width: 150px;">
                    
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
                    <td>{{ axise.email }}</td>
                    <td>{{ axise.phone }}</td>
                    <td>{{ axise.address }}</td>
                    <td>{{ axise.description_agency }}</td>
                    <td>{{ axise.localisation }}</td>
                    <td>{{ axise.social }}</td>
                    <td><button @click="modalimg($store.state.UrlBack+axise.logo)"><img :src="$store.state.UrlBack+axise.logo" alt="" width="100%"></button></td>
                    <td><button @click="modalimg($store.state.UrlBack+axise.logo)"><img :src="$store.state.UrlBack+axise.photo_carousel" alt="" width="100%"></button></td>
                    <td><button @click="modalimg($store.state.UrlBack+axise.logo)"><img :src="$store.state.UrlBack+axise.photo_agency" alt="" width="100%"></button></td>
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
                   <!-- <div class="card-footer clearfix" v-if="axissTrashed.length">
<ul class="pagination pagination-sm m-0 float-right">
<li class="page-item"><button @click="filterGet.page = '1'" class="page-link" href="#">»</button></li>
<li class="page-item" v-for="index  in last_page_trashed" v-bind:key="index "><button @click="filterGet.page = index" class="page-link">{{ index  }}</button></li>
<li class="page-item"><button @click="filterGet.page = last_page_trashed" class="page-link" href="#">»</button></li>
</ul>
</div>-->

                    </div>

                    </div>
</template>

<script>
//import Pagination from 'laravel-vue-pagination'


export default {
  name: 'TableListeTrashed',
  props: [
      'axissTrashed', 'TableTrashed', 'last_page_trashed'
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
    },
    getTrashed() {
      this.$emit('getTrashed')
    },
    modalimg(url) {
      Swal.fire({
        //title: 'Sweet!',
        //text: 'Modal with a custom image.',
        imageUrl: url,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
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
