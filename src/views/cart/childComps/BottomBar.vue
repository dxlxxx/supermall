<template>
  <div class="bottom-menu">
    <CheckButton class="select-all"
                 :is-clicked="selectAll" @click.n.native="selectClick"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="goShop">去计算({{cartCount}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  import {mapGetters} from "vuex";

  export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
		  totalPrice() {
        const cartList = this.$store.getters.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      selectAll() {
        if (this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      },
      ...mapGetters(['cartCount','cartList'])
    },
    methods: {
      selectClick() {
        // if (this.selectAll){
        //   //全部选择
        //   this.cartList.forEach(item => item.checked = false)
        // }else {
        //   //有一个或多个没选中
        //   this.cartList.forEach(item => item.checked = true)
        // }
        const select = !this.selectAll
        this.cartList.forEach(item => item.checked = select)
      },
      goShop() {
        if (!this.selectAll)
          this.$toast.show('请选择商品')
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
