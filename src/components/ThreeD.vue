<template>
  <div>
    <!--声明式导航-->
    <ul>
      <router-link to="/film" tag="li" active-class="myactive">
        <i class="iconfont icon-form"></i> <!--引入iconfont图片的方式而已-->
        gofime
      </router-link>
      <router-link to="/cinema" tag="li" active-class="myactive">
        <i class="iconfont icon-good"></i>
        gocinema
      </router-link>
      <!--  <li>    这种方式路由守卫不管用
          <a href="#/center">gocenter</a>
        </li>-->
      <router-link to="/center" tag="li" active-class="myactive">
        <i class="iconfont icon-remind1"></i>
        gocenter
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>

  .myactive{
    color:red;
  }
  div{
    position:fixed;
    bottom: 5px;
    left:0px;
    width:100%;
    height: 50px;
    background: white;
    ul{
      display: flex;
      li{
        flex:1;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>
