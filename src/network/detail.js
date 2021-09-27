import {request} from "@/network/request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(columns, itemInfo, services) {
    this.columns = columns
    this.desc = itemInfo.desc
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.discountBgColor = itemInfo.discountBgColor
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
