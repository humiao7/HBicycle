import React, { Component } from 'react';
import { Card, Spin, Space, Switch, Alert } from 'antd';
import { LoadingOutlined, SyncOutlined, SmileOutlined, ChromeOutlined } from '@ant-design/icons';

import "../style/loading.css"

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    // 切换开关
    switchChange = (checked) => {
        this.setState({
            loading: checked
        })
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
                        <Spin indicator={<SyncOutlined style={{ fontSize: 30 }} spin />} />
                        <Spin indicator={<SmileOutlined style={{ fontSize: 30, color: "#52c41a" }} spin />} />
                        <Spin indicator={<ChromeOutlined style={{ fontSize: 30, color: "#eb2f96" }} spin />} />
                    </Space>
                </Card>
                <Card size="small" title="内容遮罩" headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                    <Switch onChange={this.switchChange} style={{ marginBottom: "10px" }} />
                    <Spin spinning={this.state.loading}>
                        <Alert
                            className="alert-component"
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="success"
                        />
                    </Spin>
                    <Spin spinning={this.state.loading} size="large">
                        <Alert
                            className="alert-component"
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <Spin spinning={this.state.loading} tip="Loading...">
                        <Alert
                            className="alert-component"
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="warning"
                        />
                    </Spin>
                    <Spin spinning={this.state.loading} indicator={<ChromeOutlined style={{ fontSize: 30, color: "#eb2f96" }} spin />}>
                        <Alert
                            className="alert-component"
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="error"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loading;