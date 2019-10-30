<template>
  <div>
    <div class="app">
      <div class="d1">账号登录</div>
      <div class="d2">霍晶 -严选商城欢迎您</div>
      <div class="inpdiv1">
        <input type="text" placeholder="手机号码" v-model="num" />
        <i class="el-icon-mobile-phone"></i>
      </div>
      <div class="inpdiv2">
        <input type="text" placeholder="密码" v-model="pass" />
        <i class="el-icon-view"></i>
      </div>
      <div class="btndiv">
        <button @click="login">登 录</button>
      </div>
      <div class="router">
        <router-link to="/">忘记密码</router-link>
      </div>
      <div class="router2">
        <router-link to="/register">还没有注册？立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/services/product";
const _product = new Product();
export default {
  data() {
    return {
      num: "",
      pass: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    login() {
      let obj = {
        mobile: this.num,
        pwd: this.pass
      };
      _product.login(obj).then(res => {
        console.log(res.data);
        if (res.data.code == 0) {
          window.localStorage.setItem("user", JSON.stringify(res.data.data));
          alert("登录成功");
        }
        _product.user(res.data.data.token).then(res => {
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(res.data.data.base)
          );
        });
        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 7rem;
  height: 12.8rem;
  margin: 0.3rem auto;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-shadow: 0 0 5px 1px #eee;
  box-shadow: 0 0 5px 1px #eee;
}
.d1 {
  font-size: 0.44rem;
  color: #453e3b;
  padding: 0.5rem;
}
.d2 {
  font-size: 0.28rem;
  color: #a7a7a7;
  margin-left: 0.5rem;
}
.inpdiv1 {
  width: 5.4rem;
  height: 1rem;
  background: #f5f5f5;
  border-radius: 0.1rem;
  margin: 0.8rem auto;
  input {
    outline: none;
    margin: 0.3rem;
    border: none;
    background: #f5f5f5;
  }
  i {
    margin-left: 0.4rem;
    color: #d2d2d3;
  }
}
.inpdiv2 {
  width: 5.4rem;
  height: 1rem;
  background: #f5f5f5;
  border-radius: 0.1rem;
  margin: -0.4rem auto;
  input {
    outline: none;
    margin: 0.3rem;
    border: none;
    background: #f5f5f5;
  }
  i {
    margin-left: 0.4rem;
    color: #d2d2d3;
  }
}
.btndiv {
  margin-top: 1.4rem;
  text-align: center;
  button {
    width: 4rem;
    height: 0.8rem;
    border-radius: 0.1rem;
    border: none;
    color: white;
    font-size: 0.26rem;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#5ea6f8),
      to(#bb87f6)
    );
    outline: none;
  }
}
.router {
  margin-left: 2.88rem;
  margin-top: 0.4rem;
  a {
    color: #8c8e92;
    font-size: 0.26rem;
    text-decoration: none;
  }
}
.router2 {
  text-align: center;
  margin-top: 0.5rem;
  a {
    text-decoration: none;
    color: #6fc1fc;
    font-size: 0.28rem;
  }
}
</style>