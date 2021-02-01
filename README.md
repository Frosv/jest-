
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

## Mocha 与 Jest

### Mocha

Mocha是JavaScript界中最受欢迎的一款单元测试框架。

1. 灵活性
  Mocha比较灵活，和更多的一些库结合使用。

2. 资料较多
  Mocha是比较年老的测试框架，在JavaScript界中更加广泛地使用。因此Mocha的community比较大，可参考的文献较多，测试过程中遇到一些问题，可以上网查一查可以获取不少的帮助。

### Jest

1. Jest容易安装配置
  Jest可以说是零配置的，它会自动识别一些测试文件。只要用npm安装jest之后运行jest，即可完成测试，非常容易。

2. Jest提供snapshot功能
  snapshot功能能够确保UI不会意外被改变。Jest会把结果值保存在一个文件当中，每次进行测试的时候会把测试值与文件中的结果值进行比较，如果两个结果值不同，那么开发者可以选择要么改变代码，要么替代结果文件

### 差异

```js code
'use strict'
var Math = {
  add(a, b) {
    return a + b;
  }
}
module.exports = Math;
```

```js jest
jest.unmock('../Math'); // unmock to use the actual implementation of Math

var math = require('../Math');

describe("Math", function() {
  var firstOperand;
  var secondOperand;

  beforeEach(function() {
    firstOperand = 2;
    secondOperand = 3;
  });

  it("should add two numbers", function() {
    var result = math.add(firstOperand, secondOperand);
    expect(result).toEqual(firstOperand + secondOperand);
  });

});
```

```js mocha
var assert = require('assert'); // nodejs 内建断言
var math = require('../Math');

describe("Math", function() {
  var firstOperand;
  var secondOperand;

  beforeEach(function() {
    firstOperand = 2;
    secondOperand = 3;
  });

  it("should add two numbers", function() {
    var result = math.add(firstOperand, secondOperand);
    assert.equal(result, firstOperand + secondOperand);
  });

});
```
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


