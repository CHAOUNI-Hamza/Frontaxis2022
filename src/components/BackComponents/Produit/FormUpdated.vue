<template>
<div v-if="FormEdition" class="col-md-12">
                    <!-- start form edition -->
                                                    <div class="card card-primary">
                    <div class="card-header">
                    <h3 class="card-title">Information Services</h3>
                    </div>

                    <form @submit.prevent="update(produit.id)" novalidate>
                    <div class="row">
                      <div class="col-md-6">
                            <div class="card-body">
                                  
                                  <div class="form-group">
                                      <label for="exampleInputEmail1">Title</label>
                                      <input  :class="{ error: v$.produit.title.$errors.length }" v-model="produit.title" name="produit.title" type="text" class="form-control" id="exampleInputEmail1" placeholder="Name">
                                      <div class="input-errors" v-for="error of v$.produit.title.$errors" :key="error.$uid">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                  </div>
                                   <div class="form-group">
                                      <label for="exampleInputEmail1">Description</label>
                                      <input  :class="{ error: v$.produit.description.$errors.length }" v-model="produit.description" name="produit.description" type="text" class="form-control" id="exampleInputEmail1" placeholder="Name">
                                      <div class="input-errors" v-for="error of v$.produit.description.$errors" :key="error.$uid">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                  </div>
                                   <div class="form-group">
                                      <label for="exampleInputEmail1">Social</label>
                                      <input  :class="{ error: v$.produit.social.$errors.length }" v-model="produit.social" name="produit.social" type="text" class="form-control" id="exampleInputEmail1" placeholder="Name">
                                      <div class="input-errors" v-for="error of v$.produit.social.$errors" :key="error.$uid">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                      <div class="col-md-6">
                         <div class="form-group">
                            <label for="exampleSelectBorder">Service</label>
                                  <select v-model="produit.service" class="custom-select form-control-border" id="exampleSelectBorder">
                                        <option v-for="service in services" :value="service.id" :key="service.id">{{ service.title }}</option>
                                  </select>
                            </div>
                          <div class="card-body">
                              <div class="form-group">
                                    <label for="exampleInputFile">Photo</label>
                                    <div class="input-group">
                                        <div :class="{ error_img: v$.produit.photo.$errors.length }" class="custom-file">
                                            <input  @change="onChangeLogo" name="produit.photo" type="file" class="custom-file-input" id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                        </div>
                                        <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                        </div>
                                        <div style="margin-left: 11px;" class="input-errors" v-for="error of v$.produit.photo.$errors" :key="error.$uid">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
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
//import Pagination from 'laravel-vue-pagination'

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  name: 'FormUpdated',
  props: [
      'FormEdition', 'produit', 'services'
  ],
  components: {

  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
        //data here
    }
  },
  validations () {
    return {
		 produit: {
        title: { required },
        photo: { required },
        description: { required },
        social: { required },
        service: { required },
      }
      }
    },
    watch: {
    },
  methods: {
    update(id) {
      this.$emit('update', id)
    },
    onChangeLogo(e) {
      this.$emit('onChangeLogo', e)
    },
    buttoncacherformedition() {
      this.$emit('buttoncacherformedition')
    }
    
  },
  computed: {  
       
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
