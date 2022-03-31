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

					<div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input v-model="user.email" class="input100" type="text" name="email">
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input v-model="user.password" class="input100" type="password" name="pass">
						<span class="focus-input100" data-placeholder="Password"></span>
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
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
      return {
          user: {
                email : '',
                password : ''
          }
      }
  },
  methods: {
      ...mapActions({
          'login' : 'auth/login'
      }),
      submit() {
          this.login(this.user).then(() => this.$router.replace({name: 'Dashboard'}));
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
</style>
