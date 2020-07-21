import Vue from 'vue'
import Vuex from 'vuex'
// import {products} from '@/assets/products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isAdmin: false,
    username: '',
    products: [],
    cart: []
  },
  getters:{
    hasDuplicateProductInCart(state) {
      return function(product) {
        return state.cart.find( item => item.id == product.id)
      }
    },
    getTotalAmountOfProductsInCart(state) {
      let sum = 0;
      for(let i=0; i<state.cart.length; i++) {
        sum += state.cart[i].amount;
      }
      return sum;
    }
  },
  mutations: {
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    setIsAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    setProducts(state, products) {
      state.products = products
    },
    setUsername(state, name) {
      state.username = name;
    },
    addProductIntoCart(state, product) {
      state.cart.push({
        ...product,
        amount: 1
      });
    },
    plusAmountOfProduct(state, product) {
      let index = state.cart.findIndex(item => item.id == product.id);
      state.cart[index].amount++;
    },
    minusAmountOfProduct(state, product) {
      let index = state.cart.findIndex(item => item.id == product.id);
      state.cart[index].amount = state.cart[index].amount==0 ? 0 : --state.cart[index].amount;
    },
    removeProductFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id != productId);
    }
  },
  actions: {
  }
})
