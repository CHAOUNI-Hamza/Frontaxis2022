<template>
  <div>
    <!-- ======= Header ======= -->
    <HeaderFront />
    <!-- End Header -->

  <main id="main">

    <!-- ======= Clients Section ======= -->
    <ClientFront />
    <!-- End Cliens Section -->

    <!-- ======= About Us Section ======= -->
    <PresentationFront />
    <!-- End About Us Section -->

    <!-- ======= Portfolio Section ======= -->
    <ServicesFront />
    <!-- End Portfolio Section -->

    
    <!-- ======= Portfolio Section ======= -->
    <ProduitFront />
    <!-- End Portfolio Section -->

    <!-- ======= Team Section ======= -->
    <!--<TeamFront />-->
    <!-- End Team Section -->

    <!-- ======= Pricing Section ======= -->
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>POURQUOI COLLABORER AVEC NOUS ?</h2>
        </div>

        <div class="row pt-0">

          <div class="col-lg-4 text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="box featured">
              <h3>CRÉATIVITÉ</h3>
              <img src="https://www.axisdesign.ma/images/carousel/15.png" alt="" width="80%">
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0 text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="box featured">
              <h3>INNOVATION</h3>
              <img src="https://www.axisdesign.ma/images/carousel/12.png" alt="" width="80%">
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0 text-center" data-aos="fade-up" data-aos-delay="300">
            <div class="box featured">
              <h3>PROXIMITÉ</h3>
              <img src="https://www.axisdesign.ma/images/carousel/13.png" alt="" width="80%">
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Pricing Section -->

    <!-- ======= Contact Section ======= -->
    <ContactFront />
    <!-- End Contact Section -->

  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <FooterFront />
  <!-- End Footer -->


  <!--<div id="preloader"></div>-->
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderFront from '../components/FrontComponents/HeaderFront.vue'
import FooterFront from '../components/FrontComponents/FooterFront.vue'
import ContactFront from '../components/FrontComponents/ContactFront.vue'
import ServicesFront from '../components/FrontComponents/ServicesFront.vue'
import TeamFront from '../components/FrontComponents/TeamFront.vue'
import ClientFront from '../components/FrontComponents/ClientFront.vue'
import ProduitFront from '../components/FrontComponents/ProduitFront.vue'
import PresentationFront from '../components/FrontComponents/PresentationFront.vue'
export default {
  name: 'Home',
  components: {
    HeaderFront,
    FooterFront,
    ContactFront,
    ServicesFront,
    TeamFront,
    ClientFront,
    ProduitFront,
    PresentationFront,
  }
}
</script>
