<template>
  <div>
    <div class="div1">购物车</div>
    <div class="div2">
      <img src="/static/img/addcar.png" alt />
    </div>
    <div class="div3">
      <p>猜你喜欢</p>
    </div>

    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.div1 {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #e9e9e9;
  background: white;
  text-align: center;
  line-height: 0.8rem;
  color: rgb(41, 41, 41);
}
.div2 {
  width: 100%;
  height: 4.4rem;
  background: #f5f5f5;
  text-align: center;
  img {
    width: 2.2rem;
    height: 2.2rem;
    margin-top: 1rem;
  }
}
.div3{
  width:100%;
  text-align: center;
  p{
    width:100%;
    height:0.9rem;
    line-height: 0.9rem;
    color: #333333;
  }
}
</style>