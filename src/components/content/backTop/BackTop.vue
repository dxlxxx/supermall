<template>
  <div class="back-top" @click="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backTop() {
      this.$emit('backClick')
    }
  }
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    bottom: 10%;
    right: 5%;
  }
  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>
