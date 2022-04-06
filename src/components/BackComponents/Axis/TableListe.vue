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
                          <tbody v-if="axiss.length">
                                <tr v-for="(axise, index) in axiss" v-bind:key="axise.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ axise.email.substr(0, 10) }}...</td>
                                    <td>{{ axise.phone.substr(0, 10) }}...</td>
                                    <td>{{ axise.address.substr(0, 10) }}...</td>
                                    <td>{{ axise.description_agency.substr(0, 10) }}...</td>
                                    <td v-html="axise.localisation"></td>
                                    <td>{{ axise.social.substr(0, 10) }}...</td>
                                    <td><img :src="$store.state.UrlBack+axise.logo" alt="" width="100%"></td>
                                    <td><img :src="$store.state.UrlBack+axise.photo_carousel" alt="" width="100%"></td>
                                    <td><img :src="$store.state.UrlBack+axise.photo_agency" alt="" width="100%"></td>
                                    <td><button @click="edit(axise.id)" class="btn btn-success"><i class="fa fa-pencil-square"></i></button></td>
                                    <td><button @click="deleted(axise.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
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

<div class="card-footer clearfix" v-if="axiss.length">
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
      'axiss', 'TableListe', 'last_page', 'filterGet'
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
    }
    
  },
  mounted() {
    console.log(this.filterGet.page)
    console.log('hhhhhhhhhhhhhhhhh')
    console.log(this.last_page)
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
