import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 自定义的共享状态(像定义的一个全局变量)
    isTabbarShow: true,
    comingList: []
  },
  mutations: { // 唯一修改状态的地方（如果在组件中修改状态也行，但不正规）
    hideMaizuoTabbar (state, data) { // state是上面的state,data是传过来的
      this.state.isTabbarShow = data
    },
    showMaizuoTabbar (state, data) {
      this.state.isTabbarShow = data
    },
    /* [HIDE_TABBAR_MUTATION] (state, data) {
      // console.log("HideMaizuoTabbar");
      state.isTabbarShow = data
    },
    [SHOW_TABBAR_MUTATION] (state, data) {
      // console.log("ShowMaizuoTabbar");
      state.isTabbarShow = data
    }, */
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: { // actions用于异步处理 （同步状态也可以走也可以不走 如mutations中的hideMaizuoTabbar (state, data) ）
    getComingListAction (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=9225002',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15807946004226247819905","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data);
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  getters: {
    comingListGetter (state) {
      return state.comingList.filter((item, index) => index < 2) // 取state中的前两个状态isTabbarShow，comingList
    }
  },
  modules: {
  }
})
// var name = "mykey"
// var obj = {
//   [name]:"aaaa"   // [name]:"aaaa"相当于 mykey: "aaaa" 可以防止mutations中函数命名冲突
// }
// console.log(obj);
