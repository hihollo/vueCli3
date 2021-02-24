<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
        +
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper' // js//
import 'swiper/css/swiper.css'
export default {
  props: ['perview', 'myclassname'],
  mounted () {
    console.log(this.myclassname)
    /* eslint-disable no-new */
    new Swiper('.' + this.myclassname, {
      // direction: 'vertical'
      slidesPerView: this.perview,
      spaceBetween: this.myclassname === 'actorswiper' ? 20 : 10,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-wrapper{
    img{
      width:100%;
    }
  }
</style>
