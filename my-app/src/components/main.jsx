import React, {Component} from 'react'
import PropTypes from 'prop-types'
import search from "./search";
import axios from 'axios'

export default class Main extends Component{

    static propTypes = {
        searchName:PropTypes.string.isRequired
    }

    state = {
        initView : true,
        loading : false,
        users : null,
        errorMsg : null
    }

    //当组件接收到新的属性时回调
    componentWillReceiveProps(newProps, nextContext) {
        const {searchName} = newProps
        //更新状态(请求中)
        this.setState({
            initView :false,
            loading:true
        })
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url).then(response => {
            //得到相应数据
            const result = response.data
            console.log(resule)
            const users = result.items.map(item=>({name:item.login}))
            //更新状态(成功)

        }).catch(error => {
            //更新状态(失败)

        })
    }

    render(){
        const {initView,loading,users, errorMsg} = this.state
        const {searchName} = this.props
        console.log('render()',searchName)

        if(initView) {
            return <h2>请输入关键词进行搜索{searchName}</h2>
        }else if(loading){
            return <h2>正在请求中...</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else {
            return(
                <div className="row">
                    {
                        users.map((user,index)=>(  //{}里面要return
                            <div className="card">
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}