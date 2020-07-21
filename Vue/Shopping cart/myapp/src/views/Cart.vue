<template>
  <div>
    <section class="row">
      <div class="col-xs-4 col-xs-offset-4">
        <h3>您的购物车</h3>
      </div>
    </section>

     <section class="row">
      <div class="col-xs-4">
        <router-link :to="{name: 'Home'}" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-menu-left"></span>
            <span class="text">返回商品页面</span>
        </router-link>
      </div>
    </section>

    <section class="row">
      <div class="col-xs-12" v-if="!isCartEmpty">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>商品编号</th>
              <th>商品名称</th>
              <th>商品价格</th>
              <th>购买数量</th>
              <th>总价格</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of productsInCart" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.price | rmb}}</td>
              <td>
                <button type="button" class="btn btn-default btn-sm" @click="minus(item)">
                  <span class="glyphicon glyphicon-minus-sign"></span>
                </button>
                <span class="text">{{item.amount}}</span>
                <button type="button" class="btn btn-default btn-sm" @click="plus(item)">
                  <span class="glyphicon glyphicon-plus-sign"></span>
                </button>
              </td>
              <td>{{item.price * item.amount | rmb}}</td>
              <td>
                <button class="btn btn-default btn-sm" @click="remove(item.id)">删除该商品</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="col-xs-12" v-else>
          <p>您的购物车为空！去买点啥吧</p>
      </div>

    </section>


  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    productsInCart() {
      return this.$store.state.cart;
    },
    isCartEmpty() {
        // console.log(this.$store.state.cart.length == 0);
        return this.$store.state.cart.length == 0;
    }
  },
  methods: {
      plus(item) {
          this.$store.commit('plusAmountOfProduct', item);
      },
      minus(item) {
          this.$store.commit('minusAmountOfProduct', item);
      },
      remove(id) {
          this.$store.commit('removeProductFromCart', id);
      }
  }
};
</script>

<style scoped>
    .text {
        padding: 0 10px;
    }
</style>