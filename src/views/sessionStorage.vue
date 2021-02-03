<!--
 * @Author: your name
 * @Date: 2021-02-03 08:46:07
 * @LastEditTime: 2021-02-03 08:50:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/src/views/sessionStorage.vue
-->
<template>
  <div>sessionStorage</div>
</template>

<script>
export default {
  name:'sessionStorage',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const user = sessionStorage.getItem('user')
      console.log(user)
      if (user) {
        console.log(user)
      }
    }
  }
}
</script>
