<template>
  <div>
    <section id="clients" class="clients section-bg">
      <div class="container">

        <div class="row" data-aos="zoom-in">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Lear_Corporation_logo.svg/1200px-Lear_Corporation_logo.svg.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://seeklogo.com/images/M/ministere-de-la-sante-maroc-logo-4E2EDBAA10-seeklogo.com.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Logo_inpt.PNG" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/9/90/Logo_ICPC.svg/1200px-Logo_ICPC.svg.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://www.sfta.org/img/logo.svg" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="https://g-concours.um5.ac.ma/candidat/img/logo_B.gif" class="img-fluid" alt="">
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ClientFront',
  props: {
    msg: String
  }
}
</script>

<style>
/*--------------------------------------------------------------
# Clients
--------------------------------------------------------------*/
.clients {
  padding: 12px 0;
  text-align: center;
}
.clients img {
  max-width: 45%;
  transition: all 0.4s ease-in-out;
  display: inline-block;
  padding: 15px 0;
  filter: grayscale(100);
}
.clients img:hover {
  filter: none;
  transform: scale(1.5);
}
@media (max-width: 768px) {
  .clients img {
    max-width: 40%;
  }
}
</style>
