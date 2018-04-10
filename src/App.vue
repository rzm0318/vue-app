<template>
  <div>
    <router-view></router-view> <!--todo 显示当前路由组件 -->
    <FootGuide v-show="$route.meta.showFooter"/>   <!--todo 仅有meta配置的才可以显示Footer路由组件 -->
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
  import {reqAddress} from "./api"
  export default {
    mounted () {
      //在app里面发请求，在msite来显示 通知vuex的action（getAddress）来异步获取address数据
      this.$store.dispatch('getAddress')
    },
    components: {
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
