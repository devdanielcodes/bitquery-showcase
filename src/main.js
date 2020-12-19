import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router  from './router'

Vue.config.productionTip = false


new Vue({
  apolloProvider: createProvider(),
  render: h => h(App),
  router
}).$mount('#app')
