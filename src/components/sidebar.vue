<template>
  <div class="fixed-cart">
    <span class="cart-num">1</span>
        <div class="cart-des">
            <p>已选<span class="red G_total">{{totalnum}}</span>件</p>
            <p>共计<font class="red J_total">{{totalprice}}</font>元</p>
        </div>
        <div class="go-buy" @click="gobuy">立即<br>
            结算
        </div>
        <div class="to-top"></div>
    </div>
</template>
<script>
  import transit from "@/transit/goods.js";
  export default {
    name: "sidebar",
    computed: {
      totalnum() {
        return transit.totalNumber;
      },
      totalprice() {
        return transit.totalPrice;
      }
    },
    methods: {
      gobuy() {
        if (transit.goodsArr.length == 0) {
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .fixed-cart {
    position: fixed;
    right: 20px;
    top: 150px;
    width: 99px;
    height: 278px;
    background: url("../../static/images/settle.png") no-repeat left top;
    .cart-num {
      position: absolute;
      display: none;
      background-position: -204px -9px;
      width: 40px;
      height: 20px;
      color: #ffffff;
      line-height: 20px;
      left: 42px;
      top: 8px;
      text-align: center;
      white-space: nowrap;
    }

    .cart-des {
      position: absolute;
      font-size: 12px;
      color: #333;
      left: 0;
      top: 79px;
      line-height: 20px;
      text-align: center;
      z-index: 999;
      white-space: nowrap;
      font-weight: bold;
      width: 100%;
      color: #777777;
    }

    .go-buy {
      margin: 160px 8px;
      width: 80px;
      text-align: center;
      color: #ffffff;
      font-family: "Source Han Sans CN";
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }

    .to-top {
      margin: 0px 8px;
      width: 40px;
      height: 65px;
      cursor: pointer;
      position: absolute;
      left: 30px;
      bottom: 0px;
    }
  }
</style>
