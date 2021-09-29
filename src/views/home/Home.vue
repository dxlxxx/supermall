<template>
  <div id="home">
    <nav-bar class="nav-bar-home"><template #center><div>购物街</div></template></nav-bar>
    <tab-control class="tab-control"
                 :title="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="tabControl1" v-show="tabControlIsShow"/>
    <scroll class="content" :probe-type="3"
            @contentScroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
            ref="scroll">
      <home-swiper :banners="banners" @swiperLoad="swiperLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :title="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
      <goods-list :get-goods-list="showGoods"/>
    </scroll>
    <back-top v-show="isShow" @backClick="backClick"/>
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
import {backTopMixin} from "@/common/mixin";


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
      saveY: 0,
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currenType: 'pop',
      tabControlOffsetTop: 0,
      tabControlIsShow: false
    }
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  computed: {
    showGoods() {
      return this.goods[this.currenType].list
    }
  },
  mixins: [backTopMixin],
  methods: {
    /*
    * 事件监听
    * */
    tabClick(index) {
      this.currenType = Object.keys(this.goods)[index]
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position) {
      //1.判断backtop是否显示
      this.isShow = -position.y > 1000
      //2.判断吸顶
      this.tabControlIsShow = -position.y > this.tabControlOffsetTop
    },
    swiperLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
    },
    loadMore() {
      this.getHomeGoods(this.currenType)
      this.$refs.scroll.finishPullUp()
    }
  }

}
</script>

<style scoped>
  #home {
    /*padding-bottom: 44px;*/
    position: relative;
    height: 100vh;
  }

  .nav-bar-home {
    background-color: var(--color-tint);
    color: white;
    /*原生滚动的固定*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
  }

  .tab-control {
    /*position: sticky;*/
    /*top: 43px;*/
    background-color: #fff;
    position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .isFixed {
    position: fixed;
    top: 44px;
    z-index: 99;
  }



</style>
