import { USER_INFO } from './mutations-types'
export default {
  [USER_INFO](state, data) {
    state.userInfo = data
  }
}
