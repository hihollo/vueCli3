<template>
    <div :key="looplist.length">
      <swiper :key="looplist.length" ref="myswiper">
        <div class="swiper-slide" v-for="data in looplist" :key="data.filmsId">
          <img :src="data.poster"/>
        </div>
      </swiper>
      <filmheader :class="isFixed?'fixed':''"></filmheader>
      <router-view></router-view>
    </div>
</template>
<script>

import swiper from '@/views/film/Swiper'
import axios from 'axios'
import filmheader from '@/views/film/FilmHeader'
export default {
  data () {
    return {
      looplist: [],
      isFixed: false
    }
  },
  components: {
    swiper,
    filmheader

  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.list'

      }
    }).then(res => {
      console.log(res.data)
      this.looplist = res.data.data.films
    })
    window.onscroll = this.handleScroll
  },
  beforeDestroy () {
    // console.log("beforeDestroy") //离开这个组件会解除 window.onscroll = this.handleScroll事件，因为都会绑定该事件
    window.onscroll = null
  },
  methods: {
    handleScroll () { // 实现吸顶效果
      // console.log(document.documentElement.scrollTop,this.$refs.myswiper.$el.offsetHeight)
      if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
        // console.log("fixed")
        this.isFixed = true
      } else {
        // console.log("unfixed")
        this.isFixed = false
      }
    }
  }
}
</script>
