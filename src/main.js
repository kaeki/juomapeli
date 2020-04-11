import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store';
import directives from '@/directives';

Vue.config.productionTip = false

Vue.directive('lazyload', directives.lazyload);

new Vue({
  router,
  data: {
    state: store.state
  },
  render: h => h(App)
}).$mount('#app')