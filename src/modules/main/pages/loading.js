import React, { Component } from 'react';
import { Card, Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import "./loading.css"

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="loading-page">
                <Card size="small" title="Spin用法" style={{ marginBottom: "20px" }} headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left", padding: "20px" }}>
                    <Space size="middle">
                        <Spin size="small" />
                        <Spin />
                        <Spin size="large" />
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} />
                    </Space>
                </Card>
                <Card size="small" title="内容遮罩" headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>

                </Card>
            </div>
        );
    }
}

export default Loading;