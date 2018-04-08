<template>
  <div>
    <ul class="ul-title"
    v-if="goodsData&&goodsData.activityTagInfoBOList&&goodsData.activityTagInfoBOList.length>0">
      <li
      v-for="(tab,tab_index) in goodsData.activityTagInfoBOList"
      :key="'tab'+tab.tagId"
      class="title-item"
      :class="{active:currentIndex == tab_index}"
      @click="tabChange(tab_index)">
        {{tab.tagName}}
      </li>
    </ul>
    <template
    v-for="(tab,tab_index) in goodsData.activityTagInfoBOList"
    v-if=" goodsData && goodsData.activityTagInfoBOList && goodsData.activityTagInfoBOList.length > 0 ">
      <ul
      class="goodsContent"
      v-for="(group,group_index) in tab.groupInfoBOList"
      :key="'group'+tab_index+ group_index "
      :class="{isShow:currentIndex == tab_index}">
        <li is="good-detail"
        class="goodsItem"
        v-if="!goods.gift"
        v-for="(goods ,goods_index) in group.groupGoodsInfoBOs"
        :key="'goods' + tab + group_index + goods_index"
        :groupInfo="group"
        :goodInfo="goods">
        </li>
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
              goodsData: {},
              currentIndex: 0
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
          tabChange(currentIndex) {
              this.currentIndex = currentIndex
          },
          // 普通的商品接口
          getGoodsList() {
              GoodsList({
                  uid: 675995,
                  cityId: 383,
                  actId: this.actId,
                  tagType: 1
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
                  tagType: 1
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
  .content {
      background-color: #400e8a;
      width: 100%;
      padding-top: 20px;
      .ul-title {
          display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
          display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
          display: -ms-flexbox; /* TWEENER - IE 10 */
          display: -webkit-flex; /* NEW - Chrome */
          display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
          width: 1016px;
          height: 36px;
          flex-wrap: nowrap;
          justify-content: space-around;
          align-items: center;
          margin: 0px auto;
          color: #ffdd44;
          font-size: 14px;
          background-color: #ad2a28;
          color: #781201;
          text-align: justify;
          .title-item {
              text-align: center;
              margin: 0;
              min-width: 0;
              height: 36px;
              line-height: 36px;
              cursor: pointer;
              -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
              -moz-box-flex: 1; /* OLD - Firefox 19- */
              -webkit-flex: 1; /* Chrome */
              -ms-flex: 1; /* IE 10 */
              flex: 1; /* NEW, Spec - Opera 12.1, Firefox 20+ */
          }
          .active {
              background-color: #ecbc27;
              color: #781201;
          }
      }
      .goodsContent {
          width: 1016px;
          margin: 20px auto;
          display: none;
          .goodsItem {
              width: 231px;
              margin: 8px 5px;
              float: left;
              display: inline-block;
          }
      }
      .isShow {
          display: block;
      }
  }
</style>

