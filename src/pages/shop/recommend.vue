<template>
  <div>
    <div class="box">
      <div class="div1">
        <h3>人气推荐</h3>
        <p>></p>
      </div>
      <div class="div2">
        <div v-for="(item,key) in list" :key="key" class="div3">
          <router-link :to="'/detail/'+item.id" tag="ul">
            <li class="img">
              <img :src="item.pic"/>
              <p class="p1">{{item.name}}</p>
              <p class="p2">{{item.characteristic}}</p>
            </li>
            <li class="li">￥{{item.minPrice}}</li>
          </router-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/pages/shop/footer";
import Product from "@/services/product";
const _product = new Product();
export default {
  components: { Footer },
  data() {
    return {
      list: []
    };
  },

  created() {
    _product.recommend().then(res => {
      var data = res.data.data;
      for (var i in data) {
        this.list.push(data[i]);
      }
      this.list = this.list.splice(8, 4);
    });
  }

  // mounted() {
  //   this.axios.get("https://api.it120.cc/small4/shop/goods/list").then(res => {
  //     var data = res.data.data;
  //     for (var i in data) {
  //       this.list.push(data[i]);
  //     }
  //     this.list = this.list.splice(8, 4);
  //   });
  // }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 12rem;
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
  .div2 {
    display: flex;
    flex-wrap: wrap;
    .div3 {
      ul {
        margin-left: 0.24rem;
        .img {
          position: relative;
          img {
            width: 3.4rem;
            height: 4rem;
            margin-top: 0.1rem;
          }
          .p1 {
            position: absolute;
            bottom: 0.6rem;
            font-size: 0.26rem;
            left: 0.1rem;
          }
          .p2 {
            font-size: 0.22rem;
            color: rgb(167, 167, 167);
            position: absolute;
            bottom: 0.2rem;
            margin-left: 0.1rem;
          }
        }
        .li {
          color: red;
          font-weight: 550;
          margin-top: 0.04rem;
        }
      }
    }
  }
}
</style>