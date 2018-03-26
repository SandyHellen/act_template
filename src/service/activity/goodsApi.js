import axios from "axios";
let baseData = {
  uid: 675995,
  cityId: 383,
  deviceId: "358239056111620",
  version: "3.0.2",
  appkey: "1711394416800",
  sign: "758F14F0AE9AE6282F315BD5BCB65209552C0166"
};
export const GoodsList = data => {
  //海中坑货的代码
  // let params = new URLSearchParams()
  // params.append('uid', 675995)
  // params.append('cityId', 383)
  // params.append('deviceId', '358239056111620')
  // params.append('version', '3.0.2')
  // params.append('actId', 817)
  // params.append('tagType', 1)
  // params.append('appkey', '1711394416800')
  // params.append('sign', '758F14F0AE9AE6282F315BD5BCB65209552C0166')

  // if (typeof data === 'object') {
  //   for (let k in data) {
  //     params.append(k, data[k])
  //   }
  // }
  // return axios.get(`/activity/goods/list?${ params.toString() }`)

  // 本女神的代码
  return axios({
    method: "get",
    url: "/activity/goods/list",
    params: Object.assign(baseData, data)
  });
};
export const YunxiuList = data => {
  return axios({
    method: "get",
    url: "/activity/yun_xiu/goods/list",
    params: Object.assign(baseData, data)
  });
};
