/*
 * @Author: your name
 * @Date: 2021-01-11 14:13:36
 * @LastEditTime: 2021-01-14 16:19:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/primary.spec.js
 */

import { shallowMount } from '@vue/test-utils'
import location from '@/views/axios.vue'

describe('location', () => {
  const wrapper = shallowMount(location)
  // sessionStorage.setItem('user', 123)
  // await Vue.nextTick()
  it('测试快照', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('init', () => {
    // wrapper.vm.init()
  })
})
