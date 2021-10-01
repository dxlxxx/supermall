<template>
<div>
  <nav-bar class="nav-bar">
    <template #center>
      <div>购物车({{cartListLength}})</div>
    </template>
  </nav-bar>
  <cart-list/>
  <bottom-bar/>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {mapGetters} from "vuex";
import CartList from "@/views/cart/childComps/CartList";
import BottomBar from "@/views/cart/childComps/BottomBar";
export default {
  name: "Cart",
  components: {BottomBar, CartList, NavBar},
  computed: {
    ...mapGetters([
      'cartListLength',
      'cartList'
    ])
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
