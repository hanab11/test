// 统一管理接口
import axiosService from './axios-request'

// get形式接口
export const getxxx = (params) => {
  // 用axios请求的完整写法
  return axiosService(
    {
      url: '/api',
      params,
      method: 'get'
    }
  )
}

// post形式接口
export const postxxx = (data) => {
  return axiosService(
    {
      url: '/xxxx', // 待使用
      data,
      method: 'post'
    }
  )
}