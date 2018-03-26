import Vue from "vue";

let goodAmount = new Vue({
  name: "transit",
  data() {
    return {
      goodsArr: []
    };
  },
  computed: {
    totalNumber() {
      let number = 0;
      this.goodsArr.map(item => {
        number += parseInt(item.number, 10);
      });
      return number;
    },
    totalPrice() {
      let totalprice = 0;
      this.goodsArr.map(item => {
        totalprice += parseInt(item.number, 10) * parseFloat(item.price, 10);
      });
      return totalprice;
    }
  },
  methods: {
    dataChange(actid, groupid, num, singlePrice) {
      var index = findData(this.goodsArr, groupid);
      if (index == -1) {
        this.goodsArr.push({
          actid: actid,
          groupid: groupid,
          price: singlePrice,
          number: num
        });
      } else {
        // 删除
        if (num == 0) {
          this.goodsArr.splice(index, 1);
        } else {
          this.goodsArr.splice(index, 1, {
            actid: actid,
            groupid: groupid,
            price: singlePrice,
            number: num
          });
        }
      }
    }
  }
});
//找到返回index,找不到返回-1
function findData(arrData, groupid) {
  debugger;
  let indexInfo = -1;
  arrData.map((item, index) => {
    if (item.groupid == groupid) {
      indexInfo = index;
    }
  });
  return indexInfo;
}
export default goodAmount;
