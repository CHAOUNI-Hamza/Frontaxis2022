<template>
<div>
    <section id="produit" class="produit">
     <div class="container" data-aos="fade-up">
       <div class="section-title">
          <h2>PRODUITS</h2>
         
        </div>
              <ul>
                    <li @click="dataFilter" class="list" data-filter="all" v-bind:class="{ active: nDFilter === 'all' }">All</li>
                    <li @click="dataFilter" class="list" v-for="service in services" :key="service.id" :data-filter="service.slug" v-bind:class="{ active: nDFilter === service.slug }">{{ service.title.toUpperCase() }}</li>
            </ul>
            <div class="product" data-aos="fade-up" data-aos-delay="200">
                  <div v-for="produit in produits" :key="produit.id" class="itemBox" :data-item="produit.service" v-bind:class="[nDFilter == produit.service || nDFilter == 'all' ? 'active' : 'hideproduit']">
                    <img :src="$store.state.UrlBack+produit.photo" alt="">
                  </div>
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
      nDFilter : 'all',
      urlService : 'api/v1/front/services',
      urlProduit : 'api/v1/front/produits',
      services: [],
      produits: [],
    }
  },
  methods: {
    // get list data filter
    dataFilter(event) {
      this.nDFilter = event.target.getAttribute('data-filter');
    },
    // get Services
      async getServices() {
        try {
           const response = await axios.get(this.urlService)
          this.services = response.data.data
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
# produit
--------------------------------------------------------------*/
.produit .product .hideproduit {
  display: none;
}
.produit .product .active {
  display: block;
}
.produit ul .active {
  color: #fdc134;
}
.produit section {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 40px auto;
}
.produit ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding: 0;
    margin: 0 0 35px 0;
    list-style: none;
    text-align: center;
}
.produit ul li {
    list-style: none;
    cursor: pointer;
    margin: 0 5px 5px 0;
    display: inline-block;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #444444;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
}
.produit .product {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.produit .product .itemBox {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 5px;
    transition: 0.3s;
    overflow: hidden;
    border-radius: 8px;
    z-index: 1;
}
.produit .product .itemBox:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5); 
  z-index: 1000;
}

.produit .product .itemBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
}
</style>