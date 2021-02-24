<template>
  <div>
      <!--<tabbar v-show="this.$store.state.isTabbarShow"></tabbar>-->
    <tabbar v-show="isTabbarShow"></tabbar>
      <!--路由容器(当输入一个路由，组件就会替换该路由容器)-->
      <router-view></router-view>
    <!--
    -->
    <div v-show="false">
      <input type="text" ref='mytext'/>
      <button @click="deal()">add</button>
      <ul>
        <li v-for="data in datalist" :key="data" >
          {{data}}
        </li>
      </ul>
      <navbar>
        <button @click="isShow=!isShow">change</button>
      </navbar>
      <sidebar v-show="isShow"></sidebar>
      <ul>
        <li v-for="file in filelist" :key="file.id">
          {{file.nm}}<br/>
          <img  :src="getpic(file.img)"/>-&#45;&#45;
          <img :src="file.img | myfileter">-&#45;&#45;

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
import axios from 'axios'
import Vue from 'vue'
import tabbar from './components/Tabbar'
import { mapState } from 'vuex' // ES6导出
// import bus from '@/bus/index'
Vue.component('navbar', navbar) /* 导入之后全局定义组件 */

Vue.filter('myfileter', function (file) {
  return file.replace('w.h', '128.180')
})
export default {
  data () {
    return {
      datalist: [],
      filelist: [],
      // isTabbarShow: true,
      isShow: false
    }
  },
  /* beforeMount () { //这种是通过数据总线的方式进行非父子组件的数据传递（用vuex(状态管理)感觉更加方便）
    console.log('从这里开始订阅消息了')
    bus.$on('maizuo', (data) => {
      console.log('被通知了maizuo', data)
      this.isTabbarShow = data
    })
  }, */
  methods: {
    deal () {
      this.datalist.push(this.$refs.mytext.value)
      console.log('hello vue')
    },
    getpic (file) {
      return file.replace('w.h', '128.180')
    }
  },
  computed: {
    computedGetPic (file) {
      return file.replace('w.h', '128.180')
    },
    //   isShow(){
    //     return this.$store.state.isTabbarShow
    //   },
    ...mapState(['isTabbarShow']) // ...是ES6展开合并运算符 (import { mapState } from 'vuex' // ES6导出)
  },
  components: {
    'sidebar': sidebar, // 导入之后局部定义组件
    'tabbar': tabbar
  },
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=').then(res => {
      this.filelist = res.data.movieList
      console.log(res.data)
    })
  }
}
</script>
<style lang="scss" >
  ul{
    list-style: none;
    li{
      background: bisque;
    }
  }
</style>
