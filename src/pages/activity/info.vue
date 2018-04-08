<template>
  <div>
   <header-top :bgHeight="603" />
  <div class="content" :style="{background:activityInfo.bgColor}">
    <normal-act
    v-if="activityInfo.tagType == 0"
    :actId='activityInfo.actId'
    :keyValue='activityInfo.key'/>
    <tab-act
    v-if='activityInfo.tagType == 1'
    :actId='activityInfo.actId'
    :keyValue='activityInfo.key'/>
  </div>
   <side-bar />
  </div>
</template>
<script>
  import HeaderTop from '@/components/head'
  import SideBar from '@/components/sidebar'
  import NormalAct from '@/components/normalact'
  import TabAct from '@/components/tabact'
  import { ActivityInfo } from '@/service/activity/goodsApi'

  export default {
    name: 'normal',
    data() {
      return {
        activityInfo: {}
      }
    },
    components: {
      'header-top': HeaderTop,
      'side-bar': SideBar,
      'normal-act': NormalAct,
      'tab-act': TabAct
    },
    created() {},
    mounted() {
      this.getActivityInfo()
    },
    methods: {
      async getActivityInfo() {
        let res = await ActivityInfo()
        if (res.data.success) {
          this.activityInfo = res.data.data
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .content {
    background-color: #400e8a;
    width: 100%;
    padding-top: 20px;
    .title {
      background: url('//img.tqmall.com/act/web/2018/03/supperDay/top_bg.png')
        no-repeat center;
      width: 1016px;
      height: 92px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px auto;
      color: #ffdd44;
      font-size: 40px;
      font-weight: bold;
      word-spacing: 20px;
      letter-spacing: 20px;
      text-indent: 20px;
    }
    .goodsContent {
      width: 1016px;
      margin: 20px auto;
      display: -webkit-flex;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .goodsItem {
        width: 231px;
        margin: 8px 5px;
      }
    }
  }
</style>

