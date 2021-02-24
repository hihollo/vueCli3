<template>
    <div>
      this is nowplaying
      <ul>
          <li v-for="data in datalist" :key="data.filmId" @click="deal(data.filmId)">
            <img :src="data.poster">
            {{data.name}}
         <p if="data.actors"> 主演：{{data.actors | actorfilter}} </p>
        </li>
      </ul>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('actorfilter', function (actor) {
  var newlist = actor.map(item => item.name)
  return newlist.join(' ')
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // axios简写方式（功能有限）
    // axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989").then(res=>{
    //   console.log(res.data);
    // })
    // $.ajax $.get
    // axios完整写法
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4271989',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    deal (id) {
      console.log(id)
      // 编程式导航--通过路径跳转
      // this.$router.push(`/detail/${id}`)
      // 编程式导航--通过名字跳转
      this.$router.push({ name: 'xmdetail', params: { myid: id } })
    }
  }
}
</script>
<style lang="scss" scoped="true">
  ul{
    li{
      padding:10px;
      overflow: hidden;
      img{
        float:left;
        width:100px;
      }
    }
  }
</style>
