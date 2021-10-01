import Toast from "@/components/common/toast/Toast";

const obj = {}

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2.new 组件构造器 创建组件
  const toast = new toastContrustor
  //3.挂在组件在div上
  toast.$mount(document.createElement('div'))

  //4.toast.$el 就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
