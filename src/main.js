import Vue from "vue";
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./mock/mockServer"
import Split from "./components/Split/Split.vue"
import "./filters"
//todo 注册全局组件标签  (组件标签名,引用到的组件)
Vue.component("Split",Split)
new Vue({
  el:"#app",
  render:h=>h(App),
  router,    //todo  注册上路由器
  store,
})
