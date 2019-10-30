<template>
  <div>
    <div class="app">
      <div class="d1">新用户注册</div>
      <div class="d2">很高兴您将成为商城的会员(注册只需一步)</div>
      <div class="inpdiv1">
        <input type="text" placeholder="手机号码" v-model="phone" />
        <i class="el-icon-mobile-phone"></i>
      </div>
      <div class="inpdiv2">
        <input type="text" placeholder="密码" v-model="pwd" />
        <i class="el-icon-view"></i>
      </div>
      <div class="inpdiv3">
        <input type="text" placeholder="确认密码" v-model="pwd" />
        <i class="el-icon-view"></i>
      </div>
      <div class="inpdiv4">
        <input type="text" placeholder="用户名" v-model="nick" />
        <i class="el-icon-user-solid"></i>
      </div>
      <div class="inpdiv5">
        <input type="text" placeholder="图形验证码" />
        <img :src="`https://api.it120.cc/small4/verification/pic/get?key=${this.ty.data}`" />
      </div>
      <div class="inpdiv6">
        <el-select v-model="sheng" placeholder="省份" class="inpone" @change="shengchange">
          <el-option
            v-for="(item,key) in getsheng"
            :key="key"
            :value="item.name"
            v-model="province"
          ></el-option>
        </el-select>
        <el-select v-model="shi" placeholder="市" class="inpone">
          <el-option v-for="(item,key) in getshi" :key="key" :value="item.name" v-model="city"></el-option>
        </el-select>
      </div>
      <div class="inpdiv7">
        <input type="text" v-model="code" />
        <button>获取验证码</button>
      </div>
      <div class="btndiv">
        <button @click="logon">立即注册</button>
      </div>
      <div class="inpdiv8">
        <router-link to="/login">已有账号？立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/services/product";
const _produce = new Product();
export default {
  data() {
    return {
      ty: {
        data: new Date().getTime()
      },
      sheng: "",
      shi: "",
      getsheng: [],
      getshi: [],
      phone: "",
      pwd: "",
      code: "",
      nick: "",
      province: "",
      city: ""
    };
  },
  created() {
    _produce.sheng().then(res => {
      console.log(res.data.data);
      this.getsheng = res.data.data;
    });
  },
  methods: {
    shengchange() {
      let index = this.getsheng.findIndex(item => {
        return this.sheng == item.name;
      });
      console.log(index);
      console.log(this.getsheng[index].id);
      _produce.shi(this.getsheng[index].id).then(res => {
        this.getshi = res.data.data;
      });
    },

    //注册
    logon() {
      const obj = {
        mobile: this.phone,
        pwd: this.pwd,
        code: this.code,
        nick:this.nick,
        province:this.province,
        city:this.city,
      };
      _produce.register().then(res=>{
        console.log(res)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 7rem;
  height: 15rem;
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
  font-size: 0.26rem;
  color: #909090;
  margin-left: 0.5rem;
}
.inpdiv1,
.inpdiv3 {
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
.inpdiv2,
.inpdiv4 {
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
.inpdiv5 {
  width: 5.4rem;
  height: 1rem;
  background: #f5f5f5;
  border-radius: 0.1rem;
  margin: 0.8rem auto;
  display: flex;
  input {
    width: 2.6rem;
    outline: none;
    margin: 0.3rem;
    border: none;
    background: #f5f5f5;
  }
  img {
    width: 2rem;
    height: 0.8rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
  }
}
.inpdiv6 {
  width: 100%;
  display: flex;
  margin-top: -0.3rem;
  .inpone {
    width: 50%;
  }
}
.inpdiv7 {
  width: 5.4rem;
  height: 1rem;
  background: #f5f5f5;
  border-radius: 0.1rem;
  margin: 0.4rem auto;
  input {
    outline: none;
    margin: 0.3rem;
    width: 2.6rem;
    border: 1px solid;
    border: none;
    background: #f5f5f5;
  }
  button {
    width: 2rem;
    height: 1rem;
    background: #f5f5f5;
    border: none;
    border-left: 1px solid gainsboro;
    outline: none;
  }
}
.inpdiv8 {
  text-align: center;
  margin-top: 0.5rem;
  a {
    text-decoration: none;
    color: #6fc1fc;
    font-size: 0.28rem;
  }
}
.btndiv {
  margin-top: 0.5rem;
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
</style>