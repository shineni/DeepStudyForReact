import React, {Component} from 'react'

export default class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    const num = this.refs.numSelect.value*1
    const count = this.state.count + num
    this.setState({count})
  }

  decrement = () => {
    const num = this.refs.numSelect.value*1
    const count = this.state.count - num
    this.setState({count})
  }

  incrementIfOdd = () => {
    let count = this.state.count
    if(count%2==1) {
      const num = this.refs.numSelect.value*1
      count += num
      this.setState({count})
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      const num = this.refs.numSelect.value*1
      const count = this.state.count + num
      this.setState({count})
    }, 1000)
  }

  render () {
    const {count} = this.state

    return (
      <div>
        <p>
          click {count} times {' '}
        </p>
        <select ref="numSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{' '}
        <button onClick={this.increment}>+</button>{' '}
        <button onClick={this.decrement}>-</button>{' '}
        <button onClick={this.incrementIfOdd}>increment if odd</button>{' '}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}