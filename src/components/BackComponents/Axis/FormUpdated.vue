<template>
<div v-if="FormEdition" class="col-md-12">
                    <!-- start form edition -->
                    <div class="card card-primary">
                        <div class="card-header">
                        <h3 class="card-title">Information Axis</h3>
                        </div>

                    <form @submit.prevent="update(axis.id)">
                      <div class="row">
                          <div class="col-md-6">
                            <div class="card-body">
                            <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input :class="{ error: v$.axis.email.$errors.length }" v-model="axis.email" name="axis.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                                <div class="input-errors" v-for="error of v$.axis.email.$errors" :key="error.$uid">
                                  <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            <div class="form-group">
                            <label for="exampleInputEmail1">Phone</label>
                            <input :class="{ error: v$.axis.phone.$errors.length }" v-model="axis.phone" name="axis.phone" type="text" class="form-control" id="exampleInputEmail1" placeholder="Phone">
                            <div class="input-errors" v-for="error of v$.axis.phone.$errors" :key="error.$uid">
                                  <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            <div class="form-group">
                            <label for="exampleInputEmail1">Adresse</label>
                            <textarea :class="{ error: v$.axis.address.$errors.length }" v-model="axis.address" name="axis.address" type="text" class="form-control" id="exampleInputEmail1" placeholder="Adresse"></textarea>
                            <div class="input-errors" v-for="error of v$.axis.address.$errors" :key="error.$uid">
                                  <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            <div class="form-group">
                            <label for="exampleInputEmail1">Description Agence</label>
                            <textarea :class="{ error: v$.axis.description_agency.$errors.length }" v-model="axis.description_agency" name="axis.description_agency" type="text" class="form-control" id="exampleInputEmail1" placeholder="Description Agence"></textarea>
                            <div class="input-errors" v-for="error of v$.axis.description_agency.$errors" :key="error.$uid">
                                  <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            <div class="form-group">
                            <label for="exampleInputEmail1">Localisation</label>
                            <input :class="{ error: v$.axis.localisation.$errors.length }" v-model="axis.localisation" name="axis.localisation" type="text" class="form-control" id="exampleInputEmail1" placeholder="Localisation ( URL )">
                            <div class="input-errors" v-for="error of v$.axis.localisation.$errors" :key="error.$uid">
                                  <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            <div class="form-group">
                            <label for="exampleInputPassword1">Social</label>
                            <input :class="{ error: v$.axis.social.$errors.length }" v-model="axis.social" name="axis.social" type="text" class="form-control" id="exampleInputPassword1" placeholder="Social">
                            <div class="input-errors" v-for="error of v$.axis.social.$errors" :key="error.$uid">
                                  <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="card-body">
                            <div class="form-group">
                              <label for="exampleInputFile">Logo</label>
                              <div class="input-group">
                              <div class="custom-file">
                              <input @change="onChangeLogo" @input="selectImgFile" ref="fileInput" name="axis.logo" type="file" class="custom-file-input" id="exampleInputFile">
                              <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                              </div>
                              <div class="input-group-append">
                              <span class="input-group-text">Upload</span>
                              </div>
                              <div
                                class="previewBlock"
                                v-if="filePreview"
                                :style="{ 'background-image': `url(${filePreview})` }">
                              </div>
                              </div>
                              <div class="input-errors" v-for="error of v$.axis.logo.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputFile">Logo Carousel</label>
                              <div class="input-group">
                              <div class="custom-file">
                              <input @change="onChangePhotoCarousel" @input="selectImgFilecarousel" ref="fileInputcarousel" name="axis.photo_carousel" type="file" class="custom-file-input" id="exampleInputFile">
                              <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                              </div>
                              <div class="input-group-append">
                              <span class="input-group-text">Upload</span>
                              </div>
                              <div
                                class="previewBlock"
                                v-if="filePreviewcarousel"
                                :style="{ 'background-image': `url(${filePreviewcarousel})` }">
                              </div>
                              </div>
                              <div class="input-errors" v-for="error of v$.axis.photo_carousel.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputFile">Photo Agence</label>
                              <div class="input-group">
                              <div class="custom-file">
                              <input @change="onChangePhotoAgency" @input="selectImgFileagence" ref="fileInputagence" name="axis.photo_agency" type="file" class="custom-file-input" id="exampleInputFile">
                              <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                              </div>
                              <div class="input-group-append">
                              <span class="input-group-text">Upload</span>
                              </div>
                              <div
                                class="previewBlock"
                                v-if="filePreviewagence"
                                :style="{ 'background-image': `url(${filePreviewagence})` }">
                              </div>
                              </div>
                              <div class="input-errors" v-for="error of v$.axis.photo_agency.$errors" :key="error.$uid">
                                    <div class="error-msg">{{ error.$message }}</div>
                                  </div>
                            </div>
                            </div>
                          </div>
                      </div>

                    <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Update</button>
                    <button type="button" @click="buttoncacherformedition()" class="btn btn-danger">Remove</button>
                    </div>
                    </form>
                    </div>
                    <!-- end form edition -->
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'FormUpdated',
  props: [
      'FormEdition', 'axis'
  ],
  components: {

  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
        filePreview: null,
        filePreviewcarousel: null,
        filePreviewagence: null
    }
  },
  validations () {
    return {
		 axis: {
        logo: { required },
        photo_carousel: { required },
        description_agency: { required },
        photo_agency: { required },
        address: { required },
        phone: { required },
        localisation: { required },
        social: { required },
        email: { required, email },
      }
      }
    },
    watch: {
    },
  methods: {
    // fucntion pour show logo 
          selectImgFile () {
            let fileInput = this.$refs.fileInput
            let imgFile = fileInput.files

            if (imgFile && imgFile[0]) {
              let reader = new FileReader
              reader.onload = e => {
                this.filePreview = e.target.result
              }
              reader.readAsDataURL(imgFile[0])
              this.$emit('fileInput', imgFile[0])
            }},
    // fucntion pour show photo carousel
            selectImgFilecarousel () {
            let fileInputcarousel = this.$refs.fileInputcarousel
            let imgFile = fileInputcarousel.files

            if (imgFile && imgFile[0]) {
              let reader = new FileReader
              reader.onload = e => {
                this.filePreviewcarousel = e.target.result
              }
              reader.readAsDataURL(imgFile[0])
              this.$emit('fileInputcarousel', imgFile[0])
            }},
    // fucntion pour show photo Agence
            selectImgFileagence () {
            let fileInputagence = this.$refs.fileInputagence
            let imgFile = fileInputagence.files

            if (imgFile && imgFile[0]) {
              let reader = new FileReader
              reader.onload = e => {
                this.filePreviewagence = e.target.result
              }
              reader.readAsDataURL(imgFile[0])
              this.$emit('fileInputagence', imgFile[0])
            }},
    // Update
    update(id) {
      this.v$.$validate()
          if(!this.v$.$invalid) {
               this.$emit('update', id)
          }
    },
    // onChangeLogo
    onChangeLogo(e) {
      console.log(e.target.result)
      this.$emit('onChangeLogo', e)
    },
    // onChangePhotoCarousel
    onChangePhotoCarousel(e) {
      this.$emit('onChangePhotoCarousel', e)
    },
    // onChangePhotoAgency
    onChangePhotoAgency(e) {
      this.$emit('onChangePhotoAgency', e)
    },
    // buttoncacherformedition
    buttoncacherformedition() {
      this.$emit('buttoncacherformedition')
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
.card .form-group img {
  width: 100%;
  margin-top: 20px;
}
.error {
	border-bottom: 2px solid #ff00009e;
}
.error-msg {
    color: #ff00009e;
}
.previewBlock {
  display: block;
  cursor: pointer;
  width: 100%;;
  height: 280px;        
  margin: 20px 0 20px 0;
  background-size: cover;
}
</style>
