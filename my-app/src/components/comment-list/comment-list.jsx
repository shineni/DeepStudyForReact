import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './commentList.css'

export default class CommentList extends Component{

    //给组件类指定属性 不加static就是对组件对象添加属性
    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render(){

        const {comments} = this.props

        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复:</h3>
                <h2 style={{display:'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => <CommentItem comment={comment} key = {index}/>) //前面是属性参数comment 后面的comment是形参 数组类型必须有个key 官方要求 不然要警告
                    }
                </ul>
            </div>
        )
    }
}

//给当前组件类添加属性
// CommentList.propTypes = {
//     comments: PropTypes.array.isRequired
// }