<template>
  <div class="b">
    <div class="box">
      <el-carousel>
        <el-carousel-item v-for="(item,key) in img" :key="key">
          <img :src="'/static/img/'+item" class="img" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="div">
      <ul class="ul">
        <router-link :to="'/arr/'+i.id" v-for="(i,k) in arr" :key="k" tag="li">
          <img :src="i.icon" />
          <p>{{i.name}}</p>
        </router-link>
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
      img: ["eye.png", "star.png", "bei.png"],
    };
  },
  created() {
    _product.sort().then(res => {
      var data=res.data.data
      this.$store.state.list =data;
      this.$store.state.arr =data;

    });
  },
  computed: {
    arr() {
      return this.$store.state.arr;
    },
    list() {
      return this.$store.state.list;
    }
  }
};
</script>

<style lang="scss" scoped>
.b {
  height: 20rem;
  .box {
    height: 2.6rem;
    overflow: hidden;
    margin-top: 0.2rem;
    img {
      width: 5.2rem;
      height: 2.6rem;
      margin-left: 0.2rem;
      border-radius: 0.1rem;
    }
  }
  .div {
    width: 5rem;
    height: 20rem;
    float: right;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        text-align: center;
        margin-top:0.1rem;
        img {
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 0.1rem;
        }
      }
    }
  }
}
</style>