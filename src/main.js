import Vue from 'vue'
// import App from './App.vue'
// import NewPage from './NewPage.vue'
// import FormPage from './FormPage.vue'
// import MaidenLayout from './MaidenLayout.vue'
import Mainapp from './Mainapp.vue'
import vuetify from './plugins/vuetify'
import router from './router'
require('./assets/style.css')

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(Mainapp)
}).$mount('#app')
