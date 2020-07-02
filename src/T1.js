import React, { Component } from 'react';
import "./css/t1.css"

class T1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id="t1">
                <div className="father">
                    <div className="son">son</div>
                    <div className="son">son</div>
                    <div className="son">son</div>
                </div>
            </div>
        );
    }
}
 
export default T1;