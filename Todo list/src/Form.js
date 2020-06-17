import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <input value={this.props.text}></input>
            </div>
        );
    }
}

export default Form;