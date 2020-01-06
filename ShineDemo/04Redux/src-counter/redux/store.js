import {createStore} from 'redux'

 const store = createStore(counter) //内部会第一次调用reducer函数得到初始的state
 export default store
 //只有一个store对象， 所以可以有export default来输出