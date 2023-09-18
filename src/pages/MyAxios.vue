<template>
  <div>
    <h1>我是axios测试页面</h1>
    <h1 v-if="response.today">今日题目：{{ response.today[0] ? response.today[0].title : '暂未上传' }}</h1>
  </div>
</template>

<script>
// axios测试使用接口，一般会写在vuex/pinia里，集中管理
import { getxxx } from '../axios/axios-api' // 引入函数时，要加大括号！

export default {
  name: 'MyAxios',
  data() {
    return {
      response: {},
    }
  },
  mounted() {
    // 挂载时调用方法，进行异步请求，页面动态渲染
    this.test()
  },
  methods: {
    async test() {
      // 准备数据
      let params = {
        mod: 'interview',
        ctr: 'issues',
        act: 'today',
      }
      // 调异步接口
      let promise = await getxxx(params)
      this.response = promise.result
      console.log('请求到的数据', this.response)

      /* try {
        this.response = await getxxx(params)
      } catch (err) {
        this.response = err
      } */
    },
  },
}
</script>

<style scoped></style>