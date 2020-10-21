import React, { Component } from 'react';
import { Col, Row, Card, Button, Tooltip, Radio, Menu, Dropdown } from 'antd';
import { SearchOutlined, FolderOpenOutlined, DownloadOutlined, PoweroffOutlined, DownOutlined } from '@ant-design/icons';

import './buttons.css'

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            loadings: []
        }
    }

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    }

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    render() {
        const { loadings } = this.state;
        return (
            <div className="buttons-page">
                <Row gutter={[24, 24]}>
                    <Col span={8}>
                        <Card size="small" title="按钮类型" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}>
                            <Button type="primary">Primary</Button>
                            <Button type="primary" disabled>Primary(disabled)</Button>
                            <br />
                            <Button>Default</Button>
                            <Button disabled>Default(disabled)</Button>
                            <br />
                            <Button type="dashed">Dashed</Button>
                            <Button type="dashed" disabled>Dashed(disabled)</Button>
                            <br />
                            <Button type="primary" danger>Danger</Button>
                            <Button type="primary" danger disabled>Danger(disabled)</Button>
                            <br />
                            <Button type="text">Text</Button>
                            <Button type="text" disabled>Text(disabled)</Button>
                            <br />
                            <Button type="link">Link</Button>
                            <Button type="link" disabled>Link(disabled)</Button>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="图标按钮" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}>
                            <Button type="primary" shape="round" icon={<FolderOpenOutlined />}>OpenFolder</Button>
                            <br />
                            <Tooltip title="搜索">
                                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                            <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                            <br />
                            <Tooltip title="搜索">
                                <Button shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                            <Button icon={<SearchOutlined />}>Search</Button>
                            <br />
                            <Tooltip title="搜索">
                                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                            <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="按钮尺寸" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}>
                            <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                                <Radio.Button value="large">Large</Radio.Button>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group>
                            <br />
                            <br />
                            <Button type="primary" size='large'>
                                Primary
                            </Button>
                            <Button size='large'>Default</Button>
                            <Button type="dashed" size='large'>Dashed</Button>
                            <br />
                            <Button type="link" size='large'>Link</Button>
                            <br />
                            <Button type="primary" icon={<DownloadOutlined />} size='large' />
                            <Button type="primary" shape="circle" icon={<DownloadOutlined />} size='large' />
                            <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' />
                            <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large'>Download</Button>
                            <Button type="primary" icon={<DownloadOutlined />} size='large'>Download</Button>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="加载中状态" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}>
                            <Button type="primary" loading>Loading</Button>
                            <Button type="primary" size="small" loading>Loading</Button>
                            <Button type="primary" icon={<PoweroffOutlined />} loading />
                            <br />
                            <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>Click me!</Button>
                            <Button
                                type="primary"
                                icon={<PoweroffOutlined />}
                                loading={loadings[1]}
                                onClick={() => this.enterLoading(1)}
                            >
                                Click me!
                            </Button>
                            <Button
                                type="primary"
                                icon={<PoweroffOutlined />}
                                loading={loadings[2]}
                                onClick={() => this.enterLoading(2)}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="Block属性按钮" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}>
                            <Button type="primary" block>Primary</Button>
                            <Button block>Default</Button>
                            <Button type="dashed" block>Dashed</Button>
                            <Button type="danger" block>Danger</Button>
                            <Button type="link" block>Link</Button>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="多个按钮组合" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}>
                            <Button type="primary">primary</Button>
                            <Button>secondary</Button>
                            <Dropdown overlay={
                                <Menu>
                                    <Menu.Item key="1">1st item</Menu.Item>
                                    <Menu.Item key="2">2nd item</Menu.Item>
                                    <Menu.Item key="3">3rd item</Menu.Item>
                                </Menu>}>
                                <Button>
                                    Actions <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Buttons;