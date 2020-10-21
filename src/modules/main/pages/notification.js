import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';
import { ClockCircleOutlined, RadiusUpleftOutlined, RadiusUprightOutlined, RadiusBottomleftOutlined, RadiusBottomrightOutlined, } from '@ant-design/icons';


import "./notification.css"

const openNotification1 = () => {
    notification.open({
        message: '基本用法',
        description: '我是通知内容，4.5s后自动关闭...',
        onClick: () => {
            console.log('点击通知');
        },
        onClose: () => {
            console.log("关闭通知")
        },
    });
};

const openNotification2 = () => {
    const key = `open${Date.now()}`;
    const btn = (
        <Button type="primary" danger onClick={() => console.log("点击确认按钮")}>确认</Button>
    );
    notification.open({
        message: '自定义按钮',
        description: '我是通知内容，4.5s后自动关闭...',
        btn,
        key,
        onClick: () => {
            console.log('点击通知');
        },
        onClose: () => {
            console.log("关闭通知")
        },
    });
};

const openNotification3 = () => {
    const args = {
        message: '倔强的提醒',
        description: '除非你点我，不然我是不会自动关闭的...',
        duration: 0,
        onClick: () => {
            console.log('点击通知');
        },
        onClose: () => {
            console.log("关闭通知")
        },
    };
    notification.warning(args);
};

const openNotificationWithIcon = type => {
    notification[type]({
        message: 'React',
        description: "我是通知内容，4.5s后自动关闭...",
        onClick: () => {
            console.log('点击通知');
        },
        onClose: () => {
            console.log("关闭通知")
        },
    });
};

const openNotification4 = placement => {
    notification.info({
        message: `今天你学废了吗？`,
        description: '快扶我起来，我还能学！',
        placement,
        onClick: () => {
            console.log('点击通知');
        },
        onClose: () => {
            console.log("关闭通知")
        },
    });
};

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="notification-page">
                <Card size="small" title="基本用法" style={{ marginBottom: "20px" }} headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                    <Button type="primary" onClick={openNotification1}>基本用法</Button>
                    <Button onClick={openNotification2}>自定义按钮</Button>
                    <Button onClick={openNotification3} icon={<ClockCircleOutlined />}>不自动关闭</Button>
                </Card>
                <Card size="small" title="自定义图标" style={{ marginBottom: "20px" }} headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
                    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
                    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
                </Card>
                <Card size="small" title="通知位置" headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                    <Button type="primary" icon={<RadiusUpleftOutlined />} onClick={() => openNotification4('topLeft')}>左上弹出</Button>
                    <Button type="primary" icon={<RadiusUprightOutlined />} onClick={() => openNotification4('topRight')}>右上弹出</Button>
                    <Button type="primary" icon={<RadiusBottomleftOutlined />} onClick={() => openNotification4('bottomLeft')}>左下弹出</Button>
                    <Button type="primary" icon={<RadiusBottomrightOutlined />} onClick={() => openNotification4('bottomRight')}>右下弹出</Button>
                </Card>
            </div >
        );
    }
}

export default Notification;