<template>
  <div class="box">
    <div class="div1">
      <h3>
        <router-link to="/barginChild">全民砍价</router-link>
      </h3>
      <p>></p>
    </div>
    <div v-for="(item,key) in list" :key="key">
      <ul class="ul1">
        <img :src="item.pic" alt class="img1" />
        <li>
          <p>{{item.name}}</p>
          <p class="p2">{{item.characteristic}}</p>
          <div class="div2">
            <li>
              <p class="p3">￥{{item.minPrice}}.00</p>
              <p class="p4">底价</p>
            </li>
            <li>
              <p class="p5">￥{{item.originalPrice}}</p>
              <p class="p4">原价</p>
            </li>
            <li>
              <p class="p6">{{item.minScore}}</p>
              <p class="p4">限量</p>
            </li>
          </div>
        </li>
      </ul>
    </div>
    <Chosen></Chosen>
  </div>
</template>

<script>
import Chosen from "@/pages/shop/chosen";
import Product from "@/services/product";
const _product = new Product();

export default {
  components: { Chosen },
  data() {
    return {
      list: []
    };
  },

  created() {
    _product.bargin().then(res => {
      var data = res.data.data.goodsMap;
      for (var i in data) {
        this.list.push(data[i]);
      }
      this.list = this.list.splice(1, 3);
    });
  }
  // mounted() {
  //   this.axios
  //     .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
  //     .then(res => {
  //       var data = res.data.data.goodsMap;
  //       for (var i in data) {
  //         this.list.push(data[i]);
  //       }
  //       this.list = this.list.splice(1, 3);
  //     });
  // }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 9.1rem;
  background: rgb(243, 241, 241);
}
.div1 {
  display: flex;
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid rgb(219, 219, 219);
  background: white;
  h3 {
    margin-left: 3rem;
    text-align: center;
    line-height: 1rem;
    font-weight: 500;
  }
  p {
    width: 0.34rem;
    height: 0.34rem;
    border-radius: 50%;
    border: 1px solid gray;
    text-align: center;
    line-height: 0.34rem;
    font-weight: 550;
    color: gray;
    margin-top: 0.3rem;
    margin-left: 0.1rem;
  }
}
.ul1 {
  display: flex;
  margin-top: 0.2rem;
  background: white;
  .p2 {
    font-size: 0.24rem;
    color: rgb(189, 189, 190);
    margin-top: 0.2rem;
  }
  li {
    margin-left: 0.2rem;
    margin-top: 0.14rem;
  }
  .img1 {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.1rem;
  }
  .div2 {
    display: flex;
    justify-content: space-around;
    .p3 {
      color: red;
      margin-top: 0.22rem;
      margin-left: -0.2rem;
      font-weight: 600;
    }
    .p4 {
      font-size: 0.26rem;
      margin-top: 0.06rem;
      color: rgb(189, 189, 190);
    }
    .p5,
    .p6 {
      margin-top: 0.22rem;
      color: rgb(189, 189, 190);
    }
  }
}
a {
  text-decoration: none;
  color: gray;
}
</style>
