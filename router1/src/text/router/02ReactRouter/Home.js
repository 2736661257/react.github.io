import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)

        console.log('Home初始化 ！！')
    }
    render() {
        return (
            <div>
               欢迎你们 
            </div>
        );
    }
}

export default Home;