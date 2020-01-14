import React,{Component} from 'react'

export default class CommentItem extends Component{
    render(){
        return (
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="handle">
                      <a href="javascript:;">删除</a>
                    </div>
                    <p className="user"><span >xxx</span><span>说:</span></p>
                    <p className="centence">React不错!</p>
                  </li>
                  <li className="list-group-item">
                    <div className="handle">
                      <a href="javascript:;">删除</a>
                    </div>
                    <p className="user"><span >yyy</span><span>说:</span></p>
                    <p className="centence">React有点难!</p>
                  </li>
                </ul>            
        )
    }
}