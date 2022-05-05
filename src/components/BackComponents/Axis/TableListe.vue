<template>

<div class="container-fluid">
<div class="row">
<div class="col-12">

<div class="invoice p-3 mb-3">

<div class="row">
<div class="col-12">
<h4>
<i class="fas fa-globe"></i> Information Axis
</h4>
</div>

</div>

<div class="row invoice-info">
<div class="col-sm-4 invoice-col">

<address>
<strong>Address :</strong><br>
{{ axiss.address }}<br>
</address>
<strong>Email :</strong><br>
{{ axiss.email }}<br><br>

<strong>Phone :</strong><br>
{{ axiss.phone }}<br><br>

<!--<strong>Social :</strong><br>
Fax : {{ axiss.social.Fax }}<br>
Fix : {{ axiss.social.Fix }}<br>
Gsm : {{ axiss.social.Gsm }}<br>
Tél : {{ axiss.social.Tel }}<br>
Wathssap : {{ axiss.social.wathssap }}<br>
Facebook : {{ axiss.social.Facebook }}<br>
Twitter : {{ axiss.social.Twitter }}<br>
Linkedin : {{ axiss.social.Linkedin }}<br>
Instagram : {{ axiss.social.instagram }}<br>
Twitter : {{ axiss.social.twitter }}<br>-->
</div>

<div class="col-sm-4 invoice-col">

<strong>Logo</strong><br><br>
<img :src="$store.state.UrlBack+axiss.logo" alt=""><br><br>

<strong>Photo Carousel</strong><br><br>
<img :src="$store.state.UrlBack+axiss.photo_carousel" alt=""><br>
</div>

<div class="col-sm-4 invoice-col">
<strong>Photo Agency</strong><br><br>
<img :src="$store.state.UrlBack+axiss.photo_agency" alt="">
</div>
</div>

</div>



</div>

</div>
</div>




      <!--<div v-if="TableListe" class="col-12">
            <div class="card">
                  <div class="card-header">
                      <h3 class="card-title">Table Liste</h3>
                      <div class="card-tools">
                      <div class="input-group input-group-sm" style="width: 150px;">
                      <input type="text" name="filterGet" v-model="Search" class="form-control float-right" placeholder="Search">

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
                          <tbody v-if="axiss.length">
                                <tr v-for="(axise, index) in axiss" v-bind:key="axise.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ axise.email }}</td>
                                    <td>{{ axise.phone }}</td>
                                    <td>{{ axise.address }}...</td>
                                    <td>{{ axise.description_agency }}...</td>
                                    <td v-html="axise.localisation"></td>
                                    <td>{{ axise.social }}...</td>
                                    <td><button @click="modalimg($store.state.UrlBack+axise.logo)"><img :src="$store.state.UrlBack+axise.logo" alt="" width="100%"></button></td>
                                    <td><button @click="modalimg($store.state.UrlBack+axise.logo)"><img :src="$store.state.UrlBack+axise.photo_carousel" alt="" width="100%"></button></td>
                                    <td><button @click="modalimg($store.state.UrlBack+axise.logo)"><img :src="$store.state.UrlBack+axise.photo_agency" alt="" width="100%"></button></td>
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
      </div>-->
</template>

<script>


export default {
  name: 'TableListe',
  props: [
      'axiss', 'TableListe'
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
    console.log(this.axiss)
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
img {
  width: 80%;
}
</style>
