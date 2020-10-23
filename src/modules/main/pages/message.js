import React, { Component } from 'react';
import { Card, Button, message } from 'antd';

import "../style/message.css"

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    showMessage(type) {
        switch (type) {
            case "success":
                message[type]('金币 +' + parseInt(100 * Math.random()));
                break;
            case "info":
                message[type]("装备 +1");
                break;
            case "warning":
                message[type]('受到暴击，小命 -1');
                break;
            case "error":
                message[type]('金币 -' + parseInt(10 * Math.random()));
                break;
            default:
                const key = 'updatable';
                message[type]({ content: '加载中...', key });
                setTimeout(() => {
                    message.success({ content: '加载完成!', key, duration: 2 });
                }, 1000);
                break;
        }
    }
    render() {
        return (
            <div className="message-page">
                <Card size="small" title="全局提示框" style={{ marginBottom: "20px" }} headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                    <Button type="primary" onClick={() => { this.showMessage('success') }}>Success</Button>
                    <Button onClick={() => { this.showMessage('info') }}>Info</Button>
                    <Button type="dashed" danger onClick={() => { this.showMessage('warning') }}>Warning</Button>
                    <Button type="primary" danger onClick={() => { this.showMessage('error') }}>Error</Button>
                    <Button type="primary" onClick={() => { this.showMessage("loading") }}>Loading</Button>
                </Card>
            </div >
        );
    }
}

export default Message;