<template>
  <div id="home">
    <nav-bar class="nav-bar-home"><template #center><div>购物街</div></template></nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" :title="['流行', '新款', '精选']" @tabClick="tabClick"/>
      <goods-list :get-goods-list="showGoods"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/common/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import {getHomeGoods,getHomeMultiData} from "@/network/home";

export default {
  name: "Home",
  components: {
    Scroll,
    GoodsList,
    TabControl,
    FeatureView,
    RecommendView,
    HomeSwiper,
    NavBar,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currenType: 'pop'
    }
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
    showGoods() {
      return this.goods[this.currenType].list
    }
  },
  methods: {
    /*
    * 事件监听
    * */
    tabClick(index) {
      this.currenType = Object.keys(this.goods)[index]
    },

    /*
    * 网络请求
    * */
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    }
  }

}
</script>

<style scoped>
  #home {
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }

  .nav-bar-home {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .tab-control {
    position: sticky;
    top: 43px;
    background-color: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }



</style>
