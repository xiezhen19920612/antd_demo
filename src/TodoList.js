import React, { Component } from 'react';
import {Input, Button, List} from 'antd';
import store from './store'
import {changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.onChangeEvent = this.onChangeEvent.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.onClickEvent = this.onClickEvent.bind(this)
        // this.onDeleteEvent = this.onDeleteEvent.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return (
            <div>
                <div>
                    <Input 
                    placeholder="input some text" 
                    style={{width: '250px'}}
                    onChange={this.onChangeEvent}
                    value={this.state.inputVal}
                    ></Input>
                    <Button type="primary" onClick={this.onClickEvent}>增加</Button>
                </div>
                <div style={{margin:"10px auto", width:"300px"}}>
                    <List
                    bordered
                    dataSource={this.state.lists}
                    renderItem={(item, idx)=>(<List.Item onDoubleClick={this.onDeleteEvent.bind(this, idx)}>{item}</List.Item>)} 
                    />
                </div>
            </div>
        );
    }
    onChangeEvent(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    onClickEvent(e){
        const action = addItemAction(this.state.inputVal)
        store.dispatch(action)
    }
    onDeleteEvent(idx){
        const action = deleteItemAction(idx)
        store.dispatch(action)
    }
    storeChange(){
        console.log(store.getState())
        this.setState(store.getState())
    }
}
 
export default TodoList;