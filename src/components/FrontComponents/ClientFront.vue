<template>
  <div>
    <section id="clients" class="clients section-bg">
      <div class="container">

        <div class="row" data-aos="zoom-in">

          <div v-for="client in clients" :key="client.id" class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img :src="$store.state.UrlBack+client.photo" class="img-fluid" alt="">
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ClientFront',
  props: {
    msg: String
  },
  data() {
    return {
      url : 'api/v1/front/clients'
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
    clients() {
            return this.$store.getters['front/getFront'];
        },
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
