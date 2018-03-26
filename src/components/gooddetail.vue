<template>
<div class="goods">
<div class="goodsImg">
  <img :src="goodInfo.goodsImg"
  :alt="goodInfo.goodsName"
  onerror="this.src='http://img.tqmall.com/images/no_picture.gif?t=20180101'" />
</div>
<p class="goodsName">
  {{goodInfo.goodsName}}
</p>
<p class="units">
  <span v-if=" groupInfo.remainNum && groupInfo.remainNum < 5000">库存:{{groupInfo.remainNum}}</span>
  <span>购买单位：{{goodInfo.numberDescription}}</span>
</p>
<div class="price">
  <span>¥<em>{{groupInfo.groupActPrice}}</em></span>
  <div class="tq_enter">
    <span class="span_op minus" @click="minusHandle">－</span>
    <input
    v-model="inputValue"
    type="text"
    class="J-number"
    maxlength="4"
    value="0"
    @input="inputHandle"
    @blur="blurHandle"
   >
     <span class="span_op add" @click="addHandle">＋</span>
  </div>
</div>
</div>
</template>
<script>
  import transit from "@/transit/goods.js";
  export default {
    props: {
      groupInfo: {
        type: Object,
        required: true
      },
      goodInfo: {
        type: Object,
        required: true
      },
      btnDisableClass: {
        type: String,
        default: "gray"
      },
      times: {
        default: 1,
        type: Number
      }
    },
    data() {
      return {
        inputValue: 0,
        maxVaule: 0,
        minValue: 0,
        startValue: 0,
        initValue: 0
      };
    },
    mounted() {
      let remain = this.groupInfo.remainNum,
        alreadyBuy = this.groupInfo.alreadyBuyNum || 0;
      this.minValue = this.groupInfo.groupMinNumber;
      this.maxVaule = this.groupInfo.groupMaxNumber;
      remain = remain || this.maxVaule;
      this.maxVaule = Math.min(this.maxVaule - alreadyBuy, remain);
      this.minValue =
        this.maxVaule < this.minValue ? this.maxVaule : this.minValue;
    },
    methods: {
      minusHandle() {
        if (this.inputValue <= 0) {
          this.inputValue = 0;
          return;
        }
        this.inputValue--;
        transit.dataChange(
          this.goodInfo.actId,
          this.goodInfo.groupId,
          this.inputValue,
          this.groupInfo.groupActPrice
        );
        console.log("minusHandle");
      },
      addHandle() {
        let newValue = this.inputValue + 1 * this.times;
        this.inputValue = newValue > this.maxVaule ? this.maxVaule : newValue;
        transit.dataChange(
          this.goodInfo.actId,
          this.goodInfo.groupId,
          this.inputValue,
          this.groupInfo.groupActPrice
        );
        console.log("addHandle");
      },
      inputHandle(e) {

        this.inputValue = parseInt(this.inputValue, 10) ||0;

        transit.dataChange(
          this.goodInfo.actId,
          this.goodInfo.groupId,
          this.inputValue,
          this.groupInfo.groupActPrice
        );
        console.log("inputHandle");
      },
      blurHandle() {
        this.inputValue = parseInt(this.inputValue, 10) ||0;
        transit.dataChange(
          this.goodInfo.actId,
          this.goodInfo.groupId,
          this.inputValue,
          this.groupInfo.groupActPrice
        );
        console.log("blurHandle");
      }
    }
  };
</script>
<style lang="scss" scoped>
  .goods {
    width: 217px;
    min-height: 320px;
    border: 6px solid #f8f8f8;
    background: #fff;
    cursor: pointer;
    position: relative;
    .goodsImg {
      text-align: center;
      vertical-align: middle;
      height: 225px;
      img {
        width: 215px;
        height: 225px;
      }
    }
    .goodsName {
      font-size: 13px;
      color: #666;
      line-height: 20px;
      word-break: break-all;
      padding: 0 10px;
      overflow: hidden;
      height: 40px;
    }
    .units {
      padding: 0 10px;
      height: 15px;
      line-height: 15px;
      font-size: 12px;
      color: #9d9d9d;
      span {
        margin-right: 10px;
      }
    }
    .price {
      // height: 40px;
      color: #d70000;
      font-size: 12px;
      padding: 3px 10px;
      font: 700 16px/1.5 arial;
      position: relative;
      em {
        font-size: 20px;
      }
      .tq_enter {
        overflow: hidden;
        width: 115px;
        border-radius: 4px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        position: absolute;
        bottom: 0;
        right: 5px;
        background: #fff;
        display: flex;
        align-items: center;
        .span_op {
          display: inline-block;
          width: 30px;
          height: 30px;
          font-size: 20px;
          line-height: 30px;
          color: #fff;
          cursor: pointer;
          -moz-user-select: none;
          -webkit-user-select: none;
          user-select: none;
          text-align: center;
          color: #ffffff;
        }
        .minus,
        .gray {
          background: #dddddd;
        }
        .add {
          background: #fc5d55;
        }
        .J-number {
          width: 55px;
          border: 0;
          padding: 0;
          margin: 0;
          line-height: 28px;
          height: 28px;
          text-align: center;
          font-size: 16px;
          color: #d7d7d7;
          border-top: 1px solid #d2d2d2;
          border-bottom: 1px solid #d2d2d2;
        }
      }
    }
  }
</style>

