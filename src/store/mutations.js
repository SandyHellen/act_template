import { USER_INFO } from './mutations-types'
export default {
  [USER_INFO](state, data) {
    debugger;
    state.userInfo = data;
    window.location.href = '#/activity'
  }
}
