<template>
  <div>
    <p class="img">
      <img src="/static/img/icon.png" alt />
    </p>
    <p class="p1">
      <router-link to="/">页面找不到了~点击返回首页</router-link>
    </p>
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
.p1 {
  width: 100%;
  height: 1.2rem;
  text-align: center;
  line-height: 1.2rem;
  a {
    font-size: 0.4rem;
    text-decoration: none;
    color: rgb(53, 191, 255);
  }
}
.img {
  width: 100%;
  height: 3rem;
  text-align: center;
  margin-top: 3rem;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-top: 0.5rem;
  }
}
</style>