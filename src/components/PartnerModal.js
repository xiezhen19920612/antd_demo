import React, { Component } from 'react'
import { Modal, Checkbox } from 'antd'

class PartnerModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleOk = () => {
        const { handleOk } = this.props
        handleOk()
    }
    handleCancel = () => {
        console.log(this.props.allList)
        const { handleCancel } = this.props
        handleCancel()
    }
    onChange = (idx) => {
        let {onChange} = this.props
        onChange(idx)
    }
    render() {
        return (  
            <Modal
                title="设置合作方"
                visible={this.props.visible}
                onOk = { this.handleOk }
                onCancel = { this.handleCancel }
                >
                <ul style={{maxHeight: 350, overflow: 'auto'}}>
                    {
                        this.props.allList.map((list, idx) => {
                            return (
                                <li style={{display: 'flex'}} key={list.key}>
                                    <div><Checkbox onChange={this.onChange.bind(this, idx)} checked={list.ifShow === '1'} /></div>
                                    <div>
                                        <p>{list.name}</p>
                                        <p>{list.company}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </Modal>
        )   
    }
}

export default PartnerModal