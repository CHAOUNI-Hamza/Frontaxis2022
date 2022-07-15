import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

/* import Echo from 'laravel-echo';

 window.Pusher = require('pusher-js');
 
 window.Echo = new Echo({
     broadcaster: 'pusher',
     key: process.env.MIX_PUSHER_APP_KEY,
     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
     forceTLS: false,
     wsHost: window.location.hostname,
     wsPort: 6001
 });*/


require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8000'



store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {

    createApp(App).use(store).use(router).mount('#app')
})
