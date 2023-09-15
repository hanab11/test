<template>
  <div>
    <h1>我是列表分页页面</h1>
    <h1 v-if="response.length">类库题目</h1>
    <ul>
      <li v-for="category in response" :key="category.index">{{ category.title }}</li>
    </ul>
  </div>
</template>

<script>
// axios测试使用接口，一般会写在vuex/pinia里，集中管理
import { getxxx } from '../axios/axios-api' // 引入函数时，要加大括号！

export default {
  name: 'MyList_fenye',
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
        act: 'categoryList',
      }
      // 调异步接口
      let promise = await getxxx(params)
      this.response = promise.result
      console.log(this.response)

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