<template>
 <div class="goods-list">
   <good-list-item v-for="item in getGoodsList" :get-goods-item="item"/>
 </div>
</template>

<script>
import GoodListItem from "@/components/content/goods/GoodListItem";
export default {
  name: "GoodsList",
  components: {GoodListItem},
  props: {
    getGoodsList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
 .goods-list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   padding-bottom: 55px;
 }
</style>
