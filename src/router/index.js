import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Nowplaying from '@/views/film/Nowlplaying'
import Comingsoon from '@/views/film/Comingsoon'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
import city from '../views/city'
import DraggableCase from '../views/draggable/DraggableCase'
import draggale2 from '../views/draggable/draggale2'

Vue.use(VueRouter)
const auth = {
  isLogin () {
    return true
  }
}
const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/dra',
      component: DraggableCase
    },
    {
      path: '/dra2',
      component: draggale2
    },
    {
      path: '/film',
      component: Film,
      children: [ // localhost:8080/#/film/nowplaying nowplaying就是二级路由（当输入这个路径是会将下面的组件放到路由容器中去）
        {
          path: '/film/nowplaying',
          component: Nowplaying
        },
        {
          path: '/film/comingsoon',
          component: Comingsoon
        },
        {
          path: '', //  二级路由重定向(当输入localhost:8080/#/film时自动定向到localhost:8080/#/film/nowplaying)
          redirect: '/film/nowplaying' // Nowplaying组件取代film组件中的路由容器
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/detail/:myid', // 动态路由 （/detail/:myid'当输入的路由是这种格式才正确）
      name: 'xmdetail', // 命名路由（给路由起一个别名）
      component: Detail,
      props: true
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/city',
      component: city
    },
    {
      path: '*',
      redirect: '/film' // 当输入的路由不存在时，默认到该路径（重定向）
    }
  ]
})
// 全局路径守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/center') {
    console.log('盘查')
    if (auth.isLogin()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
