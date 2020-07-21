<template>
  <div>
    <section class="row">
      <div class="col-xs-4 col-xs-offset-4">
        <h2>商品列表</h2>
      </div>
    </section>

    <section class="row">
      <div class="col-xs-4 col-xs-offset-8">
        <h4>
            欢迎顾客 {{$store.state.username}}
            <a @click.prevent="logout">退出</a>
        </h4>
        
      </div>
    </section>

    <section class="row">
        <div class="col-xs-4">
            <router-link :to="{name: 'Cart'}" class="btn btn-default">
                <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                <span class="cartText">购物车</span>
                <span class="badge">{{badgeNum}}</span>
            </router-link>
        </div>
    </section>

    <hr>

    <section class="row">
      <div class="col-xs-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>商品编号</th>
              <th>商品名称</th>
              <th>商品价格</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of products" :key="item.id">
              <td>{{item.id}}</td>   
              <td>
                  <router-link :to="{name: 'Detail', params: { id: item.id}}">{{item.name}}</router-link>
                </td>
              <td>{{item.price | rmb}}</td>
              <td>
                <button class="btn btn-sm btn-default" @click="add(item)">加入购物车</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: "Home",
  computed: {
    products() {
      return this.$store.state.products;
    },
    badgeNum() {
      return this.$store.getters.getTotalAmountOfProductsInCart;
    }
  },
  methods: {
    add(item) {
        if(this.$store.getters.hasDuplicateProductInCart(item)) {
            this.$store.commit('plusAmountOfProduct', item);
        }
        else {
            this.$store.commit('addProductIntoCart', item);
        }
    },
    logout() {
        this.$store.commit('setIsLogin', false);
        this.$router.push({name: 'Login'});
    }
  }
};
</script>

<style scoped>
    .cartText {
        padding: 0 10px;
    }
</style>