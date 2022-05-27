<template>

<div class="container-fluid" v-if="TableListe">
<div class="row">
<div class="col-12">

      <div class="invoice p-3 mb-3">

            <div class="row">
                  <div class="col-12">
                  <h4>
                  <i class="fas fa-globe"></i> Information Axis
                  </h4>
                  </div>

            </div>

            <div class="row invoice-info">
                  <div class="col-sm-4 invoice-col">

                        <address>
                        <strong>Address :</strong><br>
                        {{ axiss.address }}<br>
                        </address>
                        <strong>Email :</strong><br>
                        {{ axiss.email }}<br><br>

                        <strong>Phone :</strong><br>
                        {{ axiss.phone }}<br><br>

                        <!--<strong>Social :</strong><br>
                        Fax : {{ axiss.social.Fax }}<br>
                        Fix : {{ axiss.social.Fix }}<br>
                        Gsm : {{ axiss.social.Gsm }}<br>
                        Tél : {{ axiss.social.Tel }}<br>
                        Wathssap : {{ axiss.social.wathssap }}<br>
                        Facebook : {{ axiss.social.Facebook }}<br>
                        Twitter : {{ axiss.social.Twitter }}<br>
                        Linkedin : {{ axiss.social.Linkedin }}<br>
                        Instagram : {{ axiss.social.instagram }}<br>
                        Twitter : {{ axiss.social.twitter }}<br>-->
                  </div>

                  <div class="col-sm-4 invoice-col">

                        <strong>Logo</strong><br><br>
                        <img :src="$store.state.UrlBack+axiss.logo" alt=""><br><br>

                        <strong>Photo Carousel</strong><br><br>
                        <img :src="$store.state.UrlBack+axiss.photo_carousel" alt=""><br>
                  </div>

                  <div class="col-sm-4 invoice-col">
                        <strong>Photo Agency</strong><br><br>
                        <img :src="$store.state.UrlBack+axiss.photo_agency" alt="">
                  </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                  <button @click="edit(axiss.id)" class="btn btn-success"><i class="fa fa-pencil-square"></i></button>
                  <!--<button @click="deleted(axiss.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button>-->
              </div>
            </div>

      </div>



</div>

</div>
</div>
</template>

<script>


export default {
  name: 'TableListe',
  props: [
      'axiss', 'TableListe'
  ],
  components: {
    
  },
  data() {
    return {
        
    }
  },
    watch: {
    },
  methods: {
    deleted(id) {
      this.$emit('deletee', id)
    },
    edit(id) {
      this.$emit('edit', id)
    },
    get() {
      this.$emit('get')
    },
    modalimg(url) {
      Swal.fire({
        //title: 'Sweet!',
        //text: 'Modal with a custom image.',
        imageUrl: url,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
    
  },
  mounted() {
    console.log(this.axiss)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper .content .btn {
    margin-bottom: 20px;
    margin-left: 20px;
}
.wrapper .table img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
.wrapper .content .table .btn {
    width: 70%;
    margin-bottom: 20px;
}
img {
  width: 80%;
}
</style>
