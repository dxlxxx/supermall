<template>
  <div>
    <nav-bar>
      <template #center>
        <div class="title">
          <div v-for="(item, index) in titles" class="title-item"
               @click="itemClick(index)" :class="{isClicked: index === currenIndex}">{{item}}
          </div>
        </div>
      </template>
      <template #left>
        <img src="~assets/img/common/back.svg" alt="" class="back"  @click="backClick">
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNvaBar",
  components: {NavBar},
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currenIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currenIndex = index
      this.$emit('itemClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
  }
  .isClicked {
    color: var(--color-tint);
  }
  .back{
    vertical-align: middle;
  }

</style>
