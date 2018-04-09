import { UserInfo } from '../service/activity/goodsApi'
import { USER_INFO } from './mutations-types'
import { Store } from 'vuex'
export default {
  _getUserInfo(state, arg) {
    UserInfo().then(res => {
      debugger
      if (res.data.success) {
        state.commit(USER_INFO, res.data.data)
      }
    })
  }
}
