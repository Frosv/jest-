<!--
 * @Author: your name
 * @Date: 2021-02-03 08:46:07
 * @LastEditTime: 2021-02-03 10:46:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/src/views/axios.vue
-->
<template>
  <div>axios</div>
</template>

<script>
import axios from '../api/index'
export default {
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // get
      axios.test.test({}).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
