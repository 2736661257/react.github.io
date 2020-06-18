import React, { Component ,Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import About from './About'
import Home from './Home'
import Tel from './Tel'
import './style/App.css'
//在react中图片的使用必须要是这个样子声明一个变量然后在图片里引入变量，如果直接在图片里通过路径来引入的话显示不出来图片的
import logo from './Image/logo.png'
class App extends Component {
    constructor(props) {
        super(props)

        console.log('App初始化 ！！')
    }
    render() {
        return (
            <Fragment>
                <div className = "logo">
                    <img src = {logo} className = "logo"></img>
                </div>
                <hr className = "hr1"></hr>
                <ul className = "ul">
                    <div className = 'li'>
                        <li><a href="#/tel">联系我们</a></li>
                        <li><a href="#/detail/99">产品详情</a></li>
                        <li><a href="#/about">关于我们</a></li>
                        <li><a href="#/home">首页</a></li>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </ul>
                <div className = "child">
                    {this.props.children}
                </div>
                
               
                
            </Fragment>
        );
    }
}

const router1 = (
    <Router history={hashHistory}>

    </Router>
)

const router2 = (
    <Router history={hashHistory}>
      <Route path = '/' component = {App}>
        <Route path = '/about' component = {About}></Route>
        <Route path = '/home' component = {Home}></Route>
        <Route path = '/tel' component = {Tel}></Route>
      </Route>
    </Router>
)


ReactDOM.render(
    router2
    ,
    document.getElementById('root')
  );
