<template>
  <div class="goods">
    <div class="goodsImg">
      <img :src="goodInfo.goodsImg" :alt="goodInfo.goodsName" onerror="this.src='http://img.tqmall.com/images/no_picture.gif?t=20180101'" />
    </div>
    <p class="goodsName">
      {{goodInfo.goodsName}}
    </p>
    <p class="units">
      <span v-if=" groupInfo.remainNum && groupInfo.remainNum < 5000">库存:{{groupInfo.remainNum}}</span>
      <span>购买单位：{{goodInfo.numberDescription}}</span>
    </p>
    <div class="price">
      <span>¥
        <em>{{groupInfo.groupActPrice}}</em>
      </span>
      <amount-btn :maxVaule='maxVaule' :minValue='minValue' :startValue='startValue' :times='times' :btnDisableClass='btnDisableClass' :actId='goodInfo.actId' :groupId='goodInfo.groupId' :groupActPrice='groupInfo.groupActPrice' />
    </div>
  </div>
</template>
<script>
  import AmountBtn from '@/components/amountbtn'
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
        default: 'gray'
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
      }
    },
    components: {
      'amount-btn': AmountBtn
    },
    mounted() {
      let remain = this.groupInfo.remainNum,
        alreadyBuy = this.groupInfo.alreadyBuyNum || 0
      this.minValue = this.groupInfo.groupMinNumber
      this.maxVaule = this.groupInfo.groupMaxNumber
      remain = remain || this.maxVaule
      this.maxVaule = Math.min(this.maxVaule - alreadyBuy, remain)
      this.minValue =
        this.maxVaule < this.minValue ? this.maxVaule : this.minValue
    },
    methods: {}
  }
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
    }
  }
</style>

