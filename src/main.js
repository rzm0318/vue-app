import Vue from "vue";
import App from "./App.vue"
import router from "./router"   //引入
new Vue({
  el:"#app",
  render:h=>h(App),
  router    //todo  注册上路由器
})
