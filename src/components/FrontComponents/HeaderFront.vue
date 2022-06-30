<template>
  <div>
      <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto">
        <a href="#accueil">
          <img :src="$store.state.UrlBack+axis.logo" alt="logo axis" width="100%">
        </a>
      </h1>

      <nav id="navbar" class="navbar" v-on:click="addClass" :class="{'navbar-mobile': isNavbarMobile}">
        <ul>
          <li><a class="nav-link scrollto" href="#accueil" v-bind:class="{ active: active === 'accueil' }" v-on:click="setFilter('accueil')">Accueil</a></li>
          <li><a class="nav-link scrollto" href="#agence" v-bind:class="{ active: active === 'agence' }" v-on:click="setFilter('agence')">Agence</a></li>
          <li><a class="nav-link scrollto" href="#services" v-bind:class="{ active: active === 'services' }" v-on:click="setFilter('services')">Services</a></li>
          <li><a class="nav-link scrollto" href="#produit" v-bind:class="{ active: active === 'produit' }" v-on:click="setFilter('produit')">Produits</a></li>
          <li><a class="nav-link scrollto" href="#contact" v-bind:class="{ active: active === 'contact' }" v-on:click="setFilter('contact')">Contact</a></li>
          <li><a class="getstarted scrollto" href="#agence" v-bind:class="{ active: active === 'agence' }" v-on:click="setFilter('agence')">Commencer</a></li>
        </ul>
        <i @click="showNavbarMobile" class="bi mobile-nav-toggle" v-bind:class="{ 'bi-x': isNavbarMobile == true, 'bi-list': isNavbarMobile == false }"></i>
      </nav>

    </div>
  </header>
  <!-- End Header -->
  <!-- ======= accueil Section ======= -->
  <section id="accueil" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Agence de la communication et la publicité.</h1>
          <h2>Plus de 16 ans au services</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="#agence" class="btn-get-started scrollto">Commencer</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 accueil-img" data-aos="zoom-in" data-aos-delay="200">
          <img :src="$store.state.UrlBack+axis.photo_carousel" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>

  </section>
  <!-- End accueil -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HeaderFront',
  props: {
    msg: String
  },
  data() {
    return {
      active : 'accueil',
      isNavbarMobile : false,
      url : 'api/v1/front/axis',
      axis: []
    }
  },
  methods: {
    setFilter: function(filter) {
      this.active = filter;
    },
    showNavbarMobile() {
      this.isNavbarMobile = !this.isNavbarMobile
    },
    // get axis
      async get() {
        try {
           const response = await axios.get(this.url)
          this.axis = response.data.data
         } catch (error) {
           
         }
       },
},
  mounted() {
    this.get()
  }
}
</script>

<style>
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
  background: white;
}
#header.header-scrolled, #header.header-inner-pages {
  background: rgba(40, 58, 90, 0.9);
}
#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
}
#header .logo a {
  color: #fff;
}
#header .logo img {
  width: 100%;
  max-height: 40px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 15px;
  font-weight: 500;
  color: #0395da;
  white-space: nowrap;
  transition: 0.3s;
}
.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #2e789a;
}
.navbar .getstarted, .navbar .getstarted:focus {
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 50px;
  color: #0395da;
  font-size: 14px;
  border: 2px solid #0395da;
  font-weight: 600;
}
.navbar .getstarted:hover, .navbar .getstarted:focus:hover {
  color: #fff;
  background: #31a9e1;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  font-weight: 500;
  color: #0c3c53;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #47b2e4;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}
/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #47b2e4;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}
.mobile-nav-toggle.bi-x {
  color: #fff;
}
.mobile-nav-toggle.bi-list {
  color: #47b2e4;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(40, 58, 90, 0.9);
  transition: 0.3s;
  z-index: 999;
}
.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 10px;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}
.navbar-mobile a, .navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #37517e;
}
.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
  color: #47b2e4;
}
.navbar-mobile .getstarted, .navbar-mobile .getstarted:focus {
  margin: 15px;
  color: #37517e;
}
.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}
.navbar-mobile .dropdown ul li {
  min-width: 200px;
}
.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}
.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}
.navbar-mobile .dropdown ul a:hover, .navbar-mobile .dropdown ul .active:hover, .navbar-mobile .dropdown ul li:hover > a {
  color: #47b2e4;
}
.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}
/*--------------------------------------------------------------
# accueil Section
--------------------------------------------------------------*/
#accueil {
  width: 100%;
  height: 80vh;
  background: white;
}
#accueil .container {
  padding-top: 72px;
}
#accueil h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #47b2e4;
}
#accueil h2 {
  color: rgb(71 178 228);
  margin-bottom: 50px;
  font-size: 24px;
}
#accueil .btn-get-started {
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px 11px 28px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px 0 0 0;
  color: #fff;
  background: #47b2e4;
}
#accueil .btn-get-started:hover {
  background: #209dd8;
}
#accueil .btn-watch-video {
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  margin: 10px 0 0 25px;
  color: #fff;
  line-height: 1;
}
#accueil .btn-watch-video i {
  line-height: 0;
  color: #fff;
  font-size: 32px;
  transition: 0.3s;
  margin-right: 8px;
}
#accueil .btn-watch-video:hover i {
  color: #47b2e4;
}
#accueil .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}
@media (max-width: 991px) {
  #accueil {
    height: 75vh;
    text-align: center;
  }
  #accueil .animated {
    -webkit-animation: none;
    animation: none;
  }
  #accueil .accueil-img {
    text-align: center;
  }
  #accueil .accueil-img img {
    width: 50%;
  }
}
@media (max-width: 768px) {
  #accueil h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #accueil h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  #accueil .accueil-img img {
    width: 70%;
  }
}
@media (max-width: 575px) {
  #accueil .accueil-img img {
    width: 80%;
  }
  #accueil .btn-get-started {
    font-size: 16px;
    padding: 10px 24px 11px 24px;
  }
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>

