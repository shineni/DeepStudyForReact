/*
包含所有 action creator, 一个action creator是创建action的函数
同步的action返回的是一个对象
异步的action返回的是一个函数
*/
import {INCREMENT,DECREMENT,INCREMENTASYNC} from '../redux/action-types'

//增加
export const increment=(number)=>({type:INCREMENT,data:number})
//减少
export const decrement=(number)=>({type:DECREMENT,data:number})
//异步，每个异步的action最后提供一个同步的action
//外面是一层函数，里面return的又是一层函数，在函数中才能执行异步的代码
export const incrementAsync = (number)=>{
    return dispatch=>{
        setTimeout(()=>{
            //2s后才去分发一个增加的action
            dispatch(increment(number))
        },2000)
    }
}
