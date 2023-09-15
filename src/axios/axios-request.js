// 封装axios
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

/**
 * 先创建axios实例，才能使用拦截器
 * eg：用axios实例发请求：await axiosService.post('/目标', {数据}) // 这是简写，也有完整写法
 * 用实例发请求，实际上就是省略baseURL，最终url = base url + request url
 */
const axiosService = axios.create({
  // 指定基地址
  baseURL: 'http://api.h-camel.com',
  // 指定请求超时时间
  timeout: 5000
})

// 请求拦截器
axiosService.interceptors.request.use(
  (config) => {
    // 发送请求之前，可处理请求参数、在headers里加token、加密签名、携带公共参数等等
    console.log('token是', config.headers.token)

    if (config.method === 'post')
      config.data = qs.stringify({ ...config.data }) // 对post数据序列化，让服务器正确接收
    else
      config.params = { ...config.params }

    return config;
  },
  (error) => {
    // 处理请求错误
    console.log(error)
    return Promise.reject(error)
  },
)

// 响应拦截器
axiosService.interceptors.response.use(
  (response) => {
    console.log('response对象是', response)

    return response.data // 简化数据，只拿响应对象中的data数据
  },
  (error) => {
    let text = ''

    // 判断error的状态码，并将对应的信息告知用户
    switch (error.response.status) {
      case 400:
        text = '请求错误(400)，请重新申请'
        break
      case 401:
        text = '登录错误(401)，请重新登录'
        return this.$router.replace('/login')
      case 403:
        text = '拒绝访问(403)'
        break
      case 404:
        text = '请求出错(404)'
        break
      case 408:
        text = '请求超时(408)'
        break
      case 500:
        text = '服务器错误(500)，请重启软件或切换功能页！'
        break
      case 501:
        text = '服务未实现(501)'
        break
      case 502:
        text = '网络错误(502)'
        break
      case 503:
        text = '服务不可用(503)'
        break
      case 504:
        text = '网络超时(504)'
        break
      case 505:
        text = 'HTTP版本不受支持(505)'
        break
      default:
        text = '网络连接出错'
    }

    // 提示错误信息
    Message({
      showClose: true,
      type: 'error',
      message: text,
    })

    // 处理请求错误
    console.log(error)
    return Promise.reject(error)
  },
)

// 暴露
export default axiosService