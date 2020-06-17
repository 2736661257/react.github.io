/**创建一个组件 */
import React, { Fragment } from 'react';
import './style.css';
import Form from './Form'

/**定义一个组件 */


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.delete(this.props.index);
        const index = this.props.index;
        console.log(index);
    
    }

    render() {
        //const content = this.props;
        
        return ( 
           <Fragment>
                <div>
                    <div onClick={this.handleDelete}>{this.props.content}</div>
                    
                </div>
                <Form text='这个是From'></Form>
            </Fragment>
            )
           
            
        
    }
}
export default TodoItem;