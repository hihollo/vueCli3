<template>
  <div>
    this is comingsoon
    <ul>
     <!-- <li v-for="data in $store.state.comingList" :key="data.filmId">-->
      <li v-for="data in $store.getters.comingListGetter " :key="data.filmId">
        <img :src="data.poster">
        {{data.name}}
        <p if="data.actors"> 主演：{{data.actors | actorfilter}} </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      // ajax请求
      this.$store.dispatch('getComingListAction')
    } else {
      console.log('使用缓存数据')
    }
  }
}
</script>
<style lang="scss" scoped>
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
