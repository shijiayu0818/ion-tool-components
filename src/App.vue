<!--
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-06-29 16:06:56
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-07-01 14:41:48
-->
<template>
  <div>
    <SjySecend :propData="initData" />
    <First :propArr="propArr"></First>
  </div>
</template>

<script>
import SjySecend from './components/sjySecend/index.js'
import First from './components/first/index.js'
export default {
  data () {
    return {
      initData: '哈哈哈，欢迎你',
      propArr: [
        {
          name: '我1',
          id: 'fs'
        },
        {
          name: '我2',
          id: 'fsd'
        }
      ]
    }
  },
  components: {
    SjySecend,
    First
  }
}
</script>

<style>
</style>