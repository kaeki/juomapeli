import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store';
import { lazyload } from '@/directives';

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    state: store.state
  },
  directives: {
    lazyload
  },
  render: h => h(App)
}).$mount('#app')