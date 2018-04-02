<template>
  <div>
    <router-view></router-view> <!--todo 显示当前路由组件 -->
    <FootGuide/>   <!--一般组件-->
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'

  export default {
    components: {
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
