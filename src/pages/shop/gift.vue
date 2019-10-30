<template>
  <div>
    <div class="div1">
      <div class="p1">
        <p @click="back()"><</p>
      </div>
      <p class="p2">
        <input type="text" placeholder="请输入礼券码" class="inp" />
        <button>兑换</button>
      </p>
    </div>
    <div class="div2">
      <div class="box1">
        <div class="a1">
          <h1>1</h1>
          <p class="ap1">元</p>
          <div class="box2">
            <p>满减1</p>
            <p>满100元使用</p>
          </div>
          <button>立即领取</button>
        </div>
        <div class="a2">领取7天内有效</div>
      </div>
      <div class="box3">
        <div class="a1">
          <h1>0</h1>
          <p class="ap1">元</p>
          <div class="box4">
            <p>满减</p>
            <p>满10元使用</p>
          </div>
          <button>立即领取</button>
        </div>
        <div class="a2">领取7天内有效</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.div1 {
  width: 100%;
  height: 5rem;
  background: url("/static/img/three.jpg") no-repeat;
  background-size: 100% 100%;
  .p1 {
    p {
      font-size: 0.5rem;
      margin-left: 0.2rem;
    }
  }
  .p2 {
    .inp {
      width: 3.94rem;
      height: 0.8rem;
      border: 1.6px solid #fbaa46;
      border-radius: 0.12rem;
      margin-top: 2.8rem;
      margin-left: 0.9rem;
      outline: none;
      padding-left: 0.14rem;
    }
    input::-webkit-input-placeholder {
      color: #fbaa46;
      padding-left: 0.1rem;
    }
    button {
      width: 1.2rem;
      height: 0.7rem;
      color: white;
      font-size: 0.26rem;
      background: #ee7c7b;
      border: none;
      border-radius: 0.2rem;
      margin-left: 0.3rem;
      outline: none;
    }
  }
}
.div2 {
  width: 100%;
  height: 5rem;
  .box1 {
    width: 95%;
    height: 2.2rem;
    border-radius: 0.16rem;
    background: #ec7877;
    margin: 0.18rem;
    .a1 {
      width: 100%;
      height: 1.6rem;
      border-bottom: 5px dotted #cc7773;
      display: flex;
      h1 {
        font-size: 0.6rem;
        font-weight: 500;
        color: white;
        margin-left: 0.35rem;
        margin-top: 0.38rem;
      }
      p {
        color: white;
      }
      .ap1 {
        margin-left: 0.3rem;
        margin-top: 0.78rem;
        font-size: 0.28rem;
      }
      .box2 {
        margin-left: 0.4rem;
        p:nth-of-type(1) {
          margin-top: 0.3rem;
        }
        p:nth-of-type(2) {
          margin-top: 0.1rem;
          font-size: 0.26rem;
        }
      }
      button {
        width: 1.4rem;
        height: 0.56rem;
        font-size: 0.26rem;
        background: #fce8e7;
        color: #ce565e;
        border: none;
        border-radius: 0.12rem;
        margin-left: 2.2rem;
        margin-top: 0.5rem;
        outline: none;
      }
    }
    .a2 {
      width: 100%;
      height: 0.64rem;
      background: #cc7773;
      color: white;
      margin-top: -0.03rem;
      border-radius: 0.16rem;
      font-size: 0.26rem;
      padding-left: 0.3rem;
      padding-top: 0.14rem;
    }
  }
  .box3 {
    width: 95%;
    height: 2.2rem;
    border-radius: 0.16rem;
    background: #ec7877;
    margin: 0.18rem;
    .a1 {
      width: 100%;
      height: 1.6rem;
      border-bottom: 5px dotted #cc7773;
      display: flex;
      h1 {
        font-size: 0.6rem;
        font-weight: 500;
        color: white;
        margin-left: 0.35rem;
        margin-top: 0.38rem;
      }
      p {
        color: white;
      }
      .ap1 {
        margin-left: 0.3rem;
        margin-top: 0.78rem;
        font-size: 0.28rem;
      }
      .box4 {
        margin-left: 0.4rem;
        p:nth-of-type(1) {
          margin-top: 0.3rem;
        }
        p:nth-of-type(2) {
          margin-top: 0.1rem;
          font-size: 0.26rem;
        }
      }
      button {
        width: 1.4rem;
        height: 0.56rem;
        font-size: 0.26rem;
        background: #fce8e7;
        color: #ce565e;
        border: none;
        border-radius: 0.12rem;
        margin-left: 2.34rem;
        margin-top: 0.5rem;
        outline: none;
      }
    }
    .a2 {
      width: 100%;
      height: 0.64rem;
      background: #cc7773;
      color: white;
      margin-top: -0.03rem;
      border-radius: 0.16rem;
      font-size: 0.26rem;
      padding-left: 0.3rem;
      padding-top: 0.14rem;
    }
  }
}
</style>