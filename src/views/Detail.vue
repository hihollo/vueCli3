<template>
    <div>
      <div v-if="filminfo">
        <img :src="filminfo.poster" class="poster"/>
         <h3>{{filminfo.name}}</h3>
        <h3>演职人员</h3>
        <swiper perview="4" class="actorswiper" myclassname="actorswiper">
          <div class="swiper-slide" v-for="data in filminfo.actors" :key="data.name">
            <img :src="data.avatarAddress"/>
            <p>{{data.name}}</p>
          </div>
        </swiper >
        <h3>剧照</h3>
        <swiper perview="3" class="photoswiper" myclassname="photoswiper">
          <div class="swiper-slide" v-for="(data, index) in filminfo.photos" :key="index">
            <img :src="data"/>
          </div>
        </swiper>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import swiper from './Detail/DetailSwiper'
// import bus from '@/bus/index'
// import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'
export default {
  props: ['myid'], // 下面的url: `https://m.maizuo.com/gateway?filmId=${this.myid}&k=7576001`,需要用到
  data () {
    return {
      filminfo: null
    }
  },
  components: {
    swiper
  },
  beforeMount () {
    /* console.log('hidetabbar', '发麻药了')
    bus.$emit('maizuo', false) */
    // this.$store.state.isTabbarShow = false
    this.$store.commit('hideMaizuoTabbar', false) // this.$store.commit(HIDE_TABBAR_MUTATION, false)// 第一个参数就是mutation中函数名字
  },
  beforeDestroy () {
    /* console.log('showtabbar')
    bus.$emit('maizuo', true) */
    // this.$store.state.isTabbarShow = true
    this.$store.commit('showMaizuoTabbar', true) //  this.$store.commit(SHOW_TABBAR_MUTATION, true)// 第一个参数就是mutation名字
  },
  mounted () {
    // console.log('要id获取详细信息' + this.$route.params.myid)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.myid}&k=7576001`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  }
}
</script>

<style lang="scss" scoped>
  .poster{
    width:50%;
  }
  .actorswiper{
    width:50%;
  }
  .photoswiper{
    width:50%;
  }
</style>
