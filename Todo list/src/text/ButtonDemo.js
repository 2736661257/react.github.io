import React, { Component } from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

class ButtonDemo extends Component {
    constructor(props) {
        super(props)
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        
            alert('给你一个警告：你点到我了')
    }

    render() {
        return (
            <div>
                <Button type="primary"  onClick = {this.handleBtnClick}>Primary</Button>
                <Button icon={<SearchOutlined/>} shape="circle">Default</Button>
                <Button type="dashed" href='https://www.baidu.com/'>Dashed</Button>
                <Button size='large' type="link">Link</Button>
            </div>
        );
    }
}

export default ButtonDemo;