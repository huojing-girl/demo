<template>
  <div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.$store.state.user =
      JSON.parse(window.localStorage.getItem("user")) || [];
    this.$store.state.userInfo =
      JSON.parse(window.localStorage.getItem("userInfo")) || [];
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.fade-enter-active,
 .fade-leave-active  {
  transition: all 0.5s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  position: absolute;
  transform: translate(-100%);
}
.v4_div {
  padding-bottom: 1rem;
  ul {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    li {
      clear: both;
      line-height: 0.5rem;
    }
  }
  .img-lazyloaded {
    width: 100% !important;
    height: 2rem !important;
  }
}
</style>
