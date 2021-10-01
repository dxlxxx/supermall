<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: '哈哈哈'

    }
  },
  methods: {
    show(message, time = 1500) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, time)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99;
    padding: 5px;
    transform: translate(-50%,-50%);
    color: white;
    background-color: rgba(0,0,0,0.6);
  }
</style>
