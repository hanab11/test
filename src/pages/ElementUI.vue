<template>
  <div>
    <h1>我是饿了么UI页面</h1>
    <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-s-check" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <h1>以下是原生</h1>
    <button>原生的按钮</button>
    <input type="text" placeholder="原生的输入框" />
  </div>
</template>

<script>
export default {
  name: 'ElementUI',
}
</script>

<style scoped></style>