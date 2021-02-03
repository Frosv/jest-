/*
 * @Author: your name
 * @Date: 2021-02-03 08:46:07
 * @LastEditTime: 2021-02-03 20:40:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/addEventListener.spec.js
 */
import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import addEventListener from '@/views/addEventListener.vue'

describe('addEventListener', () => {
  global.addEventListener = jest.fn();
  const wrapper = shallowMount(addEventListener)

  it('1', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('2', async () => {
    const windowBeforeunload = new Event('click')
    console.log(window.location)

    window.dispatchEvent(windowBeforeunload)
    await wrapper.vm.$nextTick();
    // expect(wrapper.vm.testData).toEqual(123)
  })


})
