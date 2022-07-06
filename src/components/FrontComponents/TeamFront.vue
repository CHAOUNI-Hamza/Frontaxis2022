<template>
  <div>
      <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>ÉQUIPE</h2>
          <p>Notre communauté est constituée de véritables experts partageant les valeurs d’ÉLÉMENTS GROUPE : alliant créativité et résultats.</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src="https://cdn2.vectorstock.com/i/1000x1000/31/56/young-man-vector-553156.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Abdelhafid MOUKRIME</h4>
                <span>Directeur Général</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div class="pic"><img src="https://cdn2.vectorstock.com/i/1000x1000/31/56/young-man-vector-553156.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Imane CHERAIBI</h4>
                <span>Assistant</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div class="pic"><img src="https://cdn2.vectorstock.com/i/1000x1000/31/56/young-man-vector-553156.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Hamza CHAOUNI</h4>
                <span>Designer</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src="https://cdn2.vectorstock.com/i/1000x1000/31/56/young-man-vector-553156.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Adil MAJHOUL</h4>
                <span>Conducteur</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TeamFront',
  props: {
    msg: String
  }
}
</script>

<style>
/*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
.team .member {
  position: relative;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 5px;
  background: #fff;
  transition: 0.5s;
}
.team .member .pic {
  overflow: hidden;
  width: 180px;
  border-radius: 50%;
}
.team .member .pic img {
  transition: ease-in-out 0.3s;
}
.team .member:hover {
  transform: translateY(-10px);
}
.team .member .member-info {
  padding-left: 30px;
}
.team .member h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #47b2e4;
}
.team .member span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}
.team .member span::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #cbd6e9;
  bottom: 0;
  left: 0;
}
.team .member p {
  margin: 10px 0 0 0;
  font-size: 14px;
}
.team .member .social {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.team .member .social a {
  transition: ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: #eff2f8;
}
.team .member .social a i {
  color: #47b2e4;
  font-size: 16px;
  margin: 0 2px;
}
.team .member .social a:hover {
  background: #47b2e4;
}
.team .member .social a:hover i {
  color: #fff;
}
.team .member .social a + a {
  margin-left: 8px;
}

</style>