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
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART

} from './mutation-types'
import {
  reqAddress,
  reqFoodList,
  reqShopList,
  reqUserInfo,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'


export default {

  // 异步获取address
  async getAddress({commit, state}) {
    // 得到经纬度值
    const {latitude, longitude} = state
    // 异步请求获取address
    const result = await reqAddress(latitude + ',' + longitude)
    if (result.code === 0) {
      const address = result.data
      // 提交commutation
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取categorys
  async getCategorys({commit}) {
    // 异步请求获取categorys
    const result = await reqFoodList()
    if (result.code === 0) {
      const categorys = result.data
      // 提交commutation
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },


  // 异步获取shops
  async getShops({commit, state}) {
    // 得到经纬度值
    const {latitude, longitude} = state
    // 异步请求获取shops
    const result = await reqShopList(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      // 提交commutation
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 存储指定的用户
  saveUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步获取用户
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const shopGoods = result.data
      commit(RECEIVE_SHOP_GOODS, {shopGoods})
      callback && callback()
    }
  },

  // 异步获取商家评论列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const shopRatings = result.data
      commit(RECEIVE_SHOP_RATINGS, {shopRatings})

    }
  },

  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      commit(RECEIVE_SHOP_INFO, {shopInfo})
    }
  },

  //
  updateFoodCount ({commit}, {food, isAdd}) {
    if(isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },

  //清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  }

}
