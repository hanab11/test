import HelloWorld from '../components/HelloWorld'
import MyAbout from '../pages/MyAbout'
import ElementUI from '../pages/ElementUI'
import MyAxios from '../pages/MyAxios'

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
  },
  {
    path: '/elm',
    component: ElementUI
  },
  {
    path: '/axios',
    component: MyAxios
  }
]