<template>
  <div>
      <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h4>Rejoignez notre newsletter</h4>
            <!--<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>-->
            <form>
              <input type="email" name="email"><input type="submit" value="S'abonner">
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>AXIS DESIGN</h3>
            <p>
              {{ axis.address }}<br>
              <strong>Gsm :</strong><br>{{ axis.phone }}
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Liens utiles</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#hero">Accueil</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#about">Agence</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
              <!--<li><i class="bx bx-chevron-right"></i> <a href="#portfolio">Equipe</a></li>-->
              <li><i class="bx bx-chevron-right"></i> <a href="#contact">Contact</a></li>
              <!--<li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>-->
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Nos services</h4>
            <ul>
              <li v-for="service in services" :key="service.id"><i class="bx bx-chevron-right"></i> <a href="#">{{ service.title }}</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Nos réseaux sociaux</h4>
            <p>Notre équipe met tout en œuvre afin de répondre à vos attentes avec rigueur, professionnalisme et écoute .</p>
            <div class="social-links mt-3">
              <!--<a :href="'https://www.facebook.com/' + axis.social.twitter" target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a :href="'https://www.facebook.com/' + axis.social.facebook" target="_blank" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a :href="'https://www.facebook.com/' + axis.social.instagram" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a :href="'https://www.facebook.com/' + axis.social.skype" target="_blank" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a :href="'https://www.facebook.com/' + axis.social.linkedin" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>-->
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>Axis Desing</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ -->
        Designed by <a href="https://www.linkedin.com/in/hamza-chaouni-bb26831a9/">Hamza CHAOUNI</a>
      </div>
    </div>
  </footer><!-- End Footer -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FooterFront',
  props: {
    msg: String
  },
  data() {
    return {
      url : 'api/v1/front/axis',
      urlService: 'api/v1/front/services',
      axis: [],
      services: []
    }
  },
  methods: {
    // get axis
      async get() {
        try {
           const response = await axios.get(this.url)
          this.axis = response.data.data
         } catch (error) {
           
         }
       },
    // get Services
      async getService() {
        try {
           const response = await axios.get(this.urlService)
          this.services = response.data.data
         } catch (error) {
           
         }
       },
  },
  mounted() {
    this.get(),
    this.getService()
  },
  computed: {
  }
}
</script>

<style>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  font-size: 14px;
  background: #47b2e4;
}
#footer .footer-newsletter {
  padding: 50px 0;
  background: #f3f5fa;
  text-align: center;
  font-size: 15px;
  color: #444444;
}
#footer .footer-newsletter h4 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  color: black;
}
#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
  text-align: left;
}
#footer .footer-newsletter form input[type=email] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}
#footer .footer-newsletter form input[type=submit] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  background: #47b2e4;
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
#footer .footer-newsletter form input[type=submit]:hover {
  background: #209dd8;
}
#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #fff;
}
#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}
#footer .footer-top .footer-contact h3 {
  font-size: 28px;
  margin: 0 0 10px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 600;
  color: black;
}
#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Jost", sans-serif;
  color: #5e5e5e;
}
#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: black;
  position: relative;
  padding-bottom: 12px;
}
#footer .footer-top .footer-links {
  margin-bottom: 30px;
}
#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #47b2e4;
  font-size: 18px;
  line-height: 1;
}
#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}
#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}
#footer .footer-top .footer-links ul a {
  color: #777777;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}
#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: #47b2e4;
}
#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #47b2e4;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
#footer .footer-top .social-links a:hover {
  background: #209dd8;
  color: #fff;
  text-decoration: none;
}
#footer .footer-bottom {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
}
.footer-bottom a {
  color: #00022b;
}
#footer .copyright {
  float: left;
}
#footer .credits {
  float: right;
  font-size: 13px;
}
#footer .credits a {
  transition: 0.3s;
}
@media (max-width: 768px) {
  #footer .footer-bottom {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  #footer .copyright, #footer .credits {
    text-align: center;
    float: none;
  }
  #footer .credits {
    padding-top: 4px;
  }
}
</style>
