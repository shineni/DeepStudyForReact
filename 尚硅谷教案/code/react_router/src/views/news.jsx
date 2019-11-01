import React from 'react'

export default class News extends React.Component {
  state = {
    newsArr: ['news001', 'news002', 'news003']
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.state.newsArr.map((news, index) => <li key={index}>{news}</li>)
          }
        </ul>
      </div>
    )
  }
}