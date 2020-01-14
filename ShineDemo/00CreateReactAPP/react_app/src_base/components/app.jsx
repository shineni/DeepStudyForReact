import React,{Component} from 'react'
import logo from '../logo.svg'
import '../index.css'
//方式一：
/*
//创建组件
class App extends Component{
    render(){
        return (
            <div></div>
        )
    }
}
//暴露组件，外面才可以使用
export default App 
*/

//方式二：语句二合一
// Webstorm 定义模板：File-->Settings-->Live Template
export default class App extends Component{
    render(){
        return (
            <div>
                <img src={logo} alt="图片" className="logo"/>
                <p className="content">This is a React Component.</p>
            </div>
        )
    }
}