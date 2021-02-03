/*
 * @Author: your name
 * @Date: 2021-02-03 08:46:07
 * @LastEditTime: 2021-02-03 11:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/src/api/api.js
 */
import axios from 'axios'

export const test = (obj) => axios.get('test',obj)
