import React, { Component, Fragment } from 'react';
import { Card, Button, Modal } from 'antd';

import "../style/modal.css"

import duckUrl from "../assets/duck.jpg"

class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibleArray: [false, false, false, false, false]
        }
    }
    // 显示弹窗
    showModal = (index) => {
        let modalVisibleArray = [...this.state.modalVisibleArray];
        for (let i = 0; i < modalVisibleArray.length; i++) {
            modalVisibleArray[i] = false;
        }
        modalVisibleArray[index] = true;
        this.setState({
            modalVisibleArray
        });
    }

    // 关闭弹窗
    hideModal = () => {
        let modalVisibleArray = [...this.state.modalVisibleArray];
        for (let i = 0; i < modalVisibleArray.length; i++) {
            modalVisibleArray[i] = false;
        }
        this.setState({
            modalVisibleArray,
            Modal3Text: '今天你学废了吗...',
            confirmLoading: false,
        });
    }

    hideModal3 = () => {
        this.setState({
            Modal3Text: '还木有，快扶我起来！',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.hideModal();
        }, 2000);
    }

    // 显示不同类型的弹框
    showTypeModal = (type) => {
        Modal[type]({
            title: 'React学习，冲鸭...',
            content: (
                <div>
                    <p>冲鸭...</p>
                    <img src={duckUrl} style={{ height: "100px" }} alt="duck"/>
                </div>
            ),
            onOk() { },
        });
    }

    render() {
        return (
            <Fragment>
                <div className="modal-page">
                    <Card size="small" title="基础模态框" style={{ marginBottom: "20px" }} headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                        <Button type="primary" onClick={() => { this.showModal(0) }}>Open</Button>
                        <Button type="primary" onClick={() => { this.showModal(1) }}>自定义页脚</Button>
                        <Button type="primary" onClick={() => { this.showModal(2) }}>异步关闭</Button>
                        <Button type="primary" onClick={() => { this.showModal(3) }}>距顶部20px弹窗</Button>
                        <Button type="primary" onClick={() => { this.showModal(4) }}>水平垂直居中</Button>
                    </Card>
                    <Card size="small" title="信息确认框" headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                        <Button type="primary" onClick={() => { this.showTypeModal("success") }}>Success</Button>
                        <Button onClick={() => { this.showTypeModal("info") }}>Info</Button>
                        <Button danger onClick={() => { this.showTypeModal("warning") }}>Warning</Button>
                        <Button type="primary" danger onClick={() => { this.showTypeModal("error") }}>Error</Button>
                    </Card>
                </div>
                {/* 弹框1 */}
                <Modal
                    title="React学习"
                    visible={this.state.modalVisibleArray[0]}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}>
                    <p>今天你学废了吗...</p>
                    <p>今天你学废了吗...</p>
                    <p>今天你学废了吗...</p>
                </Modal>
                {/* 弹框2 */}
                <Modal
                    visible={this.state.modalVisibleArray[1]}
                    title="React学习"
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    footer={[
                        <Button key="back" onClick={this.hideModal}>德玛西亚</Button>,
                        <Button key="submit" type="primary" danger onClick={this.hideModal}>天哪</Button>,
                    ]}>
                    <p>今天你学废了吗...</p>
                    <p>今天你学废了吗...</p>
                    <p>今天你学废了吗...</p>
                </Modal>
                {/* 弹框3 */}
                <Modal
                    title="React学习"
                    visible={this.state.modalVisibleArray[2]}
                    cancelText="快废了"
                    okText="没有"
                    okType="primary"
                    onOk={this.hideModal3}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.hideModal}                >
                    <p>{this.state.Modal3Text}</p>
                </Modal>
                {/* 弹框4 */}
                <Modal
                    title="距离顶部20px弹框"
                    style={{ top: 20 }}
                    visible={this.state.modalVisibleArray[3]}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}>
                    <p>今天你学废了吗...</p>
                    <p>今天你学废了吗...</p>
                    <p>今天你学废了吗...</p>
                </Modal>
                <Modal
                    title="垂直水平居中弹窗"
                    centered
                    visible={this.state.modalVisibleArray[4]}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}>
                    <p>今天你学脱发了吗...</p>
                    <p>今天你学脱发了吗...</p>
                    <p>今天你学脱发了吗...</p>
                </Modal>
            </Fragment>
        );
    }
}

export default ModalPage;