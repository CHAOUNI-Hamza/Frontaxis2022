<template>
<div v-if="FormCreated" class="col-md-12">
                                <div class="card card-primary">
                    <div class="card-header">
                    <h3 class="card-title">Information Axis</h3>
                    </div>

                    <form @submit.prevent="created()">
                    <div class="row">
                      <div class="col-md-6">
                            <div class="card-body">
                                  <div class="form-group">
                                      <label for="exampleInputEmail1">Email address</label>
                                      <input v-model="axis.email" name="axis.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                                  </div>
                                  <div class="form-group">
                                      <label for="exampleInputEmail1">Phone</label>
                                      <input v-model="axis.phone" name="axis.phone" type="text" class="form-control" id="exampleInputEmail1" placeholder="Phone">
                                  </div>
                                  <div class="form-group">
                                      <label for="exampleInputEmail1">Adresse</label>
                                      <textarea v-model="axis.address" name="axis.address" type="text" class="form-control" id="exampleInputEmail1" placeholder="Adresse"></textarea>
                                      </div>
                                  <div class="form-group">
                                      <label for="exampleInputEmail1">Description Agence</label>
                                      <textarea v-model="axis.description_agency" name="axis.description_agency" type="text" class="form-control" id="exampleInputEmail1" placeholder="Description Agence"></textarea>
                                  </div>
                                  <div class="form-group">
                                      <label for="exampleInputEmail1">Localisation</label>
                                      <input v-model="axis.localisation" name="axis.localisation" type="text" class="form-control" id="exampleInputEmail1" placeholder="Localisation ( URL )">
                                  </div>
                                  <div class="form-group">
                                      <label for="exampleInputPassword1">Social</label>
                                      <input v-model="axis.social" name="axis.social" type="text" class="form-control" id="exampleInputPassword1" placeholder="Social">
                                  </div>
                            </div>
                      </div>
                      <div class="col-md-6">
                          <div class="card-body">
                              <div class="form-group">
                                    <label for="exampleInputFile">Logo</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input @change="onChangeLogo" name="axis.logo" type="file" class="custom-file-input" id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                        </div>
                                        <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                        </div>
                                    </div>
                              </div>
                              <div class="form-group">
                                    <label for="exampleInputFile">Logo Carousel</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input @change="onChangePhotoCarousel" name="axis.photo_carousel" type="file" class="custom-file-input" id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                        </div>
                                        <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                        </div>
                                    </div>
                              </div>
                              <div class="form-group">
                                    <label for="exampleInputFile">Photo Agence</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input @change="onChangePhotoAgency" name="axis.photo_agency" type="file" class="custom-file-input" id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                        </div>
                                        <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                        </div>
                                    </div>
                              </div>
                          </div>
                      </div>
                    </div>

                    <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Created</button>
                    <button type="button" @click="buttoncacherformecreated()" class="btn btn-danger">Remove</button>
                    </div>
                    </form>

                    </div>
                              </div>
</template>

<script>
//import Pagination from 'laravel-vue-pagination'


export default {
  name: 'FormCreated',
  props: [
      'FormCreated', 'axis'
  ],
  components: {

  },
  data() {
      return {
        //data here
    }
  },
    watch: {
    },
  methods: {
      created() {
          this.$emit('created')
      },
    onChangeLogo(e) {
      this.$emit('onChangeLogo', e)
    },
    onChangePhotoCarousel(e) {
      this.$emit('onChangePhotoCarousel', e)
    },
    onChangePhotoAgency(e) {
      this.$emit('onChangePhotoAgency', e)
    },
    buttoncacherformecreated() {
        this.$emit('buttoncacherformecreated')
    }
  },
  mounted() {
    
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
</style>
