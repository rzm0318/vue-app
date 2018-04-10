<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name"> <!--todo 强制绑定-->
      <router-link slot="search" to="/search" class="header_search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="login" to="/login" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav border-1px" v-if="categorysArr.length>0">
      <div class="swiper-container"  >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key='index'>
            <a href="javascript:" class="link_to_food" v-for="(c,index2) in categorys" :key='index2'>
              <div class="food_container">
                <img :src="imgBaseUrl+c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <img src="./images/msite_back.svg" alt="" v-else="">
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>

    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"   //todo 在msite  显示地址信息内容  要读取state的状态   故引入mapState
  import Swiper from "swiper"   //todo  引入一个Swiper
  import  'swiper/dist/css/swiper.min.css'   //Swiper自带css
  import ShopList from '../../components/ShopList/ShopList.vue'
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
  export default {
    data () {
      return {
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    components:{
      ShopList,
      HeaderTop
    },
    mounted(){    //todo 初始化一显示，就实现轮播效果
      this.$store.dispatch('getCategorys') //异步获取食品分类列表
      this.$store.dispatch("getShops")

    },
    computed:{
       ...mapState(["address",'categorys']),
      categorysArr(){

          const arr=[]  //定义一维数组
          let smallArr=[] //todo 定义二维数组 会变  不可以是常量
          const {categorys} =this; //获取列表
          console.log(this.categorys);
          const max = 8;
          categorys.forEach((c)=>{
              if(smallArr.length===0){
                arr.push(smallArr)
              }
              smallArr.push(c);
              if(smallArr.length===max){   //todo 小数组满了，再重新创建一个小数组
                smallArr = []  //仅是当前地址改变，原有内容不会被替代
              }
          })
        return arr;   // [ [{分类对象}], [{分类对象}] ]
      }
    },
    watch:{  //TOdo  更新状态后 轮播才显示   $.nextTick()
      categorys(value){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {     //  字符串选择器
            pagination: {
              el: '.swiper-pagination',    // 圆点插入到的位置
            },
            loop: true   //是否轮播
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
