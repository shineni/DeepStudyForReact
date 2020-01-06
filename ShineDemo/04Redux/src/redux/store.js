import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {counter} from './reducers'

 const store = createStore(
     counter, 
     applyMiddleware(thunk) //应用上异步中间件
     ) //内部会第一次调用reducer函数得到初始的state
 export default store
 //只有一个store对象， 所以可以有export default来输出