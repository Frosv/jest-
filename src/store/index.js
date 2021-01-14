/*
 * @Author: your name
 * @Date: 2021-01-11 11:22:09
 * @LastEditTime: 2021-01-11 17:03:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++
  },
  actions: {
  },
  modules: {
  }
})
