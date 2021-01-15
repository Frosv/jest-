/*
 * @Author: your name
 * @Date: 2021-01-15 09:41:12
 * @LastEditTime: 2021-01-15 16:08:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/element-form.spec.js
 */

import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import elementForm from '@/views/element-form.vue'
import ElementUI from 'element-ui'
const localVue = createLocalVue()

localVue.use(ElementUI)

/**
 * 测试思路
 * 1. 活动名称
 *  a. 测试活动名称文案是否正确
 *  b. 测试活动名称输入数值是否正确获取
 *  c. 测试活动名称校验规则 超出字符，特殊字符
 * 2. 活动区域
 *  a. 模拟用户点击select
 *
 */

describe('elementForm', () => {
  const wrapper = shallowMount(elementForm, {
    localVue,
    stubs: {
      'el-form': ElementUI.Form,
      'el-form-item': ElementUI.FormItem,
      'el-input': ElementUI.Input,
      'el-select': ElementUI.Select,
      'el-option': ElementUI.Option,
      'el-button': ElementUI.Button,
      'el-date-picker': ElementUI.DatePicker
    }
  })

  it('测试快照', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('活动名称label', () => {
    expect(
      wrapper.findAll('.el-form-item__label').at(0).text()
    ).toEqual('活动名称')
  })

  // 活动名称输入
  it('活动名称输入', () => {
    wrapper.find('#actived').setValue('123')
    expect(wrapper.vm.form.name).toEqual('123')
  })

  it('模拟用户点击select', () => {

  })

  it('点击提交', () => {

  })
})
