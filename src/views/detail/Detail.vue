<template>
  <div id="detail">
    <detail-nva-bar ref="detailNvaBar"/>
    <scroll class="content" ref="scroll" @contentScroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-info :detail-info="detailInfo" @loadImgEvent="loadImgEvent"/>
      <detail-params :param-info="detailParams" ref="detailParams"/>
      <detail-comment :comment="commentInfo"/>
      <goods-list :get-goods-list="recommends"/>
    </scroll>
  </div>
</template>

<script>
import {Shop} from "@/network/detail";
import DetailNvaBar from "@/views/detail/childComps/DetailNvaBar";
import {getDetail, Goods, getRecommend} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailInfo from "@/views/detail/childComps/DetailInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import DetailParams from "@/views/detail/childComps/DetailParams";
import DetailComment from "@/views/detail/childComps/DetailComment";
export default {
  name: "Detail",
  components: {
    DetailComment,
    DetailParams, GoodsList, DetailInfo, Scroll, DetailShopInfo, DetailBaseInfo, DetailSwiper, DetailNvaBar},
  data() {
    return {
      iid: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      recommends: [],
      detailParams: {},
      detailParamsY: 0,
      commentInfo: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.result
      console.log(data)
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.detailParams = data.itemParams
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommend().then(res => {
      //console.log(res)
      this.recommends = res.data.list
    })
  },
  methods: {
    loadImgEvent() {
      this.detailParamsY = this.$refs.detailParams.$el.offsetTop
    },
    contentScroll(position) {
      //console.log(-position.y)
      if (-position.y === this.detailParamsY){

        this.$refs.detailNvaBar.currenIndex = 1
      }
    }
  }

}
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    background-color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 9;
    background-color: #fff;
  }
</style>
