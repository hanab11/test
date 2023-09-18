import Vue from 'vue'

import router from './router'
import App from './App.vue'

// 按需引入
import { Button, DatePicker, Row, Table, TableColumn, Pagination } from 'element-ui';

// ElementUI，按需引入需要自己注册全局组件('组件名', 组件)
Vue.component(Button.name, Button)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Row.name, Row)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
