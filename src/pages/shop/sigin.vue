<template>
  <div>
    <div class="box">
      <div class="div1">
        <p class="p1">
          <router-link to="/"><</router-link>
        </p>
        <p class="p2">您的可用积分为</p>
        <p class="p3">999</p>
      </div>
      <div class="div2"></div>
    </div>
    <div class="div3">签到</div>
    <div class="div4">
        <div class="div5">
          <div class="d5">
            <p class="p4">消费购物</p>
            <p class="p5">购物完成，确认收货后立返积分</p>
          </div>
          <router-link to="/" class="d6">去购物</router-link>
        </div>
        <div class="div6">
          <div class="d7">
            <p class="p6">积分兑换</p>
            <p class="p7">积分兑好礼，20积分即可兑换礼券</p>
          </div>
          <router-link to="/gift" class="d8">去兑换</router-link>
        </div>
    </div>



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
  height: 4.2rem;
  background: linear-gradient(to right, #f1ebd9, #fdfaf1);
  a {
    text-decoration: none;
    font-size: 0.5rem;
  }
  .p1 {
    width: 0.5rem;
    height: 0.58rem;
    background: white;
    border-radius: 50%;
    text-align: center;
    line-height: 0.58rem;
  }
  .p2 {
    text-align: center;
    color: #7e7e7e;
    font-size: 0.3rem;
    line-height:2.2rem;
  }
  .p3 {
    text-align: center;
    font-size: 0.64rem;
    color: #b2a078;
    line-height: 0.5rem;
    font-weight: 600;
  }
}
.div2 {
  width: 100%;
  height: 1.3rem;
  background: #e8e1cf;
}
.div3{
    width: 3.16rem;
    height:0.7rem;
    background: #b3a078;
    border-radius: 0.3rem;
    text-align: center;
    line-height: 0.7rem;
    color: white;
    margin: 0.5rem auto;
}
.div4{
    width:100%;
    height:3.6rem;
    margin-top:0.7rem;
    .div5{
        width:6.94rem;
        height:1.5rem;
        background:#f3eae1 url('/static/img/two.jpg') no-repeat;
        background-size:1.3rem 1.6rem;
        border-radius: 0.14rem;
        margin: 0 auto;
        margin-top:0.14rem;
        display: flex;
        .d5{
          color:#e5bd93;
          .p4{
            width:4rem;
            height:1rem;
            margin-left:1.7rem;
            line-height: 1rem;
            font-size:0.28rem;
          }
          .p5{
            margin-left:1.7rem;
            font-size:0.24rem;
          }
        }
        .d6{
          width:0.88rem;
          height:0.46rem;
          background: #e1b68c;
          color: white;
          text-decoration: none;
          font-size:0.26rem;
          text-align: center;
          line-height: 0.46rem;
          border-radius: 0.1rem;
          margin-top:0.56rem;
        }
    }
    .div6{
        width:6.94rem;
        height:1.5rem;
        background:#ede6d6 url('/static/img/one.jpg') no-repeat;
        background-size:1.3rem 1.6rem;
        border-radius: 0.14rem;
        margin: 0 auto;
        margin-top:0.34rem;
        display: flex;
        .d7{
          color: #cfbf9d;
          .p6{
            width:4rem;
            height:1rem;
            margin-left:1.7rem;
            line-height: 1rem;
            font-size:0.28rem;
          }
          .p7{
            margin-left:1.7rem;
            font-size:0.24rem;
          }
        }
        .d8{
          width:0.88rem;
          height:0.46rem;
          background: #b29d74;
          color: white;
          text-decoration: none;
          font-size:0.26rem;
          text-align: center;
          line-height: 0.46rem;
          border-radius: 0.1rem;
          margin-top:0.56rem;
        }
    }
}
</style>