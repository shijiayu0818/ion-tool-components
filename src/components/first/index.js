/*
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-06-30 13:55:15
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-07-01 10:49:33
 */
import First from './src/First.vue'
import _Vue from 'vue'

/* istanbul ignore next */
First.install = function(Vue) {
  if (!Vue) {
    window.Vue = Vue = _Vue
    }
  Vue.component(First.name, First);
};

export default First;
