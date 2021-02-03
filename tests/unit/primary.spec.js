/*
 * @Author: your name
 * @Date: 2021-01-11 14:13:36
 * @LastEditTime: 2021-02-03 20:32:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/primary.spec.js
 */

import { shallowMount } from '@vue/test-utils'
import primary from '@/views/primary.vue'

describe('primary', () => {
  const wrapper = shallowMount(primary)
  it('测试快照', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('检查data中test是否为1', () => {
    expect(wrapper.vm.test).toEqual(1)
  })

  it('检查prop传值', () => {
    wrapper.setProps({
      msg: 2
    })

    expect(wrapper.vm.msg).toEqual(2)
  })

  it('点击h2方法', () => {
    wrapper.find('h2').trigger('click')
    expect(wrapper.vm.test).toEqual(2)
  })

  it('点击h3方法', async () => {
    // given 如果不设置这个值 else dom元素不会出现则无法点击
    wrapper.setData({
      branch: false
    })
    await wrapper.vm.$nextTick()
    // when
    wrapper.find('h3').trigger('click')
    // then
    expect(wrapper.vm.test).toEqual(3)
  })
})
