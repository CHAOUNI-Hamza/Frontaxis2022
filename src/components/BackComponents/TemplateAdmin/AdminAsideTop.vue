<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <!--<img src="http://localhost:8080/img/logo.6e103bb3.svg" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">-->
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="http://localhost:8080/img/logo.6e103bb3.svg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ user.name }}</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
            <router-link :to="{ name: 'Dashboard'}" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'Axis'}" class="nav-link">
                  <i class="fa fa-cog nav-icon" aria-hidden="true"></i>
                  <p>Axis</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Client'}" class="nav-link">
                  <i class="fa fa-users nav-icon" aria-hidden="true"></i>
                  <p>Clients</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Companie'}" class="nav-link">
                  <i class="fa fa-copyright nav-icon" aria-hidden="true"></i>
                  <p>Companies</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Contact'}" class="nav-link">
                  <i class="fa fa-commenting nav-icon" aria-hidden="true"></i>
                  <p>Contacts</p>
                </router-link>
              </li>
              <!--<li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Equipes</p>
                </a>
              </li>-->
              <li class="nav-item">
                <router-link :to="{ name: 'Produit'}" class="nav-link">
                  <i class="fa fa-paragraph nav-icon" aria-hidden="true"></i>
                  <p>Produits</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Service'}" class="nav-link">
                  <i class="fa fa-server nav-icon" aria-hidden="true"></i>
                  <p>Services</p>
                </router-link>
              </li>
            </ul>
          </li>
          <!--<li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Simple Link
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li>-->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AdminAsideTop',
  props: {
    msg: String
  },
  data() {
      return {
         
      }
  },
  methods: {

  },
  computed: {
        ...mapGetters({
            'authentication': 'auth/authentication',
            'user': 'auth/user'
        })
    }
}
</script>

<style scoped>
.router-link-active {
  background-color: #007bff;
    color: #fff;
}
</style>
