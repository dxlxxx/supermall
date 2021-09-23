<template>
<div>
  <tab-bar>
    <tab-bar-item link="/home" active-color="pink">
      <template #tab-bar-item-icon>
        <img src="~assets/img/tabbar/home.png" alt="">
      </template>
      <template #tab-bar-item-icon-active>
        <img src="~assets/img/tabbar/activeHome.png" alt="">
      </template>
      <template #tab-bar-item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/category" active-color="pink">
      <template #tab-bar-item-icon>
        <img src="~assets/img/tabbar/classification.png" alt="">
      </template>
      <template #tab-bar-item-icon-active>
        <img src="~assets/img/tabbar/activeClassification.png" alt="">
      </template>
      <template #tab-bar-item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/cart" active-color="pink">
      <template #tab-bar-item-icon>
        <img src="~assets/img/tabbar/shopcar.png" alt="">
      </template>
      <template #tab-bar-item-icon-active>
        <img src="~assets/img/tabbar/activeShopcar.png" alt="">
      </template>
      <template #tab-bar-item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile" active-color="pink">
      <template #tab-bar-item-icon>
        <img src="~assets/img/tabbar/my.png" alt="">
      </template>
      <template #tab-bar-item-icon-active>
        <img src="~assets/img/tabbar/activeMy.png" alt="">
      </template>
      <template #tab-bar-item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
import TabBar from "../../common/tabBar/TabBar";
import TabBarItem from "../../common/tabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {TabBar,TabBarItem}
}
</script>

<style scoped>

</style>
