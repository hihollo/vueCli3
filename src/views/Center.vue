<template>
  <div>
    <h1>Center View</h1>
  </div>
</template>
<script>
const auth = {
  isLogin () {
    return true
  }
}
// 局部路由守卫
// 在渲染该组件的对应路由被 confirm 前调用
// 不！能！获取组件实例 `this`
// 因为当守卫执行前，组件实例还没被创建
export default {
  beforeRouteEnter (to, from, next) {
    console.log('局部盘查')
    console.log(auth.isLogin())
    if (auth.isLogin() === true) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>
