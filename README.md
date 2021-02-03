
# 单元测试入门

## 前言

由于目前jest相关文档中文翻译进度缓慢与网络上针对vue+element+jest单元测试资料很少，个人将通过自己的学习能力将自己对单元测试理解编写出来，提供给大家学习

### 什么是单元测试

单元测试是用来对一个模块、一个函数或者一个类来进行正确性检验的测试工作。

### 为什么要单元测试

单元测试可以有效地测试某个程序模块的行为，是未来重构代码的信心保证。

单元测试通过了并不意味着程序就没有bug了，但是不通过程序肯定有bug。

### 单元测试要测什么

单元测试的测试用例要覆盖常用的输入组合、边界条件和异常。

## 选择框架

### Vue Test Utils

测试运行器 (test runner) 就是运行测试的程序

用于获取dom元素，设置vue组件参数，模拟组件需要vue环境等方式构建vue组件运行容器

### Mocha 与 Jest

#### Mocha

Mocha是JavaScript界中最受欢迎的一款单元测试框架。

1. 灵活性
  Mocha比较灵活，和更多的一些库结合使用。

2. 资料较多
  Mocha是比较年老的测试框架，在JavaScript界中更加广泛地使用。因此Mocha的community比较大，可参考的文献较多，测试过程中遇到一些问题，可以上网查一查可以获取不少的帮助。

#### Jest

1. Jest容易安装配置
  Jest可以说是零配置的，它会自动识别一些测试文件。只要用npm安装jest之后运行jest，即可完成测试，非常容易。

2. Jest提供snapshot功能
  snapshot功能能够确保UI不会意外被改变。Jest会把结果值保存在一个文件当中，每次进行测试的时候会把测试值与文件中的结果值进行比较，如果两个结果值不同，那么开发者可以选择要么改变代码，要么替代结果文件

#### 差异

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

#### 为什么选Jest

容易上手，开箱即用，功能全面

## 安装@vue/test-utils + jest

执行安装

``` cmd
yarn add --dev @vue/test-utils jest
or
npm i -D @vue/test-utils jest
```

配置jest.config.js

```js
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
```

配置package.json

```js
"scripts": {
  "test": "vue-cli-service test:unit --coverage --watchAll",
}
```

## 方法API

### @vue/test-utils

#### mount()

创建一个包含被挂载和渲染的 Vue 组件的 Wrapper。

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

describe('Foo', () => {
  it('renders a div', () => {
    const wrapper = mount(Foo)
    expect(wrapper.contains('div')).toBe(true)
  })
})
```

#### shallowMount()

和 mount 一样，创建一个包含被挂载和渲染的 Vue 组件的 Wrapper，不同的是被存根的子组件。

```js
import { shallowMount } from '@vue/test-utils'
import Foo from './Foo.vue'

describe('Foo', () => {
  it('renders a div', () => {
    const wrapper = shallowMount(Foo)
    expect(wrapper.contains('div')).toBe(true)
  })
})
```

#### find()

返回第一个DOM节点或Vue组件匹配选择器的包装器。

> 不建议使用find查找组件。 请改用findComponent。 find方法将继续使用任何有效的选择器来查找元素。

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const wrapper = mount(Foo)

const div = wrapper.find('div')
expect(div.exists()).toBe(true)

const byId = wrapper.find('#bar')
expect(byId.element.id).toBe('bar')
```

#### findComponent()

返回第一个匹配的Vue组件的包装器。

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const wrapper = mount(Foo)

const bar = wrapper.findComponent(Bar) // => finds Bar by component instance
expect(bar.exists()).toBe(true)
const barByName = wrapper.findComponent({ name: 'bar' }) // => finds Bar by `name`
expect(barByName.exists()).toBe(true)
const barRef = wrapper.findComponent({ ref: 'bar' }) // => finds Bar by `ref`
expect(barRef.exists()).toBe(true)
```

#### setValue()

置文本控件输入或选择元素的值，并更新`v-model`绑定的数据。

```js
<el-input v-model="value"></el-input>

wrapper.find('#input').setValue('123')

expect(wrapper.vm.value).toEqual('123')
```

#### setProps()

为 WrapperArray 的每个 Wrapper vm 都设置 prop 并强行更新。

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

test('setProps demo', async () => {
  const wrapper = mount(Foo)
  const barArray = wrapper.findAll(Bar)
  await barArray.setProps({ foo: 'bar' })
  expect(barArray.at(0).vm.foo).toBe('bar')
})
```

如果在获取时参数没变化可以使用 `wrapper.vm.$nextTick()`

### jest

#### beforeEach(fn, timeout)

在运行此文件中的每个测试之前运行一个函数。 如果函数返回一个Promise或是一个生成器，Jest将在运行测试之前等待该Promise解析。

```js
beforeEach(() => {
  // do something
});
```

#### expect()

每次测试单元都需要使用`expect`做断言

```js
// 断言参数是否等于1
expect(wrapper.vm.test).toEqual(1)
```

#### expect().not

判断结果相反的参数

```js
// 断言参数不等于1
expect(wrapper.vm.test).not.toEqual(1)
```

#### expect().toBe

使用.toBe比较原始值或检查对象实例的引用身份。 它调用Object.is来比较值，这对于测试比===严格相等运算符甚至更好。

#### expect().toEqual

使用.toEqual递归比较对象实例的所有属性（也称为“深度”相等）。 它调用Object.is比较原始值，这对于测试比===严格相等运算符甚至更好

toBe与toEqual

tests/unit/toEqual.js

toBe比较原始值与引用地址是否正确

如果要对比2个对象，就使用toEqual避免匹配引用地址

## 实际例子

### 文件结构

src ->
  views ->
    primary.vue -- 简单vue结构
tests ->
  unit ->
    element-ui.spec.js -- 针对加入elemnt组件测试

## 测试思维逻辑 given > when > then

### given

测试的参数

### when

测试在哪些地方做什么

### then

测试哪些结果

## 测试金字塔

为了维持金字塔形状，一个健康、快速、可维护的测试组合应该是这样的：写许多小而快的单元测试。适当写一些更粗粒度的测试，写很少高层次的端到端测试。注意不要让你的测试变成冰淇淋那样子，这对维护来说将是一个噩梦，并且跑一遍也需要太多时间。（via测试金字塔实战 – ThoughtWorks洞见）

### 简化思维

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

### 提高覆盖率不一样测试完成

很多时候我们需要自己额外的校验我们测试的是否正确

axios.js

我们测试的时候可以直接使用`.toBeCalled()`判断是否执行方法，但是其实我们可以再验证请求的地址是否正确的

## 调试

### 如何查看自己html结构

在每个测试用例中第一个用例就是快照

```js
it('测试快照', () => {
  expect(wrapper).toMatchSnapshot()
})
```

在`tests/unit/__snapshots__`中会存在`name.spec.js.snap`快照，可以查看dom元素是否加载

### 如何在vscode上测试

vscode 菜单栏中 运行 -> 启动调试 提示让你配置参数

```js launch.json
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
  
    
    {
      "type": "node",
      "name": "vscode-jest-tests",
      "request": "launch",
      "args": [
        "--runInBand"
      ],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "program": "${workspaceFolder}/node_modules/jest/bin/jest"
    }
  ]
}
```

将运行指向本地node_modules文件中

使用vscode断点系统我们就可以在vscode中看到很多的参数

## Element UI

```js
import ElementUI from 'element-ui'

localVue.use(ElementUI)

// stubs挂载需要的子组件 例如 el-input-stub 变
const wrapper = shallowMount(element, {
  localVue,
  stubs: {
    'el-button': ElementUI.Button,
    'el-input': ElementUI.Input
  }
})
```


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

## 常见问题

问题1：vue/cli-plugin-unit-jest should have "jest-preset.js"

vue/cli-plugin-unit-jest 版本过低 提高版本

在jest中如果想捕获函数的调用情况，则该函数必须被mock或者spy
