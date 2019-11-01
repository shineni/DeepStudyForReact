import React from 'react'
import Search from './search'
import UserList from './user-list'

export default class App extends React.Component {

  state = {
    searchName: ''
  }

  refreshName = (searchName) => this.setState({searchName})

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search refreshName={this.refreshName}/>
        </section>
        <UserList searchName={this.state.searchName}/>
      </div>
    )
  }

}
