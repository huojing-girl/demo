<template>
  <div>
    <div class="p">
      <router-link to="/"><</router-link>
      <h1>严选专栏</h1>
    </div>
    <div class="div">
      <ul v-for="(item,key) in list" :key="key">
        <li class="div2">
          <img :src="item.pic" alt class="img" />
          <p class="p1">{{item.title}}</p>
          <router-link :to="'/chosenChild2/'+item.id" tag="p" class="p2">查看详情</router-link>
        </li>
      </ul>
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
    _product.cc().then(res => {
      var data = res.data.data;
      for (var i in data) {
        this.list.push(data[i]);
      }
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

.div {
  margin-top: 0.6rem;
  width: 100%;
  ul {
    .div2 {
      width: 100%;
      color: white;
      font-size: 0.38rem;
      text-align: center;
      font-weight: 500;
      position: relative;
      .img {
        width: 96%;
        height: 4rem;
        margin-top:0.1rem;
      }
    }
  }
  .p1{
    position: absolute;
    bottom: 1.2rem;
    font-size:0.34rem;
    margin-left:0.2rem;
  }
  .p2{
    width:1.4rem;
    height:0.6rem;
    border:1px solid white;
    border-radius: 0.3rem;
    position: absolute;
    color:white;
    bottom:0.3rem;
    text-align: center;
    font-size:0.26rem;
    margin-left:3rem;
    line-height: 0.6rem;
  }
}
</style>