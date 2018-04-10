/*
 vuex最核心的管理对象store
 */

import {
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  CLEAR_CART,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import Vue from "vue"
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_SHOP_GOODS] (state, {shopGoods}) {
    state.shopGoods = shopGoods
  },
  [RECEIVE_SHOP_RATINGS] (state, {shopRatings}) {
    state.shopRatings = shopRatings
  },
  [RECEIVE_SHOP_INFO] (state, {shopInfo}) {
    state.shopInfo = shopInfo
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  [INCREMENT_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count++
    } else {
      // food.count = 1 //给food添加属性count, 值为1    没有数据绑定
      //todo 添加一个带数据绑定的属性
      Vue.set(food, 'count', 1)
      state.shopCart.push(food)
    }
  },

  [DECREMENT_FOOD_COUNT](state, {food}) {
    if (food.count) {
      food.count--
      if(food.count===0) {
        state.shopCart.splice(state.shopCart.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // 清除购物车所有food的count, 置为0
    state.shopCart.forEach(food => food.count = 0)
    //清空购物车
    state.shopCart = []
  },

}
