<template>
  <div>
    <nav-bar class="nav-bar-home"><template #center><div>购物街</div></template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import {getHomeMultiData} from 'network/home'
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
export default {
  name: "Home",
  components: {
    RecommendView,
    HomeSwiper,
    NavBar,
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  .nav-bar-home {
    background-color: var(--color-tint);
    color: white;
  }

</style>
