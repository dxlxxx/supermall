export default {
  cartListLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  cartCount(state) {
    return state.cartList.filter(item => item.checked).reduce((previousValue, currentValue) => {
      return previousValue + currentValue.count
    }, 0)
  }
}
