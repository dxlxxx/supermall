<template>
  <div id="detail">
    <detail-nva-bar ref="detailNvaBar" @itemClick="itemClick"/>
    <scroll class="content" ref="scroll" :probe-type="3" @contentScroll="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-params :param-info="detailParams" ref="detailParams"/>
      <detail-comment :comment="commentInfo" ref="detailComment"/>
      <goods-list :get-goods-list="recommends" ref="goodsList"/>
    </scroll>
    <back-top v-show="isShow" @backClick="backClick"/>
    <detail-bottom-bar @addToCart="addToCart"/>
    <toast/>
  </div>
</template>

<script>
import {debounce} from "@/common/utils";
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
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import {backTopMixin} from "@/common/mixin";
import Toast from "@/components/common/toast/Toast";
export default {
  name: "Detail",
  mixins: [backTopMixin],
  components: {
    Toast,
    DetailBottomBar,
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
      commentInfo: {},
      themeOffsetTopY: [],
      getThemeOffsetTopY: null,
      currenIndex: 0
    }
  },
  created() {
    //1.获取id
    this.iid = this.$route.params.iid
    //2.网络请求
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.detailParams = data.itemParams
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    //3.推荐的网络请求
    getRecommend().then(res => {
      //console.log(res)
      this.recommends = res.data.list
    })
  },
  updated() {
      //4.获取位置
      this.getThemeOffsetTopY = debounce(() => {
        this.themeOffsetTopY = []
        this.themeOffsetTopY.push(0)
        this.themeOffsetTopY.push(this.$refs.detailParams.$el.offsetTop)
        this.themeOffsetTopY.push(this.$refs.detailComment.$el.offsetTop)
        this.themeOffsetTopY.push(this.$refs.goodsList.$el.offsetTop)
        this.themeOffsetTopY.push(Number.MAX_VALUE)
      }, 100)
    },
  methods: {
    //1.点击跳转
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeOffsetTopY[index], 100)
    },
    //2.图片加载完后获取定位
    imageLoad() {
      this.getThemeOffsetTopY()
    },
    scroll(position) {
      const y = - position.y
      const length = this.themeOffsetTopY.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currenIndex !== i &&
          (y >= this.themeOffsetTopY[i] && y < this.themeOffsetTopY[i+1])){
          this.currenIndex = i
          this.$refs.detailNvaBar.currenIndex = this.currenIndex
        }
      }
      this.isShow = -position.y > 1000
    },
    addToCart() {
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        iid: this.iid
      }
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 1500)
        }
      )
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
