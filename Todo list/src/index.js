import React,{StrictMode,Component} from 'react';
import ReactDOM from 'react-dom';
//react-router v4 跟 react 一样拆成了两部分，核心的 react-router 和依运行环境而定的 react-router-dom 或 react-router-native
//（跟 react-dom 和 react-native 一样）。
//本文要说的是浏览器环境，也就是 react-router + react-router-dom
import './index.css';
import App from './App';
import './style.css';

import ButtonDemo from './text/ButtonDemo';

//import CalendarDemo from './text/CalendarDemo';


/*
{
  "name": "myapp2",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",   所以只需要关心react的核心版本就可以了
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"    这个是将所有依赖的脚本都打包到这个版本里了
     
  },
  "scripts": {
    "start": "react-scripts start",    这里是用的启动服务器的脚手架
    "build": "react-scripts build",    最后将所有文件打包输出可以交给后台使用的文件
    "test": "react-scripts test",     测试
    "eject": "react-scripts eject"      还原脚手架最原本的目录，原本的目录里面会有webpack相关的配置
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
*/
class Index extends Component {
  constructor(props) {
    super(props)
    this.state= {
      name:'wqq',
      name1:'div'
    }
  }
  render() {
    return (
      <div className={this.state.name1} >
         {this.state.name}
      </div>
    );
  }
}

export default Index;



//<App></App>   这里的就是App组件的实例的使用
ReactDOM.render(
  <StrictMode>
    <App></App>
    <Index></Index>
    <ButtonDemo></ButtonDemo>

  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA 

