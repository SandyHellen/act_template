import axios from "axios";
axios.defaults.headers = {
  "Content-Type": "application/json;charset=UTF-8",
  "X-Requested-With": "XMLHttpRequest",
  "X-jd-ajax": "1.0",
  "X-jd-ts": new Date().getTime()
};
//
axios.defaults.baseURL = '/promotion';
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
