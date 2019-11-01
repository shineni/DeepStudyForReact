import React, {Component} from 'react'
// 分别引入需要使用的组件
// import Button from 'antd-mobile/lib/button'
// import Toast from 'antd-mobile/lib/toast'
import {Button, Toast} from 'antd-mobile'
export default class App extends Component {
  handleClick = () => {

    Toast.info('提交成功', 2)
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>提交</Button>
      </div>
    )
  }
}