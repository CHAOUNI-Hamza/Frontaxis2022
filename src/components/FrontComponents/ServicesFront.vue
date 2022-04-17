<template>
  <div>
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>NOUS PRENONS SOIN DE VOS PROJETS AFIN QUE VOUS PUISSIEZ VOUS CONCENTRER SUR LA CROISSANCE DE VOS REVENUES.</p>
        </div>

        <div class="row">
          <div v-for="service in services" :key="service.id" class="col-xl-4 col-md-6 d-flex align-items-stretch mb-3" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box text-center">
              <h4 class="text-uppercase"><a href="#">Impression Numérique</a></h4>
              <img src="http://www.cs-creatives-cameroun.com/core/boutique/prod5ac59bce99e81.jpg" alt="" width="100%">
              <!--<div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>--> 
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ServiceFront',
  props: {
    msg: String
  },
  data() {
    return {
      url : 'api/v1/front/services'
    }
  },
  methods: {
    // get
    ...mapActions({
          'get_' : 'front/get'
      }),
      get() {
          this.get_(this.url);
      },
  },
  mounted() {
    this.get()
  },
  computed: {
    services() {
            return this.$store.getters['front/getFront'];
        },
  }
}
</script>

<style>
/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services .icon-box {
  box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 30px;
  transition: all ease-in-out 0.4s;
  background: #fff;
}
.services .icon-box .icon {
  margin-bottom: 10px;
}
.services .icon-box .icon i {
  color: #47b2e4;
  font-size: 36px;
  transition: 0.3s;
}
.services .icon-box h4 {
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 24px;
}
.services .icon-box h4 a {
  color: #37517e;
  transition: ease-in-out 0.3s;
}
.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}
.services .icon-box:hover {
  transform: translateY(-10px);
}
.services .icon-box:hover h4 a {
  color: #47b2e4;
}
</style>