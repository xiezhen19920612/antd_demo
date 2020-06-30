import React, { Component } from 'react';

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
                                return <li key={item+index}>{item}</li>
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
}
 
export default XiaoJieJie;