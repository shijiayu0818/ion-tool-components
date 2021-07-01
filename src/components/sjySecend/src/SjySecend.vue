<!--
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-06-29 16:08:14
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-07-01 10:19:21
-->
<template>
  <div class="container">
    <div>{{ msg }}</div>
    <div>{{ propData }}</div>
  </div>
</template>

<script>
export default {
  name: 'SjySecend',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    propData: {
      type: String,
      default: '我是默认值'
    }
  }
}
</script>

<style lang="scss">
.container {
  text-align: center;
}
</style>