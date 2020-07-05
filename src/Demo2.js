import React, { Component, Fragment } from 'react';
import PartnerModal from './components/PartnerModal'

// const noticeList = [
//     { name: '张三', key: '10001', company: '混啊是计算机动画', ifShow: '1' },
//     { name: '李四', key: '10002', company: '广东神时间和几位', ifShow: '1' },
//     { name: '今晨', key: '10003', company: '虽死都很难设计的', ifShow: '0' },
//     { name: '王五', key: '10004', company: '混啊是计算机动画', ifShow: '0' },
//     { name: '谐振', key: '11001', company: '招商禁毒日热', ifShow: '0' },
//     { name: '奥迪', key: '12001', company: '招商金融劲射生态圈', ifShow: '1' },
//     { name: '张三2', key: '13001', company: '混方案中心啊是计算机动画', ifShow: '0' },
//     { name: '张三3', key: '14001', company: '类似的和厚度和', ifShow: '0' },
// ]
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            noticeList: [
                
            ],
            newArr: []
        };
    }
    componentDidMount() {
        let list = [
            { name: '张三', key: '10001', company: '混啊是计算机动画', ifShow: '1' },
            { name: '李四', key: '10002', company: '广东神时间和几位', ifShow: '1' },
            { name: '今晨', key: '10003', company: '虽死都很难设计的', ifShow: '0' },
            { name: '王五', key: '10004', company: '混啊是计算机动画', ifShow: '0' },
            { name: '谐振', key: '11001', company: '招商禁毒日热', ifShow: '0' },
            { name: '奥迪', key: '12001', company: '招商金融劲射生态圈', ifShow: '1' },
            { name: '张三2', key: '13001', company: '混方案中心啊是计算机动画', ifShow: '0' },
            { name: '张三3', key: '14001', company: '类似的和厚度和', ifShow: '0' },
        ]
        this.setState({
            noticeList: list,
            newArr: JSON.parse(JSON.stringify(list))
        })
    }
    showModal = () => {
        let lists = JSON.parse(JSON.stringify(this.state.noticeList))
        this.setState({
            visible: true,
            newArr: lists
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    handleOk = () => {
        let params = []
        console.log(params, 'params')

    }
    onChange = (idx) => {
        let lists = JSON.parse(JSON.stringify(this.state.newArr))

        lists[idx].ifShow === '1' ? lists[idx].ifShow = '0' : lists[idx].ifShow = '1'

        this.setState({
            newArr: lists
        })
    }

    render() {
        const intention = [...this.state.noticeList]
        const filterList = intention.filter(list => {
            return list.ifShow === '1'
        })
        const list = filterList.map(list => {
            return (
                <li key={list.key}>{list.name} - {list.company}</li>
            )
        })
        return (
            <Fragment>
                <ul>{list}</ul>
                <button onClick={this.showModal}>设置合作方</button>
                <PartnerModal visible={this.state.visible} allList = {this.state.newArr} handleCancel={this.handleCancel}
                handleOk={this.handleOk} onChange={this.onChange}
                ></PartnerModal>
            </Fragment>
        )
    }
}

export default Demo