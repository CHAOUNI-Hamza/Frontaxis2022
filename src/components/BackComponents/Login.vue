<template>
  <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form" @submit.prevent="submit()"> 
					<!--<span class="login100-form-title p-b-26">
						Bienvenue
					</span>-->
					<span class="login100-form-title p-b-48">
						<img src="@/assets/logo.svg" alt="logo axis" width="50%">
					</span>

					<div :class="{ error: v$.user.email.$errors.length }" class="wrap-input100 validate-input">
						<input v-model="user.email" class="input100" type="text" name="email">
						<span class="focus-input100" data-placeholder="Email"></span>
						<div class="input-errors" v-for="error of v$.user.email.$errors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
					</div>

					<div :class="{ error: v$.user.password.$errors.length }" class="wrap-input100 validate-input" data-validate="Enter password">
						<span @click="showPassword()" class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input v-model="user.password" class="input100" :type="this.typePassword  ? 'password' : 'text'" name="pass">
						<span class="focus-input100" data-placeholder="Password"></span>
						<div class="input-errors" v-for="error of v$.user.password.$errors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
					</div>


					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Connexion
							</button>
						</div>
					</div>

					<!--<div class="text-center p-t-115">
						<span class="txt1">
							Don’t have an account?
						</span>

						<a class="txt2" href="#">
							Sign Up
						</a>
					</div>-->
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
</template>

<script>
import { mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
export default {
  name: 'Login',
  props: {
    msg: String
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
      return {
          user: {
                email : '',
                password : ''
          },
		  typePassword : true
      }
  },
  validations () {
    return {
		 user: {
        email: { required, email }, // Matches state.contact.email
		password: { required, minLength : minLength(10), maxLength : maxLength(30) } // Matches state.contact.email
      }
      }
    },
  methods: {
	  showPassword() {
		  console.log(this.typePassword)
		  this.typePassword = !this.typePassword
	  },
      ...mapActions({
          'login' : 'auth/login'
      }),
      submit() {
		  this.v$.$validate()
		  if(!this.v$.$invalid) {
			 
			  let timerInterval
					Swal.fire({
					title: 'Verifying',
					//html: 'Verifying',
					timer: 1500,
					timerProgressBar: true,
					didOpen: () => {
						Swal.showLoading()
						const b = Swal.getHtmlContainer().querySelector('b')
						timerInterval = setInterval(() => {
						b.textContent = Swal.getTimerLeft()
						}, 100)
					},
					willClose: () => {
						clearInterval(timerInterval)
					}
					}).then((result) => {
					/* Read more about handling dismissals below */
					if (result.dismiss === Swal.DismissReason.timer) {
						this.login(this.user).then(() => this.$router.replace({name: 'Dashboard'}));
					}
					})

             
          }
			  

          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login100-form-btn {
    background: #0395da;
}
.login100-form-btn:hover {
    background: #0395da8f;
}
.limiter img {
    width: 50%;
}
.error {
	border-bottom: 2px solid #ff00009e;
}
.error-msg {
    color: #ff00009e;
}
</style>
