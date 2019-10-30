<template>
  <div class="box">
    <div class="box2">
      <div class="div1">
        <h3>
          <router-link to="/chosenChild">精选专题</router-link>
        </h3>
        <p>></p>
      </div>
      <div class="div2">
        <div class="div3">
          <ul v-for="(item,key) in list" :key="key" class="ul">
            <router-link :to="'/chosenChild2/'+item.id">
              <li>
                <img :src="item.pic" />
              </li>
              <li class="li1">{{item.title}}</li>
              <li class="li2">{{item.descript}}</li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <Recommend></Recommend>
  </div>
</template>

<script>
import Recommend from "@/pages/shop/recommend";
import Product from "@/services/product";
const _product = new Product();

export default {
  components: { Recommend },
  data() {
    return {
      list: []
    };
  },
  created() {
    _product.chosen().then(res => {
      var { data } = res.data;
      this.list = data;
      this.list = this.list.splice(0, 3);
    });

    // this.axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
    //   var data = res.data.data;
    //   for (var i in data) {
    //     this.list.push(data[i]);
    //   }
    //   this.list = this.list.splice(0, 3);
    // });
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 7.1rem;
  .box2 {
    width: 100%;
    height: 6.7rem;
    background: white;
    margin-top: 0.3rem;
  }
}
.div1 {
  display: flex;
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid rgb(219, 219, 219);
  margin-top: 0.1rem;
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
  overflow: hidden;
  .div3 {
    overflow: auto;
    display: flex;
    img {
      width: 7.2rem;
      height: 4.2rem;
      margin-left: 0.1rem;
      margin-top: 0.16rem;
      border-radius: 0.1rem;
    }
    .li1 {
      margin-top: 0.1rem;
      margin-left: 0.2rem;
      font-size: 0.28rem;
    }
    .li2 {
      width: 6.2rem;
      font-size: 0.22rem;
      margin-left: 0.2rem;
      margin-top: 0.14rem;
      color: rgb(177, 177, 177);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
a {
  text-decoration: none;
  color: gray;
}
</style>