<template>
  <div>
    <Swiper class="swiper-img">
      <SwiperItem v-for="item in topImages">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: "DetailSwiper",
  components: {Swiper, SwiperItem},
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    // imgLoad() {
    //   if (!this.isLoad) {
    //     this.$emit('imgLoad')
    //   }
    // }
  }
}
</script>

<style scoped>
  .swiper-img {
    height: 300px;
  }
</style>
