<template>
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
</template>
<script>
  import transit from '@/transit/goods.js'
  export default {
    props: {
      btnDisableClass: {
        type: String,
        default: 'gray'
      },
      times: {
        default: 1,
        type: Number
      },
      maxVaule: {
        type: Number,
        default: 9999
      },
      minValue: {
        type: Number,
        default: 1
      },
      groupActPrice: {
        type: String,
        default: '0.0'
      },
      startValue: {
        type: Number,
        default: 0
      },
      actId: {
        type: Number,
        required: true
      },
      groupId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        inputValue: 0
      }
    },
    mounted() {},
    methods: {
      minusHandle() {
        if (this.inputValue <= 0) {
          this.inputValue = 0
          return
        }
        this.inputValue--
        transit.dataChange(
          this.actId,
          this.groupId,
          this.inputValue,
          parseFloat(this.groupActPrice, 10)
        )
      },
      addHandle() {
        let newValue = this.inputValue + 1 * this.times
        this.inputValue = newValue > this.maxVaule ? this.maxVaule : newValue
        transit.dataChange(
          this.actId,
          this.groupId,
          this.inputValue,
          parseFloat(this.groupActPrice, 10)
        )
      },
      inputHandle(e) {
        this.inputValue = parseInt(this.inputValue, 10) || 0

        transit.dataChange(
          this.actId,
          this.groupId,
          this.inputValue,
          parseFloat(this.groupActPrice, 10)
        )
      },
      blurHandle() {
        this.inputValue = parseInt(this.inputValue, 10) || 0
        transit.dataChange(
          this.actId,
          this.groupId,
          this.inputValue,
          parseFloat(this.groupActPrice, 10)
        )
      }
    }
  }
</script>
<style lang="scss" scoped>
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
</style>
