import React,{Component} from 'react'

import CommentAdd from '../comment-add/comment-add.jsx'
import CommentList from '../comment-list/comment-list.jsx'

export default class App extends Component{
    render(){
        return (
            <div>
            <header classNameName="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div class="container">
            <CommentAdd/>
            <CommentList/> 
            </div>

           
          </div>
        )
    }
}