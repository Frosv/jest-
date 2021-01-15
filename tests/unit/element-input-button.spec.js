/*
 * @Author: your name
 * @Date: 2021-01-11 14:13:36
 * @LastEditTime: 2021-01-15 16:24:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/hello.spec.js
 */

import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import element from '@/views/element-input-button.vue'
import ElementUI from 'element-ui'
const localVue = createLocalVue()

localVue.use(ElementUI)
/**
 * 测试思路
 * 1、获取快照对比
 * 2、按钮显示“登录”（UI）
 * 3、登录点击事件是否触发click
 * 4、账户名输入vmodel是否获取到值
 * 5、账号输入校验字符长度小于5
 */
describe('element', () => {
  // stubs挂载需要的子组件 例如 el-input-stub 变
  const wrapper = shallowMount(element, {
    localVue,
    stubs: {
      'el-button': ElementUI.Button,
      'el-input': ElementUI.Input
    }
  })

  it('测试快照', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('按钮文案-登录', () => {
    expect(
      wrapper.find('#login').text()
    ).toEqual('登录')
  })

  it('登录点击事件', () => {
    const el = wrapper.findComponent({
      ref: 'login'
    })
    el.vm.$emit('click')
    expect(el.emitted().click).toBeTruthy()
  })

  it('账户名输入', () => {
    wrapper.find('#account').setValue('123')

    expect(wrapper.vm.account).toEqual('123')
  })

  it('账户名输入校验', () => {
    wrapper.findComponent({
      ref: 'account'
    }).vm.$emit('input', 1111)
    expect(wrapper.vm.successMsg).toEqual('字符长度小于5')
  })
})
