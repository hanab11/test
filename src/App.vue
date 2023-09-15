<template>
  <div id="app">
    <!-- 路由导航 -->
    <div class="router">
      <router-link class="routerGuide" to="/hello">首页</router-link>
      <router-link class="routerGuide" to="/about">关于</router-link>
      <router-link class="routerGuide" to="/elm">饿了么UI</router-link>
      <router-link class="routerGuide" to="/axios">axios测试</router-link>
      <router-link class="routerGuide" to="/list">列表页</router-link>
      <router-link class="routerGuide" to="/fenye">列表分页</router-link>
    </div>
    <!-- 路由页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.router {
  background-color: whitesmoke;
}

.routerGuide {
  margin: 5px;
  background-color: burlywood;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
