<template>
<div>
































<section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>PRODUITS</h2>
          <!--<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint cons
            ectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>-->
        </div>

        <ul id="portfolio-flters" class="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <li class="filter-active">All</li>
          <li v-for="service in services" :key="service.id" @click="filtering(service.title)">{{ service.title }}</li>
        </ul>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          
          <span v-for="produit in produits" :key="produit.id">
            <div v-if="filter == produit.service" class="col-lg-4 col-md-6 portfolio-item" >
                      <div >
                        <img src="https://covervault.com/wp-content/uploads/2018/07/093-5.5x8.5-Front-and-Back-Paperback-Book-Mockup_Prev1.jpg" alt="">
                      </div>
                      <!--<div class="portfolio-img"><img src="https://covervault.com/wp-content/uploads/2018/07/093-5.5x8.5-Front-and-Back-Paperback-Book-Mockup_Prev1.jpg" class="img-fluid" alt=""></div>
                    <div class="portfolio-info">
                        <h4>{{ produit.title }}</h4>
                        <p>{{ produit.service }}</p>
                        <a href="#" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                        <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                      </div>-->
          </div>
          </span>

        </div>

      </div>

    </section>
</div>

</template>

<script>

import axios from 'axios';
export default {
  name: 'ProduitFront',
  props: {
    msg: String
  },
  data() {
    return {
      urlService : 'api/v1/front/services',
      urlProduit : 'api/v1/front/produits',
      services: [],
      produits: [],
      filter: 'all',
      currentFilter: 'ALL',
		projects: [
			{title: "Artwork", image: "https://picsum.photos/g/200?image=122", category: 'ART'},
			{title: "Charcoal", image: "https://picsum.photos/g/200?image=116", category: 'ART'},
			{title: "Sketching", image: "https://picsum.photos/g/200?image=121", category: 'DOODLES'},
			{title: "Acrillic", image: "https://picsum.photos/g/200?image=133", category: 'WORKSHOPS'},
			{title: "Pencil", image: "https://picsum.photos/g/200?image=134", category: 'DOODLES'},
			{title: "Pen", image: "https://picsum.photos/g/200?image=115", category: 'ART'},
			{title: "Inking", image: "https://picsum.photos/g/200", category: 'WORKSHOPS'},
		]
    }
  },
  methods: {
    setFilter: function(filter) {
			this.currentFilter = filter;
		},
    filtering(test) {
     
      this.filter = test
       console.log(this.filter)
    },
    // get Services
      async getServices() {
        try {
           const response = await axios.get(this.urlService)
          this.services = response.data.data
          this.services
         } catch (error) {
           
         }
       },
       // get Produits
      async getProduits() {
        try {
           const response = await axios.get(this.urlProduit)
          this.produits = response.data.data
         } catch (error) {
           
         }
       },

  },
  mounted() {
    this.getServices()
    this.getProduits()
  },
  computed: {

  }
}
</script>

<style>
/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio #portfolio-flters {
  list-style: none;
  margin-bottom: 20px;
}
.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  margin: 10px 5px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  color: #444444;
  transition: all 0.3s;
  padding: 8px 20px;
  border-radius: 50px;
  font-family: "Poppins", sans-serif;
}
.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
  background: #47b2e4;
  color: #fff;
}
.portfolio .portfolio-item {
  margin-bottom: 30px;
}
.portfolio .portfolio-item .portfolio-img {
  overflow: hidden;
}
.portfolio .portfolio-item .portfolio-img img {
  transition: all 0.6s;
}
.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 15px;
  bottom: 0;
  z-index: 3;
  right: 15px;
  transition: all 0.3s;
  background: #47b2e4bf;
  padding: 10px 15px;
}
.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0px;
}
.portfolio .portfolio-item .portfolio-info p {
  color: #f9fcfe;
  font-size: 14px;
  margin-bottom: 0;
}
.portfolio .portfolio-item .portfolio-info .preview-link, .portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 40px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #fff;
  transition: 0.3s;
}
.portfolio .portfolio-item .portfolio-info .preview-link:hover, .portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #47b2e4;
}
.portfolio .portfolio-item .portfolio-info .details-link {
  right: 10px;
}
.portfolio .portfolio-item:hover .portfolio-img img {
  transform: scale(1.15);
}
.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 40px;
}
.portfolio-details .portfolio-details-slider img {
  width: 100%;
}
.portfolio-details .portfolio-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}
.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #47b2e4;
}
.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #47b2e4;
}
.portfolio-details .portfolio-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(55, 81, 126, 0.08);
}
.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}
.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}
.portfolio-details .portfolio-description {
  padding-top: 30px;
}
.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}
.portfolio-details .portfolio-description p {
  padding: 0;
}














.title-container {
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

.title {
	font-family: 'Dawning of a New Day', cursive;
	font-size:30pt;
	font-weight:normal;
}

.project-title {
font-size:16pt	
}

.filter {
	font-family:arial;
	padding: 6px 6px;
	cursor:pointer;
	border-radius: 6px;
	transition: all 0.35s;
}

.filter.active {
	box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
	background:lightgray;
} 

.projects {
	margin-bottom:50px;
	margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.projects-enter {
	transform: scale(0.5) translatey(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}

.circle {
	text-align:center;
	position:absolute;
	bottom:-38px;
	left:40px;
	width:100px;
	height:100px;
	border-radius:50px;
/* 	border:1px solid black; */
	display:flex;
	box-shadow: 0px -4px 3px 0px #494d3257;
	justify-content:center;
	align-items:center;
	background-color:#fff;
/* 	box-shadow:0px -3px 3px #484848a6; */
}

.project {
	transition: all .35s ease-in-out;
	margin:10px;
	box-shadow:0px 2px 8px lightgrey;
	border-radius:3px;
	width:180px;
	height:200px;
	display:flex;
	flex-direction:column;
	align-items:center;
}

.project-image-wrapper {
	position:relative;
}

.gradient-overlay {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:150px;
	opacity:0.09;
	background: 
		linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
		linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
	border-bottom-left-radius:10px;
	border-bottom-right-radius:10px;
	border-top-left-radius:3px;
	border-top-right-radius:3px;
}

.project-image {
	width:100%;
	height:150px;
	border-bottom-left-radius:5px;
	border-bottom-right-radius:5px;
	border-top-left-radius:3px;
	border-top-right-radius:3px;
}
</style>

