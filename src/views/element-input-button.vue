<!--
 * @Author: your name
 * @Date: 2021-01-14 08:53:43
 * @LastEditTime: 2021-01-29 11:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/src/views/element.vue
-->

<template>
  <div>
    <el-input ref="account" id="account" v-model="account" @input="onInputAccount" placeholder="请输入内容">

    </el-input>
    <el-button type="primary" id="login" @click="login" ref="login">登录</el-button>
    <div>{{successMsg}}</div>
    <div id="login2" @click="login">123</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      account: '',
      successMsg: ''
    }
  },
  methods: {
    login () {
      console.log(123)
    },
    onInputAccount (val) {
      if (val && val.length < 5) {
        this.successMsg = '字符长度小于5'
      }
    },
    save () {
      sessionStorage.setItem('name', '123')
    }
  }
}
</script>
