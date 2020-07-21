import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/index.js';

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Cart from '@/views/Cart.vue'
import Detail from '@/views/Detail.vue'
import Admin from '@/views/Admin.vue'
import ProductsMgr from '@/views/admin/ProductsMgr.vue'
import UsersMgr from '@/views/admin/UsersMgr.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } 
  },
  {
    path: '/home',
    redirect: {name: 'Home'},
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { requiresAuth: true } 
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: { requiresAuth: true } 
  },
  {
    path: '/admin',
    // name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'ProductsMgr',
        component: ProductsMgr
      },
      {
        path: 'user-mgr',
        name: 'UsersMgr',
        component: UsersMgr
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next)=>{
  console.log('isLogin', store.state.isLogin);
  let requiresAuth = to.matched.some(item => item.meta.requiresAuth);
  console.log('Require Auth', requiresAuth);

  if(requiresAuth && !store.state.isLogin) {
    next({name: 'Login'})
  }
  else {
    next();
  }
    
})

export default router
