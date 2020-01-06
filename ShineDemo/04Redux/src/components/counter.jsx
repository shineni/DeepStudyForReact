import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Counter extends Component{ 

    //声明接受哪些属性,通过connect来传递
    static propTypes ={
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired
    }

    increment=()=>{
        const num = this.refs.numberSelect.value*1
        this.props.increment(num)
    }

    decrement =()=>{
        const num = this.refs.numberSelect.value*1
        this.props.decrement(num)
    }

    incrementIfOdd=()=>{
        const num = this.refs.numberSelect.value * 1
        let {count}= this.props
        if(count%2===0){
            this.props.increment(num)
        }
    }

    incrementAsync=()=>{
        // setTimeout(()=>{
        //     const num = this.refs.numberSelect.value*1
        //     this.props.increment(num)
        // },2000)
        const num = this.refs.numberSelect.value*1
        this.props.incrementAsync(num)

    }

    render(){
        const {count} = this.props
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
