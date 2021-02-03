/*
 * @Author: your name
 * @Date: 2021-02-03 19:53:52
 * @LastEditTime: 2021-02-03 20:12:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/tests/unit/sessionStorage.spec copy.js
 */
import {
  shallowMount
} from '@vue/test-utils'
import losessionStoragecation from '@/views/sessionStorage.vue'

const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('the La Croix cans on my desk', () => {
  const wrapper = shallowMount(losessionStoragecation)
  
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });
});
