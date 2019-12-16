
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import './index.css'

export default class App extends Component{}
【命名规范】
1. 引入第三方模块写模块名，引入自定义模块需要写路径
2. 一般引入第三方的组件与引入自定义的组件中间需要空一行
3. 第三方组件与组件类中间也需要空一行
4. 所有组件都可以放到一个文件夹中components,【组件命名规律：文件名小写，组件名大写，组件的后缀名用jsx便于区分是一般模块还是组件模块，不过组件后缀名也可以用js】
5. 文件名用comment+'-'+  例如 comment-add 和 comment-list

创建steps:
1. 拆分组件：数据需要动态展示的才有拆的必要，静态文字不需要拆
2. 根据组件的个数在componnets 里面创建组件文件夹包含jsx(html+js), css
3. 定义静态组件（定义全局的bootstrap样式：在public中创建一个文件夹css，然后在css中添加bootstrap文件，最后在全局引用, public下面所有的资源就是应用根目录下的所有资源）