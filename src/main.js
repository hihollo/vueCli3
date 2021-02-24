import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AllA from './module/moduleA' // 导入所有的接口
import { B1, B2 } from './module/moduleB' // 只导入某个几个接口项目的体积就小，下载快 (给导入的函数起别名{ A1 as MyA1 })

// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(ElementUI)
Vue.use(MintUI)

Vue.config.productionTip = false
console.log(AllA, B1, B2)
console.log('=====调用moduleA中的A2方法==========')
AllA.A2()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#box')
