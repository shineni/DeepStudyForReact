/*
包含n个reducer函数的模块
不写export的原因是一个模块只能写一个default
export function counter(){

}
export function counter2(){
    
}
这么写整个模块其实是一个对象，该对象包含两个方法
接受两个参数： state, action
*/
import {INCREMENT,DECREMENT} from './action-types'

export function counter(state=0,action){
    console.log('counter()',state,action)
    switch(action.type){
        case 'INCREMENT':
            return state + action.data
        case 'DECREMENT':
            return state -action.data
        default :
            return state;
    }
}
