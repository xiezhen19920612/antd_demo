import React, { Component, Fragment } from 'react';
class XiaoJieJieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <li onClick={this.handleClick.bind(this, this.props.index)}>{this.props.content}</li>
            </Fragment>
        );
    }
    handleClick(index){
        console.log("XiaoJieJieItem clicked..." + index)
        this.props.handleDelete(index)
    }
}
 
export default XiaoJieJieItem;