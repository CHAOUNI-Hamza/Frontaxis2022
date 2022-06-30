<template>
  <div>
    <section id="agence" class="agence">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>AGENCE</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <p>
              {{ axis.description_agency }}
            </p>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 text-center">
            <div class="img-agence">
              <img :src="$store.state.UrlBack+axis.photo_agency" alt="" width="70%">
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PresentationFront',
  props: {
    msg: String
  },
  data() {
    return {
      url : 'api/v1/front/axis',
      axis: []
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
  },
  mounted() {
    this.get()
  },
  computed: {
  }
}
</script>

<style >
/*--------------------------------------------------------------
# agence Us
--------------------------------------------------------------*/
.agence .content h3 {
  font-weight: 600;
  font-size: 26px;
}
.agence .content ul {
  list-style: none;
  padding: 0;
}
.agence .content ul li {
  padding-left: 28px;
  position: relative;
}
.agence .content ul li + li {
  margin-top: 10px;
}
.agence .content ul i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: #47b2e4;
  line-height: 1;
}
.agence p {
    text-align: justify;
    line-height: 31px;
}
.agence .content p:last-child {
  margin-bottom: 0;
}
.agence .content .btn-learn-more {
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
.agence .content .btn-learn-more:hover {
  background: #47b2e4;
  color: #fff;
  text-decoration: none;
}
.agence .img-agence img {
  width: 70%;
}
</style>