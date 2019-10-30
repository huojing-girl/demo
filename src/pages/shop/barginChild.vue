<template>
  <div>
    <div class="p">
      <router-link to="/"><</router-link>
      <h1>砍价列表</h1>
    </div>
    <div class="box">
      <div v-for="(item,key) in list" :key="key">
        <router-link :to="'/barginChild2/'+item.id" tag="ul" class="ul1">
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
        </router-link>
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
      list: []
    };
  },
  created() {
    _product.bc().then(res => {
      console.log(res.data.data.goodsMap);
      var data = res.data.data.goodsMap;
      this.list = data;
    });
  }
};
</script>

<style lang="scss" scoped>
.p {
  width: 100%;
  background: white;
  display: flex;
  border-bottom: 1px solid gainsboro;
  position: fixed;
  top: 0;
  z-index: 300;
  a {
    text-decoration: none;
    color: gray;
    font-size: 0.5rem;
    margin-left: 0.1rem;
    margin-top: 0.2rem;
  }
  h1 {
    margin: 0.4rem auto;
    font-size: 0.38rem;
    font-weight: 520;
  }
}
.box {
  margin-top: 1.5rem;
}
.ul1 {
  display: flex;
  margin-top: 0.46rem;
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
</style>