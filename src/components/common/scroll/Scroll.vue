<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    const BS = new BScroll(this.$refs.wrapper, {
      click: true
    })
    this.$store.commit('updateScroll', BS)
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
