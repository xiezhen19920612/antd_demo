import React, { Component,Fragment } from 'react';
import {Tree} from 'antd';

var treeData = [
    {
      title: '物种',
      key: 'object',
      children: [
        {
          title: '动物',
          key: 'animal',
          children: [
            {
              title: '老虎',
              key: 'tiger',
            },
            {
              title: '猴子',
              key: 'monkey',
            },
          ],
        },
        {
          title: '植物',
          key: 'plant',
          children: [
            {
              title: '苹果',
              key: 'apple',
            },
          ],
        },
      ],
    },
  ];


class AntdDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData
        }
    }
    render() { 
        return (
            <Fragment>
                <Tree 
                checkable 
                treeData={this.state.treeData}
                defaultExpandedKeys={["object", "animal", "plant"]}
                />
                <div>
                    <button onClick={this.disableAnimal.bind(this)}>点我把所有动物禁用</button>
                    <button onClick={this.disableByKey.bind(this, "object")}>点我把所有植物禁用</button>
                    <button onClick={this.disableByAllKeys.bind(this, "plant")}>点我把所有植物及子元素禁用</button>
                </div>
            </Fragment>
        );
    }
    disableAnimal(){
        let newTreeData = this.state.treeData
        newTreeData[0].children[0].disabled = true
        console.log(newTreeData)
        this.setState({
            treeData: newTreeData
        })
    }
    disableByKey(key){
        let newTreeData = this.state.treeData
        //递归查找，赋值
        newTreeData = this.findByKey(newTreeData, key, false)
        this.setState({
            treeData: newTreeData
        })
    }
    findByKey(data, key, directMark){
        if (Array.isArray(data)) {
            //数组
            for (let i = 0; i < data.length; i++) {
                data[i] = this.findByKey(data[i], key, directMark)
            }
        } else if (typeof data === "object") {
          let found = false
            //对象
            if (data.key === key || directMark) {
                //找到了
                data.disabled = true
                found = true
            }
            if (data.children) {
                data.children = this.findByKey(data.children, key, found)
            }
        } else {
            //其他
        }
        return data
    }
    disableByAllKeys(key) {
      let newTreeData = this.state.treeData
        //递归查找，赋值
        newTreeData = this.findAllKey(newTreeData, key)
        this.setState({
            treeData: newTreeData
        })
    }
    findAllKey(data, key) {
      if (Array.isArray(data)) {
        
      }
    }
}
 
export default AntdDemo;