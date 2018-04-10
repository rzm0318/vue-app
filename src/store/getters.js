export default {
  // 购物车总数量
  totalCount (state) {
    return state.shopCart.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  // 购物车总价格
  totalPrice (state) {
    return state.shopCart.reduce((preTotal, food) => preTotal + food.count*food.price, 0)
  }
}
