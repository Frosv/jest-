
# 单元测试思维逻辑

## 前言

由于目前jest相关文档中文翻译进度缓慢与网络上针对vue+element+jest单元测试资料很少，个人将通过自己的学习能力将自己对单元测试理解编写出来，提供给大家学习

## 什么是单元测试

单元测试是用来对一个模块、一个函数或者一个类来进行正确性检验的测试工作。

## 为什么要单元测试

单元测试可以有效地测试某个程序模块的行为，是未来重构代码的信心保证。

单元测试通过了并不意味着程序就没有bug了，但是不通过程序肯定有bug。

## 单元测试要测什么

单元测试的测试用例要覆盖常用的输入组合、边界条件和异常。

## 为什么选Jest

容易上手，开箱即用，功能全面

## 安装@vue/test-utils + jest

执行安装

``` cmd
yarn add --dev @vue/test-utils jest
or
npm i -D @vue/test-utils jest
```

初始化配置文件

## 文件结构

src ->
  views ->
    hello.vue -- 简单vue结构
    element.vue -- 加入element 简单登录页面
tests ->
  unit ->
    element-ui.spec.js -- 针对加入elemnt组件测试

## given > when > then

1. 确定程序的所有输入和输出；
2. 确定程序所有状态；
3. 确定程序主路径（主流程）；
4. 确定程序的功能（所有分支）；
5. 产生试验子功能 X 的输入，这里 X 为众多子功能之一；
6. 制定验证子功能的 X 的输出；
7. 执行测试用例 X 的软件；
8. 检验测试用例 X 结果的正确性；
9. 对其余子功能，重复（7）和（8）；
10. 重复（4）~（8），然后再进行（9），进行回归测试。

### given

测试的参数

### when

测试在哪些地方做什么

### then

测试哪些结果

## 测试金字塔

为了维持金字塔形状，一个健康、快速、可维护的测试组合应该是这样的：写许多小而快的单元测试。适当写一些更粗粒度的测试，写很少高层次的端到端测试。注意不要让你的测试变成冰淇淋那样子，这对维护来说将是一个噩梦，并且跑一遍也需要太多时间。（via测试金字塔实战 – ThoughtWorks洞见）

## 常见问题

问题1：vue/cli-plugin-unit-jest should have "jest-preset.js"

vue/cli-plugin-unit-jest 版本过低 提高版本

在jest中如果想捕获函数的调用情况，则该函数必须被mock或者spy！

## axios mock

将系统中的axios自己定义的axios

```js
// 将代理定义在import之前
jest.mock('axios',() =>{
  post: jest.fn(() => Promise.resolve({
    data: {},
    code: 0
  }))
})

import axios from 'axios'

expect(axios.post).toBeCalledWith(url,params)
```

### window location

``` js
// 创建window属性访问对象，将其属性变成可写状态
beforeEach(() => {
  const url = 'http://test.com'
  Object.defineProperty(window,'location',{
    value: {
      href: url
    },
    writable: true
  })
})
```

### vuex


