import React, { Component, Fragment } from 'react';
import { Card, Button, Modal } from 'antd';

import "./modal.css"

class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible1: false
        }
    }
    showModal = () => {
        this.setState({
            modalVisible1: true,
        });
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            modalVisible1: false,
        });
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
            modalVisible1: false,
        });
    }

    render() {
        return (
            <Fragment>
                <div className="modal-page">
                    <Card size="small" title="基础模态框" style={{ marginBottom: "20px" }} headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                        <Button type="primary" onClick={this.showModal}>Open</Button>
                        <Button type="primary">自定义页脚</Button>
                        <Button type="primary">距顶部20px弹窗</Button>
                        <Button type="primary">水平垂直居中</Button>
                    </Card>
                    <Card size="small" title="信息确认框" headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                        <Button type="primary">Confirm</Button>
                        <Button type="primary">Info</Button>
                        <Button type="primary">Success</Button>
                        <Button type="primary">Warning</Button>
                    </Card>
                </div>
                <Modal
                    title="React"
                    visible={this.state.modalVisible1}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <p>React学习...</p>
                    <p>React学习...</p>
                    <p>React学习...</p>
                </Modal>
            </Fragment>
        );
    }
}

export default ModalPage;