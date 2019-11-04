# React学习笔记
## 1. React入门
###1.1 React是什么
		Facebook 开源的用于动态构建用户页面的js库。构建用户界面简而言之就是展示数据。
### 1.2 React的特点
1. 声明式编码（传统的jquery库是命令式的函数库，用这些函数直接操做DOM节点）
2. 组件化的编程思想
3. Learn once,write anywhere
4. 高效 （从两个方面着手）
	- 减少更新的次数：采用虚拟DOM,进行批量地更新
    - 缩小更新的区域： DOM diff算法，最小化页面的重绘   
5. 单向数据流

### 1.3 React的涉及的库
	react.js React 核心库
    react-dom.js 用于操作虚拟dom
    bable.min.js 1.将ES6翻译成ES5  2.可以翻译JSX的语法
    
    React编程思路：
    1.创建虚拟DOM
    2.将虚拟DOM 渲染到指定的节点上



