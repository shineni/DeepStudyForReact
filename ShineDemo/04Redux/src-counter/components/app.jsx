import React, {Component} from 'react'

import {INCREMENT,DECREMENT} from '../redux/action-types'
//import {increment,decrement} from '../redux/actions'
import * as actions from '../redux/actions'

export default class App extends Component{ 
    // state={
    //     count:0
    // }

    increment=()=>{

        // const num = this.refs.numberSelect.value*1
        // const count = this.state.count + num
        // //console.log(count)
        // this.setState({count})

        const num = this.refs.numberSelect.value*1
        this.props.store.dispatch(actions.increment(num))
    }

    decrement =()=>{
        // const num = this.refs.numberSelect.value*1
        // const count = this.state.count - num
        // //console.log(count)
        // this.setState({count})

        const num = this.refs.numberSelect.value*1
        this.props.store.dispatch(actions.decrement(num))

    }

    incrementIfOdd=()=>{
        // const num = this.refs.numberSelect.value*1
        // let {count} = this.state
        // if(count%2===0){
        //     count +=num
        //     this.setState({count})
        // }
        const num = this.refs.numberSelect.value * 1
        let count = this.props.store.getState()
        if(count%2===0){
            this.props.store.dispatch(actions.increment(num))
        }
    }

    incrementAsync=()=>{
        setTimeout(()=>{
            // const num = this.refs.numberSelect.value*1
            // const count = this.state.count + num
            // //console.log(count)
            // this.setState({count})

            const num = this.refs.numberSelect.value*1
            this.props.store.dispatch(actions.increment(num))
        },2000)

    }

    render(){
        const count = this.props.store.getState()
        console.log(count)
        return(
            <div>
                <p>click {count} items</p>
                <select ref="numberSelect">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick = {this.increment}>+</button>&nbsp;&nbsp;
                <button onClick = {this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick = {this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
                <button onClick = {this.incrementAsync}>increment async</button>&nbsp;&nbsp;
            </div>
        )
    }
}