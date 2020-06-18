import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props)

        console.log('About初始化 ！！')
    }
    render() {
        return (
            <div>
                这里是关于我们的内容
            </div>
        );
    }
}

export default About;