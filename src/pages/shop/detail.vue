<template>
  <div id="app">
    <div class="bigbox">
      <p class="p1">
        <router-link to="/"><</router-link>
      </p>
      <div class="div1">
        <el-carousel height="100%">
          <el-carousel-item v-for="(item,key) in img" :key="key">
            <img :src="item.pic" style="width:100%;height:100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="div2">
        <p class="dp1">{{this.list.basicInfo.name}}</p>
        <p class="dp2">{{this.list.basicInfo.characteristic}}</p>
        <div class="d2">
          <p class="p2">
            <span>底价</span>
            <span>￥{{this.list.basicInfo.minPrice}}0</span>
          </p>
          <p class="p3">原价￥{{this.list.basicInfo.originalPrice}}.00</p>
          <p class="p4">库存{{this.list.basicInfo.stores}}</p>
        </div>
      </div>

      <div class="div3">
        <div @click="present" ref="v1">商品介绍</div>
        <div @click="assess" ref="v2">商品评价</div>
      </div>
      <div v-show="!flag" class="div4">
        <div v-html="list.content" class="v4_div"></div>
      </div>
      <div class="div5">
        <div v-show="flag" class="v5_div" v-for="(item,key) in arr" :key="key">
          <div>
            <i class="el-icon-user"></i>
          </div>
          <div class="v5child">
            <div>
              <p>匿名用户</p>
              <p>{{item.goods.goodReputationStr}}</p>
            </div>
            <div>{{item.goods.goodReputationRemark}}</div>
            <span class="span">
              <span>{{item.goods.dateReputation}}</span>
              <span>选择规格：{{item.goods.goodsName}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <footer v-show="show">
      <i class="el-icon-service"></i>
      <i class="el-icon-shopping-cart-2"></i>
      <i class="el-icon-star-off"></i>
      <button>立即购买</button>
      <button @click="add(item)">加入购物车</button>
    </footer>
    <div class="last" v-show="!show">
      
      <div class="down" @click="off">X</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      list: "",
      img: [],
      flag: false,
      arr: [],
      show: false,
      shopcar: []
    };
  },
  created() {
    this.axios
      .get(
        `https://api.it120.cc/small4/shop/goods/detail?id=${this.$route.params.id}`
      )
      .then(res => {
        var data = res.data.data;
        this.list = data;
        this.img = data.pics;
      });
    this.axios
      .post(
        `https://api.it120.cc/small4/shop/goods/reputation?goodsId=${this.$route.params.id}`
      )
      .then(res => {
        var data = res.data.data;
        this.arr = data;
      });
  },
  methods: {
    present() {
      this.flag = false;
      this.$refs.v1.style.borderColor = "red";
      this.$refs.v2.style.borderColor = "white";
    },
    assess() {
      this.flag = true;
      this.$refs.v1.style.borderColor = "white";
      this.$refs.v2.style.borderColor = "red";
    },

    //加入购物车
    add() {
      this.show = false;
      // for(var i in this.list){
      //   var index = this.list.findIndex((i,key,arr)=>{
      //     return i.id==item.id
      //   })
      // }
      // this.shopcar.unshift(this.list)
      // console.log(this.shopcar)
    },
    off() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.bigbox {
  height: 110%;
}
.div1 {
  width: 100%;
  height: 7.5rem;
  div {
    width: 100%;
    height: 100%;
    img {
      width: 100% !important;
      height: 100% !important;
      z-index: 1000;
    }
  }
}

.p1 {
  position: absolute;
  left: 0.1rem;
  z-index: 300;
  a {
    text-decoration: none;
    font-size: 0.5rem;
    color: rgb(48, 48, 48);
  }
}
.div2 {
  width: 100%;
  height: 2.1rem;
  .dp1 {
    margin-left: 0.16rem;
    margin-top: 0.3rem;
    color: #333333;
  }
  .dp2 {
    margin-left: 0.16rem;
    font-size: 0.24rem;
    color: #c4c4c4;
    margin-top: 0.2rem;
  }
  .d2 {
    display: flex;
    margin-top: 0.4rem;

    .p2 {
      span:nth-of-type(1) {
        color: rgb(231, 0, 0);
        font-size: 0.24rem;
        margin-left: 0.16rem;
      }
      span:nth-of-type(2) {
        color: rgb(231, 0, 0);
        font-size: 0.32rem;
      }
    }
    .p3 {
      font-size: 0.22rem;
      margin-left: 0.2rem;
      color: #b5b5b5;
      margin-top: 0.08rem;
    }
    .p4 {
      font-size: 0.22rem;
      color: #b5b5b5;
      margin-left: 3.4rem;
      margin-top: 0.08rem;
    }
  }
}
.div3 {
  background: #f5f5f5;
  height: 1.14rem;
  display: flex;
  justify-content: space-around;
  div:nth-of-type(1) {
    width: 50%;
    height: 1rem;
    line-height: 1rem;
    background: white;
    margin-top: 0.14rem;
    text-align: center;
    border-bottom: 2px solid red;
  }
  div:nth-of-type(2) {
    width: 50%;
    height: 1rem;
    line-height: 1rem;
    background: white;
    margin-top: 0.14rem;
    text-align: center;
    border-bottom: 2px solid white;
  }
}
.v5_div {
  display: flex;
  width: 100%;
  height: 2rem;
  border-bottom: 1px dashed gainsboro;
  margin-top: 0.1rem;
  i {
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid gray;
    border-radius: 50%;
    font-size: 1rem;
    line-height: 1.2rem;
    text-align: center;
    margin-top: 0.34rem;
    margin-left: 0.2rem;
  }
  .v5child {
    width: 100%;
    margin-left: 0.1rem;
    div:nth-of-type(1) {
      display: flex;
      p:nth-of-type(1) {
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        font-size: 0.28rem;
      }
      p:nth-of-type(2) {
        width: 0.8rem;
        height: 0.4rem;
        background: firebrick;
        color: white;
        font-size: 0.26rem;
        text-align: center;
        border-radius: 0.14rem;
        line-height: 0.4rem;
        margin-left: 0.3rem;
        margin-top: 0.1rem;
      }
    }
    div:nth-of-type(2) {
      font-size: 0.26rem;
      margin: 0.14rem;
      color: #333;
    }
    .span {
      margin-left: 0.14rem;
      span {
        font-size: 0.24re m;
        color: #b5b5b5;
      }
      width: 100%;
      height: 0.6rem;
    }
  }
}
footer {
  position: fixed;
  bottom: 0rem;
  width: 100%;
  height: 1rem;
  background: white;
  display: flex;
  i {
    width: 1.15rem;
    height: 1rem;
    font-size: 0.6rem;
    border-right: 1px solid gainsboro;
    text-align: center;
    line-height: 1rem;
    color: gray;
  }
  button:nth-of-type(1) {
    width: 2.2rem;
    height: 0.96rem;
    background: white;
    border: none;
    outline: none;
    font-size: 0.28rem;
  }
  button:nth-of-type(2) {
    width: 2.2rem;
    height: 1rem;
    color: white;
    background: firebrick;
    border: none;
    outline: none;
    font-size: 0.28rem;
  }
}
.last {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  border: 1px solid;
  background: white;
  z-index: 900;
  .down {
    width: 0.4rem;
    height: 0.4rem;
    border: 1px solid gray;
    color: gray;
    border-radius: 50%;
    text-align: center;
  }
}
</style>