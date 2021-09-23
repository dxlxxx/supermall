<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive"><slot name="tab-bar-item-icon"></slot></div>
    <div v-show="isActive"><slot name="tab-bar-item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="tab-bar-item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return (this.$route.path === this.link)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link).catch(err => err)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 22px;
  vertical-align: middle;
  margin-top: 2px;
  margin-bottom: 2px;
}
.active{
  color: red;
}
</style>
