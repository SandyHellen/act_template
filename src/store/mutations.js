import { USER_INFO } from './mutations-types'
export default {
  // [USER_INFO]属性变量的方法
  [USER_INFO](state, data) {
    debugger;
    state.userInfo = data;
    window.location.href = '#/activity'
  }
}
