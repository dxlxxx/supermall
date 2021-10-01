export default {
  addCount(state, oldProduct) {
    oldProduct.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
}
