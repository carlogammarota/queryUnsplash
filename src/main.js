import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

// import axios from 'axios'
// import axios from 'axios'

import VueTailwind from 'vue-tailwind'
import './assets/styles/index.css';

import MyOwnTheme from './themes/default.js'

Vue.use(VueTailwind, {
  theme: MyOwnTheme
})

// Vue.use(axios)
Vue.use(VueTailwind)

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
