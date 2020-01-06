import React from 'react'
import { connect,  } from "react-redux";

import {increment,decrement,incrementAsync} from '../redux/actions'
import Counter from '../components/counter';

//index.js最终渲染的app
export default connect(
    //第一个参数一般数据 和 第二个参数 函数数据
    state=>({count:state}), //返回的是一个对象{count:值从state中取出}
    {increment,decrement, incrementAsync}   //第二个参数也是对象，不过对象里面的是两个方法（函数）
                            // {increment:increment,decrement:decrement} increment需要和声明的prototypes一致，：后面的increment需要和action一致

    //最终这两个对象里面的数据都会被解构(...)，交给App作为它的属性名
)(Counter)

//connect是一个函数，需要接受一个参数（组件类）
//该函数执行以后返回的是一个函数，新的组件