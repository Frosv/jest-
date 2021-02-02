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
})
