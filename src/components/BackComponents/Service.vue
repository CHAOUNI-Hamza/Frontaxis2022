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
            Axis
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
          
      }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
