import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)

        console.log('Home初始化 ！！')
    }
    render() {
        return (
            <div>
               这里是联系我们的内容，欢迎你们 
            </div>
        );
    }
}

export default Home;