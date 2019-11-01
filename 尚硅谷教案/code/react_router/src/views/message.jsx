import React from 'react'
import {Link, Route} from 'react-router-dom'
import MessageDetail from "./message-detail"

export default class Message extends React.Component {
  state = {
    messages: []
  }

  componentDidMount () {
    // 模拟发送ajax请求
    setTimeout(() => {
      const data = [
        {id: 1, title: 'Message001'},
        {id: 3, title: 'Message003'},
        {id: 6, title: 'Message006'},
      ]
      this.setState({
        messages: data
      })
    }, 1000)
  }

  ShowDetail = (id) => {
    this.props.history.push(`/home/message/${id}`)
  }

  ShowDetail2 = (id) => {
    this.props.history.replace(`/home/message/${id}`)
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  render () {
    const path = this.props.match.path

    return (
      <div>
        <ul>
          {
            this.state.messages.map((m, index) => {
              return (
                <li key={index}>
                  <Link to={`${path}/${m.id}`}>{m.title}</Link>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={() => this.ShowDetail(m.id)}>查看详情(push)</button>&nbsp;
                  <button onClick={() => this.ShowDetail2(m.id)}>查看详情(replace)</button>
                </li>
              )
            })
          }
        </ul>
        <p>
          <button onClick={this.back}>返回</button>&nbsp;
          <button onClick={this.forward}>前进</button>&nbsp;
        </p>
        <hr/>
        <Route path={`${path}/:id`} component={MessageDetail}></Route>
      </div>
    )
  }
}