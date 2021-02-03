/*
 * @Author: your name
 * @Date: 2021-01-11 14:13:36
 * @LastEditTime: 2021-02-03 20:55:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/primary.spec.js
 */

import { shallowMount } from '@vue/test-utils'
import losessionStoragecation from '@/views/sessionStorage.vue'

describe('location', () => {
  const wrapper = shallowMount(losessionStoragecation)
  sessionStorage.setItem('user', 123)
  // await Vue.nextTick()
  it('测试快照', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('init', () => {
    wrapper.vm.init()
  })
})
