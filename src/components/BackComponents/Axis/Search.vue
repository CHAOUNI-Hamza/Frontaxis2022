<template>
<div class="row">
                    <div class="col-md-2">
                      <div class="form-group">
                        <label>Filter by</label>
                        <select v-model="filterGet.filter" class="form-control">
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="address">Adress</option>
                        <option value="description_agency">Description</option>
                        <option value="localisation">Localisation</option>
                        <option value="social">Social</option>
                        </select>
                      </div>
                    </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          <label>Search</label>
                          <input v-model="filterGet.filtervalue" type="text" class="form-control" placeholder="Search ...">
                        </div>
                      </div>
                      <div class="col-md-2">
                        <label>Sort By</label>
                        <select v-model="filterGet.sortby" class="form-control">
                        <option value="id">Id</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="address">Adress</option>
                        <option value="description_agency">Description</option>
                        <option value="localisation">Localisation</option>
                        <option value="social">Social</option>
                        </select>
                      </div>
                      <div class="col-md-2">
                        <label>Order By</label>
                        <select v-model="filterGet.orderby" class="form-control">
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                        </select>
                      </div>
                      <div class="col-md-2">
                        <label>Pagination</label>
                        <select v-model="filterGet.paginate" class="form-control">
                        <option value="5">05</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        </select>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          <label>Date Created</label>
                          <div class="input-group date" id="reservationdate" data-target-input="nearest">
                          <input v-model="filterGet.created_at" type="date" class="form-control datetimepicker-input" data-target="#reservationdate">
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                          </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          <label>Date Updated</label>
                          <div class="input-group date" id="reservationdate" data-target-input="nearest">
                          <input v-model="filterGet.updated_at" type="date" class="form-control datetimepicker-input" data-target="#reservationdate">
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                          </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          <label>Date From</label>
                          <div class="input-group date" id="reservationdate" data-target-input="nearest">
                          <input v-model="filterGet.date_from" type="date" class="form-control datetimepicker-input" data-target="#reservationdate">
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                          </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group">
                          <label>Date To</label>
                          <div class="input-group date" id="reservationdate" data-target-input="nearest">
                          <input v-model="filterGet.date_to" type="date" class="form-control datetimepicker-input" data-target="#reservationdate">
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                          </div>
                          </div>
                        </div>
                      </div>

                  </div>
</template>

<script>
//import Pagination from 'laravel-vue-pagination'


export default {
  name: 'Search',
  props: [
     'filterGet'
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
