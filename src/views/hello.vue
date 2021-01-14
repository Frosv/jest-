<!--
 * @Author: your name
 * @Date: 2021-01-11 14:13:52
 * @LastEditTime: 2021-01-11 16:21:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/src/views/hello.vue
-->
<template>
  <div>
    <h2 v-if="branch" @click="onH2">
      {{msg}}
    </h2>
    <h3 v-else @click="onH3">
      {{test}}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      test: 1,
      branch: true
    }
  },
  methods: {
    onH2 () {
      this.test = 2
    },
    onH3 () {
      this.test = 3
    }
  }
}
</script>
