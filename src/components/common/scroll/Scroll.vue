<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveImage from '@better-scroll/observe-image'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveImage)
BScroll.use(ObserveDOM)
import PullUp from '@better-scroll/pull-up'
BScroll.use(PullUp)
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeImage: true,
      observeDOM: true
    })
    this.scroll.on('scroll', (position) => {
      this.$emit('contentScroll', position)
    })
    this.pullUpLoad && this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    refresh() {
      this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time)
    },
    getScrollY() {
      return this.scroll.y
    }
  }
}
</script>

<style scoped>
</style>
