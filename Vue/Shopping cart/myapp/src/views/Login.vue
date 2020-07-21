<template>
  <div>
    <section v-if="!$store.state.isLogin">
      <div class="row">
        <div class="col-xs-4 col-xs-offset-4">
          <h3>登录页面</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <form>
            <div class="form-group">
              <label>用户名</label>
              <input class="form-control" type="text" placeholder="请输入用户名" required  v-model="username"/>
            </div>
            <div class="form-group">
              <label>密码</label>
              <input class="form-control" type="password" placeholder="请输入密码" required  v-model="password"/>
            </div>
            <div class="form-group">
              <button class="btn btn-primary" @click.prevent="login">登录</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section v-else>
        <h3>您已经登录过了...</h3>
        <router-link :to="{name: 'Home'}">返回主页面</router-link>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",
  data() {
      return {
          username: '',
          password: ''
      }
  },
  methods: {
    login() {
     console.log(this.username, this.password);

     axios.post('/db/checkuser', {
         username: this.username,
         password: this.password
     })
     .then(res=>{
         let data = res.data;
         console.log('data from server', data);
         if(data.hasAuth) {
             this.$store.commit('setIsLogin', data.hasAuth);
             this.$store.commit('setIsAdmin', data.hasAdminRole);
             this.$store.commit('setUsername', data.username);
             this.$store.commit('setProducts', data.products);

             if(this.$store.state.isAdmin) {
                 this.$router.push({name: 'ProductsMgr'})
             }
             else {
                 this.$router.push({name: 'Home'});
             }   
         }
         else{
             window.alert('登录失败! 请检查用户名或密码是否正确');
         }
     })
     .catch(err=>{
         console.log(err);
     })
      
    //   this.$store.commit("setIsLogin", true);
    //   this.$router.push({ name: "Home" });
    }
  }
};
</script>