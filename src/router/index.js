import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Juomapeli',
    component: Home,
    meta: {
      title: 'Juomapeli',
      metaTags: [
        {
          name: 'description',
          content: 'Oikein hieno korttipeli'
        },
        {
          property: 'og:description',
          content: 'Oikein hieno korttipeli'
        }
      ]
    }
  }, {
    path: '/kaikki-kortit',
    name: 'Kaikki kortit',
    meta: {
      title: 'Kaikki kortit | Juomapeli',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Cards.vue')
  }, {
    path: '*',
    name: 'Huppista',
    meta: {
      title: 'Huppista | Juomapeli',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Juomapeli';
  next()
});

export default router;
