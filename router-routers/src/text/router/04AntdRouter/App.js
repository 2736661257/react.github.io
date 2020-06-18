//导入的react模块的内容
import React, { Component ,Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import './style/App.css'

//在react中图片的使用必须要是这个样子声明一个变量然后在图片里引入变量，如果直接在图片里通过路径来引入的话显示不出来图片的
//导入的图片的顺序要放在最前面
import logo from '../04AntdRouter/Image/logo.png'

//导入的各组件的模块
import About from './About'
import Home from './Home'
import HomePage from './HomePage'
import Detail from './Detail'

//导入的antd的模块
import { Carousel } from 'antd'; //真不知道为什么这个导入的要放在前面才能可以使用
import banner1 from './Image/banner1.jpg';
import banner2 from './Image/banner2.jpg';
import banner3 from './Image/banner3.jpg';
import news from './Image/news.png';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;





//固定头部
class App extends Component {
    constructor(props) {
        super(props)

        console.log('App初始化 ！！')
    }

    render() {
        return (
            <Fragment>
                <Layout>
                    <Header style={{ zIndex: 1, width: '100%' }}>
                        <div>
                           <img src={logo} className="logo"></img> 
                        </div>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    
                                <Menu.Item key="1"><a href="http://www.hanyou-china.com/index.html" target="_blank">首页</a></Menu.Item>
                                <Menu.Item key="2"><a href="http://www.hanyou-china.com/product.html" target="_blank">产品详情</a></Menu.Item>
                                <Menu.Item key="3"><a href="#/about">关于我们</a></Menu.Item>
                                <Menu.Item key="4"><a href="#/home">联系方式</a></Menu.Item>
                            </Menu> 
                    </Header>
                    <Carousel autoplay>
                        <div>
                            <img src={banner1}></img>
                        </div>
                        <div>
                        <img src={banner2}></img>
                        </div>
                        <div>
                        <img src={banner3}></img>
                        </div>
                        <div>
                        <img src={news}></img>
                        </div>
                    </Carousel>
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                            Content
                            {this.props.children}
                        </div>
                    </Content>

                    <Footer className="footer"> 
                        <div className="footer-div">
                            <ul>
                                <li>
                                   关于汉佑
                                </li>
                                <li>
                                    产品中心
                                </li>
                                <li>
                                   公司新闻 
                                </li>
                            </ul>
                            <ul>
                                <li>
                                   关于汉佑
                                </li>
                                <li>
                                    产品中心
                                </li>
                                <li>
                                   公司新闻 
                                </li>
                            </ul>
                            <div style={{ textAlign: 'center' }} className="clear">
                                    Ant Design ©2018 Created by Ant UED
                            </div>
                       </div>  
                    </Footer>
                </Layout>               
            </Fragment>
        );
    }
}


const router2 = (
    <Router history={hashHistory}>
      <Route path = '/' component = {App}>
        <Route path = '/homepage' component = {HomePage}></Route>
        <Route path = '/detail' component = {Detail}></Route>
        <Route path = '/about' component = {About}></Route>
        <Route path = '/home' component = {Home}></Route>
        
      </Route>
    </Router>
)


ReactDOM.render(
    router2
    ,
    document.getElementById('root')
  );

/*
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
)*/



/*
ReactDOM.render(
    <App></App>
    ,
    document.getElementById('root')
  );*/





  
