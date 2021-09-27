<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
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
    swiperLoad() {
      if (!this.isLoad){
        this.$emit('swiperLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>
