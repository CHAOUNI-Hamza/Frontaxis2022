<template>
<div v-if="FormCreated" class="col-md-12">
                                <div class="card card-primary">
                    <div class="card-header">
                    <h3 class="card-title">Information Axis</h3>
                    </div>

                    <form @submit.prevent="created()" novalidate>
                    <div class="row">
                      <div class="col-md-6">
                            <div class="card-body">
                                  
                                  <div class="form-group">
                                      <label for="exampleInputEmail1">Name</label>
                                      <input  :class="{ error: v$.client.name.$errors.length }" v-model="client.name" name="client.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="Phone">
                                      <div class="input-errors" v-for="error of v$.client.name.$errors" :key="error.$uid">
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
                                        <div :class="{ error_img: v$.client.photo.$errors.length }" class="custom-file">
                                            <input  @change="onChangeLogo" name="client.photo" type="file" class="custom-file-input" id="exampleInputFile">
                                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                        </div>
                                        <div class="input-group-append">
                                        <span class="input-group-text">Upload</span>
                                        </div>
                                        <div style="margin-left: 11px;" class="input-errors" v-for="error of v$.client.photo.$errors" :key="error.$uid">
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
      'FormCreated', 'client'
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
		 client: {
        name: { required },
        photo: { required },
      }
      }
    },
    watch: {
    },
  methods: {
      created() {
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
