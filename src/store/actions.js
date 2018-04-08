import { UserInfo } from '../service/activity/goodsApi'
import { Store } from 'vuex'
export default {
  _getUserInfo(state) {
    UserInfo().then(res => {
      if (res.success) {
        state.commit(USER_INFO, res.data)
      }
    })
  }
}
