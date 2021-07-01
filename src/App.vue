<!--
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-06-29 16:06:56
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-07-01 10:20:08
-->
<template>
  <div>
    <SjySecend :propData="initData" />
    <First :propArr="propArr"></First>
  </div>
</template>

<script>
// import Main from './components/Main'
// import First from './components/First'
import SjySecend from './components/sjySecend/index.js'
import First from './components/first/index.js'
// import First from '../index.js'
export default {
  data () {
    return {
      initData: 'hello 你好',
      propArr: [
        {
          name: '我i',
          id: 'fs'
        },
        {
          name: '我23',
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