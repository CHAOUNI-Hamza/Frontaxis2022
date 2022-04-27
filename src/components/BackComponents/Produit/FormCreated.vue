<template>
<div v-if="FormCreated" class="col-md-12">
                                <div class="card card-primary">
                    <div class="card-header">
                    <h3 class="card-title">Information Services</h3>
                    </div>

                    <form @submit.prevent="created()" novalidate>
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
                                  <select v-model="produit.service_id" class="custom-select form-control-border" id="exampleSelectBorder">
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
                    <button type="submit" class="btn btn-primary">Created</button>
                    <button type="button" @click="buttoncacherformecreated()" class="btn btn-danger">Remove</button>
                    </div>
                    </form>

                    </div>
                              </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'FormCreated',
  props: [
      'FormCreated', 'produit', 'services'
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
        service_id: { required },
      }
      }
    },
    watch: {
    },
  methods: {
      created() {
        console.log(this.v$.$errors)
          this.v$.$validate()
          if(!this.v$.$invalid) {
              this.$emit('created')
          }
      },
    onChangeLogo(e) {
      this.$emit('onChangeLogo', e)
    },
    buttoncacherformecreated() {
        this.$emit('buttoncacherformecreated')
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
.error {
	border-bottom: 2px solid #ff00009e;
}
.error-msg {
    color: #ff00009e;
}
.error_img {
    border-bottom: 40px solid #ff00009e;
}
</style>
