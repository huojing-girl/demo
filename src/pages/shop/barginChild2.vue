<template>
  <div>
      
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: ""
    };
  },
  created() {
    this.axios
      .get(
        `https://api.it120.cc/small4/shop/goods/kanjia/list?id=${this.$route.params.id}`
      )
      .then(res => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
  }
};
</script>

<style lang="scss" scoped>
</style>