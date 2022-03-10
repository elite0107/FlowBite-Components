import Vue from 'vue'
import App from './App.vue'

// import tailwind css 3
import './assets/tailwind.css'

// import flowbite
import 'flowbite';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
