<template>
  <div>
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Veuillez remplir le formulaire ci-dessous s’il vous plaît  en nous donnant plus d’informations sur votre projet, vos problématiques ou vos ambitions. Nous reviendrons vers vous le plus souvent dans la journée. Sinon, n’hésitez pas à nous appeler !</p>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Localisation:</h4>
                <p>{{ axis.address }}
</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{{ axis.email }}</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Tél:</h4>
                <p>06 61 73 02 10 - 05 37 83 47 02</p>
              </div>

              <iframe :src="axis.localisation" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form @submit.prevent="created()" novalidate class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Nom et prénom</label>
                  <input :class="{ error: v$.contact.name.$errors.length }" v-model="contact.name" type="text" name="name" class="form-control" id="name" required>
                  <div class="input-errors" v-for="error of v$.contact.name.$errors" :key="error.$uid">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Email</label>
                  <input :class="{ error: v$.contact.email.$errors.length }" v-model="contact.email" type="email" class="form-control" name="email" id="email" required>
                  <div class="input-errors" v-for="error of v$.contact.email.$errors" :key="error.$uid">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Sujet</label>
                <input :class="{ error: v$.contact.subject.$errors.length }" v-model="contact.subject" type="text" class="form-control" name="subject" id="subject" required>
                <div class="input-errors" v-for="error of v$.contact.subject.$errors" :key="error.$uid">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea :class="{ error: v$.contact.message.$errors.length }" v-model="contact.message" class="form-control" name="message" rows="10" required></textarea>
                <div class="input-errors" v-for="error of v$.contact.message.$errors" :key="error.$uid">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Envoyer</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'ContactFront',
  props: {
    msg: String
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      url : 'api/v1/front/axis',
      axis: [],
      contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  validations () {
    return {
		 contact: {
        name: { required },
        email: { required },
        subject: { required },
        message: { required },
      }
      }
    },
  methods: {
    // get axis
      async get() {
        try {
           const response = await axios.get(this.url)
          this.axis = response.data.data
          console.log('this.axis.social')
          console.log(this.axis.social.Fix)
         } catch (error) {
           
         }
       },
       // created contact
       async created() {
         console.log(this.v$.$invalid)
         this.v$.$validate()
          if(!this.v$.$invalid) {
              
              try {
        
        
        const response = await axios.post('api/v1/contacts/store', this.contact)
        this.contact = {
                name: '',
                email: '',
                subject: '',
                message: ''
              }
        Swal.fire(
            'Created',
            '',
            'success'
            )
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'No Data Found',
        })
      }

          }
      
  }
  },
  mounted() {
    this.get()
  },
  computed: {
  }
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info {
  border-top: 3px solid #47b2e4;
  border-bottom: 3px solid #47b2e4;
  padding: 30px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
}
.contact .info i {
  font-size: 20px;
  color: #47b2e4;
  float: left;
  width: 44px;
  height: 44px;
  background: #e7f5fb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #37517e;
}
.contact .info p {
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #6182ba;
}
.contact .info .email p {
  padding-top: 5px;
}
.contact .info .social-links {
  padding-left: 60px;
}
.contact .info .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  margin-right: 10px;
}
.contact .info .social-links a:hover {
  background: #47b2e4;
  color: #fff;
}
.contact .info .email:hover i, .contact .info .address:hover i, .contact .info .phone:hover i {
  background: #47b2e4;
  color: #fff;
}
.contact .php-email-form {
  width: 100%;
  border-top: 3px solid #47b2e4;
  border-bottom: 3px solid #47b2e4;
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}
.contact .php-email-form .form-group {
  padding-bottom: 8px;
}
.contact .php-email-form .validate {
  display: none;
  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}
.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contact .php-email-form .form-group {
  margin-bottom: 20px;
}
.contact .php-email-form label {
  padding-bottom: 8px;
}
.contact .php-email-form input, .contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 4px;
}
.contact .php-email-form input:focus, .contact .php-email-form textarea:focus {
  border-color: #47b2e4;
}
.contact .php-email-form input {
  height: 44px;
}
.contact .php-email-form textarea {
  padding: 10px 12px;
}
.contact .php-email-form button[type=submit] {
  background: #47b2e4;
  border: 0;
  padding: 12px 34px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}
.contact .php-email-form button[type=submit]:hover {
  background: #209dd8;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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