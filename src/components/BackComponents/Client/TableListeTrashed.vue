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
                              <th>Name</th>
                              <th>Logo</th>
                            </tr>
                          </thead>
                          <tbody v-if="clientssTrashed.length">
                            <tr v-for="(clients, index) in clientssTrashed" v-bind:key="clients.id">
                              <td>{{ index + 1 }}</td>
                              <td>{{ clients.name }}</td>
                              <td><button @click="modalimg($store.state.UrlBack+clients.photo)"><img :src="$store.state.UrlBack+clients.photo" alt="" width="100%"></button></td>
                              <td><button @click="restore(clients.id)" class="btn btn-success"><i class="fa fa-recycle" aria-hidden="true"></i></button></td>
                              <td><button @click="forced(clients.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
                            </tr>
                          </tbody>
                          <tbody v-else>
                            <tr>
                              <td>
                                Lodding ...
                              </td>
                            </tr>
                          </tbody>
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
      'clientssTrashed', 'TableTrashed', 'last_page_trashed'
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
