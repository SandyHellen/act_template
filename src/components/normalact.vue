<template>
  <div>
    <template v-if="goodsData&&goodsData.groupInfoBOPagingResult&&goodsData.groupInfoBOPagingResult.list&&goodsData.groupInfoBOPagingResult.list.length>0">
    <h1
    class="title">{{goodsData.activityName}}</h1>
    <ul
    class="goodsContent"
    >
     <template v-for="(group,group_index) in goodsData.groupInfoBOPagingResult.list">
       <li
       is="good-detail"
       class="goodsItem"
       v-if="!goods.gift"
       v-for="(goods ,goods_index) in group.groupGoodsInfoBOs"
       :key="'goods' + goods.goodsId + group_index + goods_index"
       :groupInfo="group"
       :goodInfo="goods"
       >
       </li>
     </template>
    </ul>
    </template>
  </div>
</template>
<script>
  import GoodsDetail from '@/components/gooddetail'
  import { GoodsList, YunxiuList } from '@/service/activity/goodsApi'

  export default {
      name: 'normal',
      props: {
          actId: {
              require: true,
              type: Number
          },
          keyValue: {
              require: true,
              type: String
          }
      },
      data() {
          return {
              goodsData: {}
          }
      },
      components: {
          'good-detail': GoodsDetail
      },
      created() {},
      mounted() {
          this.actId
              ? this.getGoodsList()
              : this.keyValue ? this.getYunxiuList() : null
      },
      methods: {
          // 普通的商品接口
          getGoodsList() {
              GoodsList({
                  uid: 675995,
                  cityId: 383,
                  actId: this.actId,
                  tagType: 0
              }).then(res => {
                  let data = res.data
                  if (res.data.success) {
                      this.goodsData = data.data
                  }
              })
          },
          // 云修商品接口
          getYunxiuList() {
              GoodsList({
                  uid: 675995,
                  cityId: 383,
                  key: this.key,
                  tagType: 0
              }).then(res => {
                  let data = res.data
                  if (res.data.success) {
                      this.goodsData = data.data
                  }
              })
          }
      }
  }
</script>
<style scoped lang="scss">
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
</style>

