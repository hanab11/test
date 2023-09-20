<template>
  <div>
    <h1>我是列表分页页面</h1>

    <!-- data : 关联的数据 prop: 关联的是一列的属性 label：关联的是表格的标题 -->
    <el-table :data="currentData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="150"></el-table-column>
      <el-table-column prop="label" label="分类" width="150"></el-table-column>
      <el-table-column prop="title" label="题目"></el-table-column>

      <el-table-column label="操作">
        <!-- 作用域插槽，scope.$index是当前行的下标，scope.row是当前行的对象，可进行操作 -->
        <template slot-scope="scope">
          <el-button type="success" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- layout是小组件 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="pageSizes" :page-size="PageSize" :total="totalCount" layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>

    <h1 v-if="response.length">类库题目（原生列表）</h1>
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
      tableData: [], // 总数据
      totalCount: 1, // 总条数，根据接口获取数据长度（注意：这里不能为空）
      pageSizes: [10, 20, 30, 50], // 页面容量选择，数组
      PageSize: 10, // 默认每页的条数（容量）
      currentPage: 1, // 默认显示页码，第xxx
    }
  },
  mounted() {
    // 挂载时调用方法，进行异步请求，页面动态渲染
    this.getData()
  },
  computed: {
    currentData() {
      return this.tableData.slice((this.currentPage - 1) * this.PageSize, this.currentPage * this.PageSize)
    }
  },
  methods: {
    // 分页
    // 每页的条数（容量）
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      // 改变每页的条数（容量）
      this.PageSize = val
      // 注意：在改变每页显示的条数时，要将页码重置到第一页
      this.currentPage = 1
    },
    // 显示第几页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      // 改变默认的页数
      this.currentPage = val
    },
    // 编辑当前行的对象
    handleEdit(row) {
      console.log(`编辑题目 ${row.id}，${row.title} `)
    },
    // 删除当前行的对象
    handleDelete(row) {
      console.log(`删除题目 ${row.id}，${row.title} `)
    },
    // 准备数据
    async getData() {
      let params = {
        mod: 'interview',
        ctr: 'issues',
        act: 'categoryList',
      }
      // 调异步接口
      let promise = await getxxx(params)
      this.response = promise.result
      console.log(this.response)

      // 将数据赋值给tableData
      this.tableData = this.response
      // 将数据的长度赋值给totalCount
      this.totalCount = this.response.length

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