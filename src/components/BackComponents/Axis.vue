<template>
  <div class="wrapper">

  <!-- Navbar -->
  <AdminNav />
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <AdminAsideTop />

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Starter Page</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Starter Page</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- button created -->
          <button v-if="!FormCreated" @click="ButtonCreated()" type="button" class="btn btn-block btn-success btn-sm">Created <i class="fa fa-plus" aria-hidden="true"></i></button>
          <!-- button created -->
          <button v-if="!TableListe" @click="ButtonRemoveCreated()" type="button" class="btn btn-block btn-danger btn-sm">Remove <i class="fa fa-minus" aria-hidden="true"></i></button>
          <!-- start form created -->
          <div v-if="FormCreated" class="col-md-12">
            <div class="card card-primary">
<div class="card-header">
<h3 class="card-title">Information Axis</h3>
</div>


<form @submit.prevent="created()">
<div class="row">
  <div class="col-md-6">
    <div class="card-body">
<div class="form-group">
<label for="exampleInputEmail1">Email address</label>
<input v-model="axis.email" name="axis.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
</div>
<div class="form-group">
<label for="exampleInputEmail1">Phone</label>
<input v-model="axis.phone" name="axis.phone" type="text" class="form-control" id="exampleInputEmail1" placeholder="Phone">
</div>
<div class="form-group">
<label for="exampleInputEmail1">Adresse</label>
<textarea v-model="axis.address" name="axis.address" type="text" class="form-control" id="exampleInputEmail1" placeholder="Adresse"></textarea>
</div>
<div class="form-group">
<label for="exampleInputEmail1">Description Agence</label>
<textarea v-model="axis.description_agency" name="axis.description_agency" type="text" class="form-control" id="exampleInputEmail1" placeholder="Description Agence"></textarea>
</div>
<div class="form-group">
<label for="exampleInputEmail1">Localisation</label>
<input v-model="axis.localisation" name="axis.localisation" type="text" class="form-control" id="exampleInputEmail1" placeholder="Localisation ( URL )">
</div>
<div class="form-group">
<label for="exampleInputPassword1">Social</label>
<input v-model="axis.social" name="axis.social" type="text" class="form-control" id="exampleInputPassword1" placeholder="Social">
</div>
</div>
  </div>
  <div class="col-md-6">
    <div class="card-body">
<div class="form-group">
<label for="exampleInputFile">Logo</label>
<div class="input-group">
<div class="custom-file">
<input @change="onChangeLogo" name="axis.logo" type="file" class="custom-file-input" id="exampleInputFile">
<label class="custom-file-label" for="exampleInputFile">Choose file</label>
</div>
<div class="input-group-append">
<span class="input-group-text">Upload</span>
</div>
</div>
</div>
<div class="form-group">
<label for="exampleInputFile">Logo Carousel</label>
<div class="input-group">
<div class="custom-file">
<input @change="onChangePhotoCarousel" name="axis.photo_carousel" type="file" class="custom-file-input" id="exampleInputFile">
<label class="custom-file-label" for="exampleInputFile">Choose file</label>
</div>
<div class="input-group-append">
<span class="input-group-text">Upload</span>
</div>
</div>
</div>
<div class="form-group">
<label for="exampleInputFile">Photo Agence</label>
<div class="input-group">
<div class="custom-file">
<input @change="onChangePhotoAgency" name="axis.photo_agency" type="file" class="custom-file-input" id="exampleInputFile">
<label class="custom-file-label" for="exampleInputFile">Choose file</label>
</div>
<div class="input-group-append">
<span class="input-group-text">Upload</span>
</div>
</div>
</div>
</div>
  </div>
</div>

<div class="card-footer">
<button type="submit" class="btn btn-primary">Created</button>
</div>
</form>
</div>
          </div>
          <!-- end form created -->
          <!-- start table -->
          <div v-if="TableListe" class="col-12">
<div class="card">
<div class="card-header">
<h3 class="card-title">Responsive Hover Table</h3>
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
<tbody>
<tr v-for="(axise, index) in axiss" v-bind:key="index">
<td>{{ index }}</td>
<td>{{ axise.email }}</td>
<td>{{ axise.phone }}</td>
<td>{{ axise.address }}</td>
<td>{{ axise.description_agency }}</td>
<td>{{ axise.localisation }}</td>
<td>{{ axise.social }}</td>
<td><img :src="'http://localhost:8000'+axise.logo" alt="" width="100%"></td>
<td><img :src="'http://localhost:8000'+axise.photo_carousel" alt="" width="100%"></td>
<td><img :src="'http://localhost:8000'+axise.photo_agency" alt="" width="100%"></td>
</tr>
</tbody>
</table>
</div>

</div>

</div>
          <!-- end table -->
        </div>
      </div>
    </div>
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <AdminAsideBottom />
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <AdminFooter />
</div>
</template>

<script>
import AdminNav from './TemplateAdmin/AdminNav.vue'
import AdminAsideTop from './TemplateAdmin/AdminAsideTop.vue'
import AdminAsideBottom from './TemplateAdmin/AdminAsideBottom.vue'
import AdminFooter from './TemplateAdmin/AdminFooter.vue'
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    AdminNav,
    AdminAsideTop,
    AdminAsideBottom,
    AdminFooter,
  },
  data() {
      return {
        FormCreated: false,
        TableListe: true,
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
        filterGet: {
              filter: '',
              sortby: '',
              orderby: '',
              filtervalue: '',
              paginate: '',
              created_at: '',
              updated_at: '',
              expand: '',
        }
      }
  },
  methods: {
    // function show form created
    ButtonCreated() {
      this.FormCreated = !this.FormCreated
      this.TableListe = !this.TableListe
    },
    // function remove form created
    ButtonRemoveCreated() {
      this.FormCreated = !this.FormCreated
      this.TableListe = !this.TableListe
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
    onChangeLogo(e) {
      console.log(e.target.files[0])
      this.axis.logo = e.target.files[0]
    },
    onChangePhotoCarousel(e) {
      console.log(e.target.files[0])
      this.axis.photo_carousel = e.target.files[0]
    },
    onChangePhotoAgency(e) {
      console.log(e.target.files[0])
      this.axis.photo_agency = e.target.files[0]
      console.log(this.axis.photo_agency)
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
          this.TableListe = !this.TableListe

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
    async get() {
      try {
        this.filterGet = {
              filter: '',
              sortby: 'id',
              orderby: 'ASC',
              filtervalue: '',
              paginate: '',
              created_at: '',
              updated_at: '',
              expand: '1',
        }
        const response = await axios.get('api/v1/company/index?filter='+ this.filterGet.filter +'&sortby='+ this.filterGet.sortby +'&orderby='+ this.filterGet.orderby +'&filtervalue='+ this.filterGet.filtervalue +'&paginate='+ this.filterGet.paginate +'&created_at='+ this.filterGet.created_at +'&updated_at='+ this.filterGet.updated_at +'&expand='+ this.filterGet.expand)
        this.axiss = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.get()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper .content .btn {
    width: 10%;
    margin-bottom: 20px;
}
</style>
