/*
 * @Author: your name
 * @Date: 2021-01-11 14:13:36
 * @LastEditTime: 2021-01-14 09:02:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/hello.spec.js
 */

import { shallowMount } from '@vue/test-utils'
import hello from '@/views/hello.vue'

describe('hello', () => {
  const wrapper = shallowMount(hello)
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
