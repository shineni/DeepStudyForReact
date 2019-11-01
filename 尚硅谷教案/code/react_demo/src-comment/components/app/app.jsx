import React from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      comments: []
    }

    this.delete = this.delete.bind(this)
  }

  componentDidMount () {
    //模拟异步获取数据
    setTimeout(() => {
      const comments = [
        {
          username: "Tom",
          content: "ReactJS好难啊!",
          id: Date.now()
        },
        {
          username: "JACK",
          content: "ReactJS还不错!",
          id: Date.now() + 1
        }
      ]
      this.setState({
        comments
      })
    }, 1000)
  }

  add = (comment) => {
    let comments = this.state.comments
    comments.unshift(comment)
    this.setState({ comments })
  }

  delete (index) {
    let comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
  }

  render () {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd add={this.add}/>
          <CommentList comments={this.state.comments} delete={this.delete}/>
        </div>
      </div>
    )
  }
}

export default App