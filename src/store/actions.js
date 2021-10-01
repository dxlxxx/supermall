export default {
  addCart({state, commit}, payload) {
     return new Promise(((resolve, reject) => {
      let oldProduct = null
      for (let cartListElement of state.cartList) {
        if (cartListElement.iid === payload.iid){
          oldProduct = cartListElement
        }
      }
      if (oldProduct) {
        commit('addCount', oldProduct)
        resolve('商品数量+1')
      }else {
        payload.count = 1
        commit('addToCart', payload)
        resolve('添加商品成功')
      }
    }))
  }
}
