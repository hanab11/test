<template>
  <div id="app">
    <!-- 路由导航 -->
    <div class="router">
      <router-link class="routerGuide" to="/hello">首页</router-link>
      <span>|</span>
      <router-link class="routerGuide" to="/about">关于</router-link>
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
  margin-top: 60px;
}
</style>
