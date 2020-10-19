import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { DesktopOutlined, SkinOutlined, FormOutlined, InsertRowAboveOutlined, ProfileOutlined, ShopOutlined, ContainerOutlined, TeamOutlined, CarOutlined, BarChartOutlined, KeyOutlined } from '@ant-design/icons';
import logoUrl from "../assets/snowman.svg"

const { SubMenu } = Menu;

class MainSider extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-logo"
                    style={{
                        height: '90px',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '20px',
                        background: '#002140'
                    }}>
                    <img src={logoUrl} alt="logo"
                        style={{ width: '50px' }}
                    />
                    <h1 style={{
                        color: '#ffffff',
                        fontSize: '20px',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '0 0 0 10px',
                        fontWeight: 500
                    }}>React Demo</h1>
                </div>
                <Menu mode="vertical" theme="dark">
                    <Menu.Item key="nav1" icon={<DesktopOutlined />}>首页</Menu.Item>
                    <SubMenu key="nav2" title="UI" icon={<SkinOutlined />}>
                        <Menu.Item key="nav21">按钮</Menu.Item>
                        <Menu.Item key="nav22">弹窗</Menu.Item>
                        <Menu.Item key="nav23">Loading</Menu.Item>
                        <Menu.Item key="nav24">通知提醒</Menu.Item>
                        <Menu.Item key="nav25">全局Message</Menu.Item>
                        <Menu.Item key="nav26">Tab页签</Menu.Item>
                        <Menu.Item key="nav27">图片画廊</Menu.Item>
                        <Menu.Item key="nav28">轮播图</Menu.Item>
                    </SubMenu>
                    <SubMenu key="nav3" title="表单" icon={<FormOutlined />}>
                        <Menu.Item key="nav31">登录</Menu.Item>
                        <Menu.Item key="nav32">注册</Menu.Item>
                    </SubMenu>
                    <SubMenu key="nav4" title="表格" icon={<InsertRowAboveOutlined />}>
                        <Menu.Item key="nav41">基础表格</Menu.Item>
                        <Menu.Item key="nav42">高级表格</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="nav5" icon={<ProfileOutlined />}>富文本</Menu.Item>
                    <Menu.Item key="nav6" icon={<ShopOutlined />}>城市管理</Menu.Item>
                    <Menu.Item key="nav7" icon={<ContainerOutlined />}>订单管理</Menu.Item>
                    <Menu.Item key="nav8" icon={<TeamOutlined />}>员工管理</Menu.Item>
                    <Menu.Item key="nav9" icon={<CarOutlined />}>车辆地图</Menu.Item>
                    <SubMenu key="nav10" title="图表" icon={<BarChartOutlined />}>
                        <Menu.Item key="nav42">柱状图</Menu.Item>
                        <Menu.Item key="nav41">折线图</Menu.Item>
                        <Menu.Item key="nav42">饼状图</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="nav11" icon={<KeyOutlined />}>权限设置</Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}

export default MainSider;