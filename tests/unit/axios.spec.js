jest.mock('axios',() =>{
  post: jest.fn(() => Promise.resolve({
    data: {},
    code: 0
  }))
})

import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import location from '@/views/location.vue'

import axios from 'axios'

const localVue = new createLocalVue()

localVue.use(axios)

describe('location', () => {
  const wrapper = shallowMount(location, {
    localVue
  })
  // sessionStorage.setItem('user', 123)
  // await Vue.nextTick()
  it('测试快照', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('test',()=>{
    wrapper.vm.init()
    expect(axios.post).toBeCalledWith('/roles/getPersonnelInfoRoles',{key: 'value'})
  })
})
