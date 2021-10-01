<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item v-for="(item, index) in cartList"
                      :key="index" :itemInfo="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "@/views/cart/childComps/CartListItem";

export default {
  name: "CartList",
  components: {CartListItem, Scroll},
  computed: {
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>

<style scoped>
  .content {
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
