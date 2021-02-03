/*
 * @Author: your name
 * @Date: 2021-02-03 08:46:07
 * @LastEditTime: 2021-02-03 15:54:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/axios.spec.js
 */

jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({
    data: {},
    code: 200
  })),
  get: jest.fn(() => Promise.resolve({
    data: {},
    code: 200
  })),
  defaults:{
    
  },
  interceptors:{
    response:{
      use: jest.fn()
    },
    request:{
      use: jest.fn()
    }
  }
}))

import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import location from '@/views/axios.vue'

import axios from 'axios'

const localVue = new createLocalVue()

describe('location', () => {
  const wrapper = shallowMount(location, {
    localVue
  })
  it('测试快照', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('test', () => {
    wrapper.vm.init()
    expect(axios.get).toBeCalledWith('test', {})
  })
})
