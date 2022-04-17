<template>
      <div v-if="TableListe" class="col-12">
            <div class="card">
                  <div class="card-header">
                      <h3 class="card-title">Table Liste</h3>
                      <div class="card-tools">
                      <!--<div class="input-group input-group-sm" style="width: 150px;">
                      <input type="text" name="filterGet" v-model="Search" class="form-control float-right" placeholder="Search">

                      <div class="input-group-append">
                      <button type="submit" class="btn btn-default">
                      <i class="fas fa-search"></i>
                      </button>
                      </div>
                      </div>-->
                      </div>
                  </div>

                  <div class="card-body table-responsive p-0">
                      <table class="table table-hover text-nowrap">
                          <thead>
                              <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Photo</th>
                              </tr>
                          </thead>
                          <tbody v-if="produits.length">
                                <tr v-for="(produit, index) in produits" v-bind:key="produit.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ produit.title }}</td>
                                    <td><button @click="modalimg($store.state.UrlBack+produit.photo)"><img :src="$store.state.UrlBack+produit.photo" alt="" width="100%"></button></td>
                                    <td><button @click="edit(produit.id)" class="btn btn-success"><i class="fa fa-pencil-square"></i></button></td>
                                    <td><button @click="deleted(produit.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
                                </tr>
                          </tbody>
                          <tbody v-else>
                            <tr>
                              <td>
                                Loding ...
                              </td>
                            </tr>
                          </tbody>


                      </table>
                  </div>

<div class="card-footer clearfix" v-if="produits.length">
<ul class="pagination pagination-sm m-0 float-right">
<li class="page-item"><button @click="filterGet.page = '1'" class="page-link" href="#">»</button></li>
<li class="page-item" v-for="index  in last_page" v-bind:key="index "><button @click="filterGet.page = index" class="page-link">{{ index  }}</button></li>
<li class="page-item"><button @click="filterGet.page = last_page" class="page-link" href="#">»</button></li>
</ul>
</div>
            </div>
      </div>
</template>

<script>


export default {
  name: 'TableListe',
  props: [
      'produits', 'TableListe', 'last_page', 'filterGet'
  ],
  components: {
    
  },
  data() {
    return {
        
    }
  },
    watch: {
    },
  methods: {
    deleted(id) {
      this.$emit('deletee', id)
    },
    edit(id) {
      this.$emit('edit', id)
    },
    get() {
      this.$emit('get')
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
