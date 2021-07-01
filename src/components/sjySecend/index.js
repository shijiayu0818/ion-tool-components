/*
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-06-30 13:58:21
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-07-01 10:49:54
 */
import SjySecend from './src/SjySecend.vue';
import _Vue from 'vue'
/* istanbul ignore next */
SjySecend.install = function(Vue) {
  if (!Vue) {
    window.Vue = Vue = _Vue
    }
  Vue.component(SjySecend.name, SjySecend);
};

export default SjySecend;