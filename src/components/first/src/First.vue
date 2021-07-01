<!--
 * @description: no
 * @versions: 1.0
 * @Author: Shi Shi
 * @Date: 2021-06-30 10:24:53
 * @LastEditors: Shi Shi
 * @LastEditTime: 2021-07-01 10:19:30
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in propArr" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'First',
  props: {
    propArr: {
      type: Array,
      default: []
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>
</style>
