<template>
  <div>
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>NOUS PRENONS SOIN DE VOS PROJETS AFIN QUE VOUS PUISSIEZ VOUS CONCENTRER SUR LA CROISSANCE DE VOS REVENUES.</p>
        </div>

        <div class="row">
          <div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-3" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box text-center">
              <h4 class="text-uppercase"><a href="#">Impression Numérique</a></h4>
              <img src="http://www.cs-creatives-cameroun.com/core/boutique/prod5ac59bce99e81.jpg" alt="" width="100%">
              <!--<div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>--> 
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 mb-3" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box text-center">
              <h4 class="text-uppercase"><a href="#">Impression Offset</a></h4>
              <img src="https://www.icb-imprimerie.com/wp-content/uploads/2015/10/SM52-4_V2.jpg" alt="" width="100%">
              <!--<div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>-->
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 mb-3" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box text-center">
              <h4 class="text-uppercase"><a href="#">Conception Graphique</a></h4>
              <img src="https://wassla.net/static/uploads/2018/06/Graphic-Design-PNG-Clipart.png" alt="" width="100%">
              <!--<div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>-->
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 mb-3" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box text-center">
              <h4 class="text-uppercase"><a href="#">Management Visuel</a></h4>
              <img src="https://visionstrategique.com/wp-content/uploads/2020/12/Management-visuel-7.jpg" alt="" width="100%">
              <!--<div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>-->
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 mb-3" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box text-center">
              <h4 class="text-uppercase"><a href="#">EVÉNEMENTIELLE ET AUDIOVISUELLE</a></h4>
              <img src="https://www.krd-audiovisuel.fr/_next/static/images/evenement-hybride-krd-audiovisuel-81c00da479b6b9f209a8e0b04e01d9af.png" alt="" width="100%">
              <!--<div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>-->
            </div>
          </div>

          <div class="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 mb-3" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box text-center">
              <h4 class="text-uppercase"><a href="#">site web</a></h4>
              <img src="https://votre-site-en-1ere-page.fr/wp-content/uploads/sites/3/2019/09/Creation-de-site-internet-a-Paris-1-AdobeStock_208104460-480x343.jpeg" alt="" width="100%">
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
export default {
  name: 'ServicesFront',
  props: {
    msg: String
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