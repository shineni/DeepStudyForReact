import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"; 
//有了Provider以后，Provider会帮助我们去做事件监听

import App from './containers/app'
import store from "./redux/store";

/*
改动Steps:
1. 用 Provider包裹起来
2. 将store的管理权交给Provider

*/
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
    ),document.getElementById('root'));   
