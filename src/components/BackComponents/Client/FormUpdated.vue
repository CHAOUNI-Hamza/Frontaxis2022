<template>
<div v-if="FormEdition" class="col-md-12">
                    <!-- start form edition -->
                                <div class="card card-primary">
                    <div class="card-header">
                    <h3 class="card-title">Information clients</h3>
                    </div>

                    <form @submit.prevent="update(client.id)" novalidate>
                    <div class="row">
                      <div class="col-md-6">
                            <div class="card-body">
                                  
                                  <div class="form-group">
                                      <label for="exampleInputEmail1">Name</label>
                                      <input v-model="client.name" name="client.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="Phone">
                                  </div>
                            </div>
                      </div>
                      <div class="col-md-6">
                          <div class="card-body">
                              <div class="form-group">
                                    <label for="exampleInputFile">Logo</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input  @change="onChangeLogo" name="client.photo" type="file" class="custom-file-input" id="exampleInputFile">
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
                    <button type="submit" class="btn btn-primary">Updated</button>
                    <button type="button" @click="buttoncacherformedition()" class="btn btn-danger">Remove</button>
                    </div>
                    </form>


                   
                    </div>
                    <!-- end form edition -->
                              </div>
</template>

<script>
//import Pagination from 'laravel-vue-pagination'


export default {
  name: 'FormUpdated',
  props: [
      'FormEdition', 'client'
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
