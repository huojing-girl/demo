<template>
  <div>
  <p @click="back()"><</p>
    <div class="div">
      <h2 v-html="list.title"></h2>
      <img :src="list.pic" alt />
      <p v-html="list.content"></p>
    </div>
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
        `https://api.it120.cc/small4/cms/news/detail?id=${this.$route.params.id}`
      )
      .then(res => {
        this.list = res.data.data;
      });
  },
  methods:{
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.div {
  h2 {
    text-align: center;
    font-size: 0.5rem;
    font-weight: 520;
    margin-top: 0.3rem;
  }
  img {
    width: 100%;
    height: 100%;
    margin-top: 0.3rem;
  }
  p {
    margin-top: 0.1rem;
    line-height: 0.6rem;
  }
}
a {
  text-decoration: none;
  color: gray;
  font-size: 0.5rem;
}
</style>