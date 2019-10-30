<template>
  <div>
    <div class="div1">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="搜索商品" />
    </div>
    <div class="div2">
      <ul class="d1">
        <li :class="index==1?'active':''" @click="allshop">所有分类</li>
        <li :class="index==2?'active':''" @click="jujia">居家生活</li>
        <li :class="index==3?'active':''" @click="peishi">配件装饰</li>
        <li :class="index==4?'active':''" @click="clothes">新品服装</li>
        <li :class="index==5?'active':''" @click="dianqi">日用电器</li>
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
    return {
      index:1,
    };
  },

  methods:{
    allshop(){
      this.index=1
      this.$store.commit('allshop')
    },
    jujia(){
      this.index=2
      this.$store.commit('jujia')
    },
    peishi(){
      this.index=3
      this.$store.commit('peishi')
    },
    clothes(){
      this.index=4
      this.$store.commit('clothes')
    },
    dianqi(){
      this.index=5
      this.$store.commit('dianqi')
    }
  }
};
</script>

<style lang="scss" scoped>
.div1 {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid gainsboro;
  i {
    position: absolute;
    left: 0.5rem;
    top: 0.26rem;
    color: gray;
    z-index: 200;
  }
  input {
    position: relative;
    width: 5.4rem;
    height: 0.48rem;
    border: none;
    border-radius: 0.3rem;
    margin-top: 0.14rem;
    margin-left: 0.2rem;
    background: rgb(231, 231, 231);
    outline: none;
    padding-left: 0.8rem;
  }
}
.div2 {
  width: 2rem;
  float: left;
  margin-top:0.2rem;
  .d1 {
    height: auto;
    li {
      width: 100%;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
      margin-top: 0.1rem;
      a {
        text-decoration: none;
        color: gray;
        font-size: 0.26rem;
      }
    }
  }
}
.active{
  border-left:2px solid firebrick;
  color: firebrick;
}
</style>