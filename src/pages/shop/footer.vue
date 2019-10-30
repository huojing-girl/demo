<template>
  <div>
    <div class="div">
      <ul>
        <router-link to="/" tag="li">
          <i class="el-icon-takeaway-box"></i>
          <p class="p2">首页</p>
        </router-link>
        <router-link to="/sort" tag="li">
          <i class="el-icon-menu"></i>
          <p class="p2">分类</p>
        </router-link>
        <router-link to="/car" tag="li">
          <i class="el-icon-s-goods"></i>
          <p class="p2">购物车</p>
        </router-link>
        <router-link to="/my" tag="li">
          <i class="el-icon-user"></i>
          <p class="p2">个人</p>
        </router-link>
      </ul>
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
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.div {
  width: 100%;
  height: 1.2rem;
  border-top: 1px solid gainsboro;
  position: fixed;
  bottom: 0rem;
  background: white;
  ul {
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: rgb(173, 173, 173);
    li {
      i {
        margin-top: 0.1rem;
        font-size: 0.5rem;
      }
      p {
        font-size: 0.28rem;
        margin-top: 0.1rem;
      }
      .p2 {
        font-size: 0.26rem;
      }
    }
    a {
      color: rgb(173, 173, 173);
      text-decoration: none;
    }
    .router-link-exact-active {
      > i,
      >.p2 {
        color: firebrick;
      }
    }
  }
}
</style>