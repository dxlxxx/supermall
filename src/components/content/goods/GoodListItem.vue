<template>
 <div class="goods-list-item">
   <img :src="getGoodsItem.show.img" alt="" @load="imageLoad">
   <div class="goods-info">
     <p>{{getGoodsItem.title}}</p>
     <span class="price">{{getGoodsItem.price}}</span>
     <span>⭐{{getGoodsItem.cfav}}</span>
   </div>
 </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    getGoodsItem: {
      type: Object,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('imageLoad')
      // const refresh = this.debounce(this.fun, 500)
      // refresh()
    },
    // debounce(func, delay) {
    //   let timer = null;
    //   return function (...args) {
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout( () => {
    //       func.apply(this, args);
    //     }, delay)
    //   }
    // }
  }
}
</script>

<style scoped>
 .goods-list-item {
   position: relative;
   padding-bottom: 40px;
   width: 48%;
 }

 .goods-list-item img {
   width: 100%;
   border-radius: 5px;
 }
 .goods-info p {
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
    margin-bottom: 2px;
 }
 .goods-info {
   position: absolute;
   left: 0;
   right: 0;
   bottom: 5px;
   font-size: 12px;
   text-align: center;

 }
 .goods-info .price {
   color: var(--color-high-text);
   margin-right: 20px;
 }
</style>
