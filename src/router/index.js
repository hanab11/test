import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入封装好的路由数组
import Myroutes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: Myroutes // 同名可省略，这里为了突出封装
})

// 引入封装好的钩子函数（回调，无封装()=>{}）
import { MybeforeEach, MyafterEach } from "./shouwei"

// 全局前置路由守卫
router.beforeEach(MybeforeEach)
// 全局后置路由守卫
router.afterEach(MyafterEach)

export default router