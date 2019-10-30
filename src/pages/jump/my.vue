<template>
  <div>
    <div class="div1">
      <div class="d1">
        <i class="el-icon-user" id="i1"></i>
      </div>
      <div class="d2">
        <router-link to="/login" tag="p" class="p1">点击登录</router-link>
        <p class="p2">积分：0</p>
      </div>
      <div class="d2">
        <p class="p1">{{this.userInfo.nick}}</p>
        <p class="p2">积分：{{this.userInfo.source}}</p>
      </div>
    </div>
    <div class="div2">
      <i class="el-icon-bell"></i>
      <p>新上线更稳定的付费查询接口</p>
    </div>
    <router-link to="/orders" tag="div" class="div3">
      <i class="el-icon-document"></i>
      <p class="p1">我的订单</p>
      <p class="p2">></p>
    </router-link>
    <div class="div4">
      <div>
        <i class="el-icon-folder-opened"></i>
        <p>待付款</p>
      </div>
      <div>
        <i class="el-icon-takeaway-box"></i>
        <p>待发货</p>
      </div>
      <div>
        <i class="el-icon-shopping-cart-full"></i>
        <p>待收货</p>
      </div>
      <div>
        <i class="el-icon-collection"></i>
        <p>待评价</p>
      </div>
    </div>
    <div class="div5">
      <div>
        <i class="el-icon-coin i1"></i>
        <p>我的余额</p>
        <p>0元</p>
      </div>
      <div>
        <i class="el-icon-error i1"></i>
        <p>我的砍价</p>
      </div>
      <div>
        <i class="el-icon-s-ticket i2"></i>
        <p>我的礼券</p>
      </div>
      <div>
        <i class="el-icon-star-off i2"></i>
        <p>我的收藏</p>
      </div>

      <router-link to="/address" tag="div">
        <i class="el-icon-location-information i3"></i>
        <p>我的地址</p>
      </router-link>

      <div>
        <i class="el-icon-service i3"></i>
        <p>联系客服</p>
      </div>
    </div>
    <div class="div6">白茶清欢 from 霍晶</div>

    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
   computed: {
    userInfo(){
      return this.$store.state.userInfo
      console.log(this.$store.state.userInfo)
    }
  },
};
</script>


<style lang="scss" scoped>
.div1 {
  width: 100%;
  height: 4rem;
  background: url("/static/img/back.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  .d1 {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    border: none;
    text-align: center;
    background: white;
    margin-top: 0.9rem;
    margin-left: 0.3rem;
    #i1 {
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
  .d2 {
    margin-top: 1rem;
    .p1 {
      color: white;
      margin-top: 0.1rem;
      margin-left: 0.3rem;
    }
    .p2 {
      width: 1.3rem;
      height: 0.6rem;
      color: white;
      text-align: center;
      background: #b3a078;
      line-height: 0.6rem;
      margin-top: 0.3rem;
      border-radius: 0.12rem;
      margin-left: 0.22rem;
      font-size: 0.26rem;
    }
  }
}
.div2 {
  width: 100%;
  height: 1rem;
  color: rgb(196, 0, 0);
  display: flex;
  background: rgb(248, 248, 248);
  i {
    width: 10%;
    height: 0.84rem;
    font-size: 0.36rem;
    line-height: 0.8rem;
    background: white;
    text-align: center;
  }
  p {
    width: 90%;
    height: 0.84rem;
    background: white;
    font-size: 0.26rem;
    line-height: 0.8rem;
  }
}
.div3 {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid gainsboro;
  display: flex;
  i {
    color: rgb(240, 157, 3);
    font-size: 0.44rem;
    margin-left: 0.2rem;
    margin-top: 0.14rem;
  }
  .p1 {
    margin-left: 0.2rem;
    font-size: 0.24rem;
    margin-top: 0.18rem;
  }
  .p2 {
    margin-left: 5rem;
    margin-top: 0.18rem;
  }
}
.div4 {
  width: 100%;
  height: 1.6rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  background: #f4f4f4;
  div {
    width: 25%;
    height: 1.4rem;
    background: white;
    color: rgb(141, 141, 141);
    i {
      font-size: 0.52rem;
      margin-top: 0.24rem;
    }
    p {
      font-size: 0.26rem;
    }
  }
}
.div5 {
  width: 100%;
  height: 3.7rem;
  display: flex;
  flex-wrap: wrap;
  div {
    width: 33%;
    height: 1.4rem;
    text-align: center;
  }
  i {
    font-size: 0.6rem;
    margin-top: 0.3rem;
  }
  p {
    font-size: 0.26rem;
    color: #293028;
    margin-top: 0.1rem;
  }
  .i1 {
    color: #f86e44;
  }
  .i2 {
    color: #ecb24f;
  }
  .i3 {
    color: #9aaaeb;
  }
}
.div6 {
  width: 100%;
  height: 1.9rem;
  background: rgb(241, 241, 241);
  text-align: center;
  color: gray;
  font-size: 0.26rem;
  line-height: 1.1rem;
}
</style>