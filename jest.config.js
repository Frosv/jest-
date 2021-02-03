/*
 * @Author: your name
 * @Date: 2021-01-11 11:22:09
 * @LastEditTime: 2021-02-03 15:40:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuetest/jest.config.js
 */
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  moduleFileExtensions:[
    'js',
    'vue'
  ],
  "collectCoverageFrom": [
    "src/**/**",
    "!**/node_modules/**",
    "!src/api/**",
    "!src/router/**",
    "!src/store/**",
    "!src/main.js",
  ]
}
