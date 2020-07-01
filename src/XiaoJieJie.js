import React, { Component } from 'react';
import XiaoJieJieItem from './XiaoJieJieItem';

class XiaoJieJie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            list: ["spa", "按摩"]
        }
    }
    render() { 
        return ( 
            <div>
                <div>
                    <input type="text" value={this.state.inputVal} onChange={this.onChange.bind(this)}/>
                    <button onClick={this.onClick.bind(this)}>增加服务</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map((item,index) => {
                                return (
                                    <XiaoJieJieItem 
                                    key={item+index} 
                                    index={index} 
                                    content={item}
                                    handleDelete={this.handleDelete.bind(this)}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    onChange(e){
        this.setState({
            inputVal: e.target.value
        })
    }
    onClick(e){
        this.setState({
            list: [...this.state.list, this.state.inputVal]
        });
    }
    handleDelete(index){
        console.log("XiaoJieJie handleDelete " + index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
 
export default XiaoJieJie;