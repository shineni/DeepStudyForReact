/*
应用组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as actions from '../redux/actions'

export default class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  increment = () => {
    const number = this.refs.numSelect.value * 1
    this.props.store.dispatch(actions.increment(number))
  }

  decrement = () => {
    const number = this.refs.numSelect.value * 1
    this.props.store.dispatch(actions.decrement(number))
  }

  incrementIfOdd = () => {
    const number = this.refs.numSelect.value * 1

    let count = this.props.store.getState()
    if (count % 2 === 1) {
      this.props.store.dispatch(actions.increment(number))
    }
  }

  incrementAsync = () => {
    const number = this.refs.numSelect.value * 1
    setTimeout(() => {
      this.props.store.dispatch(actions.increment(number))
    }, 1000)
  }

  render() {
    return (
      <div>
        <p>
          click {this.props.store.getState()} times {' '}
        </p>
        <select ref="numSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{' '}
        <button onClick={this.increment}>+</button>
        {' '}
        <button onClick={this.decrement}>-</button>
        {' '}
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        {' '}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
