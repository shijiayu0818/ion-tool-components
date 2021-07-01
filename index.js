/*
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-06-29 16:08:27
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-07-01 10:20:23
 */
import SjySecend from './src/components/sjySecend/index.js'
import First from './src/components/first/index.js'
// import _Vue from 'vue'

const components = [ First, SjySecend]
const install = (Vue, opts = {}) => {
  components.forEach(component => {
    console.log(component)
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// const components = [ First, Main]
// const install = function(Vue) {
//   if(install.installed) return 
//   components.map(component => Vue.component(component.name, component))
// }
// // 判断是否是直接引入文件
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default {
  install,
  First,
  SjySecend
}