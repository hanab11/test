import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import MyAbout from '../pages/MyAbout'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/', // 默认地址
      redirect: '/hello' //重定向
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/about',
      component: MyAbout
    }
  ]
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log(to, from);
  next()
})
// 全局后置路由守卫
router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log(to, from);
})

export default router