<template>
  <div id="div">
    <div class="box">
      <el-carousel>
        <el-carousel-item v-for="(item,key) in img" :key="key">
          <a href="https://www.baidu.com" target="_blank">
            <img :src="'/static/img/'+item" class="img" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="box2">
      <ul class="ul1">
        <router-link to="/sigin" tag="li">
          <img src="/static/img/four.png" />
          <p>签到</p>
        </router-link>
        <router-link to="/gift" tag="li">
          <img src="/static/img/three.png" />
          <p>礼券</p>
        </router-link>
        <router-link to="/barginChild" tag="li">
          <img src="/static/img/two.png" />
          <p>砍价</p>
        </router-link>
        <router-link to="/chosenChild" tag="li">
          <img src="/static/img/one.png" />
          <p>专栏</p>
        </router-link>
      </ul>
    </div>
    <Bargin></Bargin>
  </div>
</template>

<script>
import Bargin from "@/pages/shop/bargin";
export default {
  components: { Bargin },
  data() {
    return {
      img: ["eye.png", "star.png", "bei.png"]
    };
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 6.4rem;
}
.box2 {
  width: 100%;
  height: 2.4rem;
  background: rgb(243, 241, 241);
  .ul1 {
    width: 100%;
    height: 2.2rem;
    display: flex;
    text-align: center;
    background: white;
    justify-content: space-around;
    border-top-left-radius: 1rem 0.5rem;
    border-top-right-radius: 1rem 0.5rem;
    img {
      width: 1rem;
      height: 0.9rem;
      margin-top: 0.4rem;
    }
    p {
      font-weight: 500;
      font-size:0.28rem;
    }
  }
}
</style>