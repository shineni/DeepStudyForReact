import React, {Component} from 'react'

import Search from "./search";
import Main from "./main";

export default class App extends Component{

    state = {
        searchName : '',
    }

    setSearchName = (searchName) => {
        // this.setSearchName = searchName //这样更新是不行的
        //更新状态
        this.setState({searchName})
    }

    render(){
        return(
            <div className="container">
                <Search setSearchName={this.setSearchName}/>
                <Main searchName={this.state.searchName}/>
            </div>
        )
    }
}