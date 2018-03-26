<template>
  <div>
   <header-top :bgHeight="603" />
  <div class="content">
    <template v-if="goodsData&&goodsData.groupInfoBOPagingResult&&goodsData.groupInfoBOPagingResult.list&&goodsData.groupInfoBOPagingResult.list.length>0">
    <h1
    class="title">{{goodsData.activityName}}</h1>
    <ul
    class="goodsContent"
    >
     <template v-for="group in goodsData.groupInfoBOPagingResult.list">
       <li
       class="goodsItem"
       v-if="!goods.gift"
       v-for="goods in group.groupGoodsInfoBOs"
       :key="goods.goodsId"
       is="good-detail"
       :groupInfo="group"
       :goodInfo="goods"
       >
       </li>
     </template>
    </ul>
    </template>
  </div>
   <sidebar />
  </div>
</template>
<script>
  import HeaderTop from "@/components/head";
  import SideBar from "@/components/sidebar";
  import GoodsDetail from "@/components/gooddetail";
  import { GoodsList } from "@/service/activity/goodsApi";

  export default {
    name: "normal",
    data() {
      return {
        goodsData: {}
      };
    },
    components: {
      "header-top": HeaderTop,
      sidebar: SideBar,
      "good-detail": GoodsDetail
    },
    created() {},
    mounted() {
      GoodsList({
        actId: 817,
        tagType: 0
      }).then(res => {
        debugger;
        let data = res.data;
        if (res.data.success) {
          this.goodsData = data.data;
        }
      });
    }
  };
</script>
<style scoped lang="scss">
  .content {
    background-color: #400e8a;
    width: 100%;
    padding-top: 20px;
    .title {
      background: url("//img.tqmall.com/act/web/2018/03/supperDay/top_bg.png")
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

