<template>
  <div>
    <section class="row">
      <div class="col-xs-6">
          <h3>管理员 {{$store.state.username}} <a @click.prevent="logout">退出</a></h3>
      </div>
    </section>

    <hr>

    <section class="row">
      <div class="col-xs-12">
        <ul class="nav nav-tabs">
          <li :class="{'active': current=='ProductsMgr'}">
            <router-link :to="{name: 'ProductsMgr'}">商品列表管理</router-link>
          </li>
          <li :class="{'active': current=='UsersMgr'}">
            <router-link :to="{name: 'UsersMgr'}">用户管理</router-link>
          </li>
        </ul>
      </div>
    </section>

    <section class="row">
        <div class="col-xs-12">
            <router-view></router-view>
        </div>
    </section>

  </div>
</template>

<script>
export default {
    name: 'Admin',
    data() {
        return {
            current: 'ProductsMgr'
        }
    },
    watch: {
        '$route'(to, from){
            this.current = to.name;
        }
    },
    methods: {
        logout() {
            this.$store.commit('setIsLogin', false);
            this.$router.push({name: 'Login'});
        }
    }
    
}
</script>