import React, { Component ,Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import About from './About'
import Home from './Home'

class App extends Component {
    constructor(props) {
        super(props)

        console.log('App初始化 ！！')
    }
    render() {
        return (
            <Fragment>
                <h1>
                    我是顶级组件
                </h1>
                <ul>
                    <li><a href="#/home">首页</a></li>
                    <li><a href="#/about">关于</a></li>
                    <li><a href="#/detail/99">详情</a></li>
                </ul>
                <hr/>
                <ul>
                    <li>首页</li>
                    <li><a href='https://github.com/evcohen/eslint-pluging-jsx'>关于</a></li>
                </ul>
                <hr/>
            </Fragment>
        );
    }
}
export default App;

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path = '/' component = {App}></Route>
      <Route path = '/about' component = {About}></Route>
      <Route path = '/home' component = {Home}></Route>
    </Router>
    ,
    document.getElementById('root')
  );
