<template>
  <div>
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>AGENCE</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <p>
              Axis Design est une agence de communication à Rabat - Salé créée depuis 2006 par des professionnels issus d’une formation effervescente et ayant un parcours divergents mais disposant d’une addiction commune pour le marketing et notamment pour l’image. Créative, Audacieuse et très Engagée, Axis Design est l’agence de communication recommandée pour tout projet de création de marque, d’identité visuelle, d’identité rédactionnelle, de signalétique… Nos résultats en tant que partenaire et conseiller des marques les plus percutantes et pertinentes au niveau de la ville de Rabat - Salé en sont la preuve vivante.
            </p>
            <!--<ul>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>-->
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 text-center">
            <!--<p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" class="btn-learn-more">Learn More</a>-->
            <div class="img-about">
              <img src="@/assets/32012.jpg" alt="" width="70%">
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PresentationFront',
  props: {
    msg: String
  }
}
</script>

<style >
/*--------------------------------------------------------------
# About Us
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}
.about .content ul {
  list-style: none;
  padding: 0;
}
.about .content ul li {
  padding-left: 28px;
  position: relative;
}
.about .content ul li + li {
  margin-top: 10px;
}
.about .content ul i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: #47b2e4;
  line-height: 1;
}
.about p {
    text-align: justify;
    line-height: 31px;
}
.about .content p:last-child {
  margin-bottom: 0;
}
.about .content .btn-learn-more {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 4px;
  transition: 0.3s;
  line-height: 1;
  color: #47b2e4;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid #47b2e4;
}
.about .content .btn-learn-more:hover {
  background: #47b2e4;
  color: #fff;
  text-decoration: none;
}
</style>