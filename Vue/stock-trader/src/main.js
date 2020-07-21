import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes.js'
import store from './vuex-store/global-store.js';

Vue.use(VueRouter);
Vue.use(VueResource);


// Vue-router instance
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

// Vue-resource 
Vue.http.options.root = 'https://vuejs-stock-trader-14d73.firebaseio.com/';


// Filter
Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
