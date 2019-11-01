/**
 * 上部的搜索模块
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

  static propTypes = {
    refreshName: PropTypes.func.isRequired
  }

  search = () => {
    var name = this.nameInput.value
    this.props.refreshName(name)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="enter the name you search"
               ref={(input => this.nameInput = input)}/>
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}

export default Search