import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
//todo  声明使用插件，所有组件对象都得到一个属性 $store  ，可以调用它的方法，实现组件与vuex的交互
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
})
