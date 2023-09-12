import HelloWorld from '../components/HelloWorld'
import MyAbout from '../pages/MyAbout'

export default [
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