<template>
  <div class="tab-control">
    <div v-for="(item, index) in title"
         class="tab-control-item" :class="{isActive: currentIndex === index}"
         @click="btnClick(index)" ><span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    z-index: 99;
  }
  .tab-control-item span {
    padding-bottom: 5px;
  }
  .tab-control-item {
    flex: 1;
  }
  .isActive span {
    border-bottom: 3px solid var(--color-high-text);
    color: var(--color-tint);
  }
</style>
