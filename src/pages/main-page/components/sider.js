import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
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
                    <Menu.Item key="nav1">首页</Menu.Item>
                    <SubMenu key="nav2" title="UI">
                        <Menu.Item key="21">按钮</Menu.Item>
                        <Menu.Item key="22">弹窗</Menu.Item>
                        <Menu.Item key="23">Loading</Menu.Item>
                        <Menu.Item key="24">通知提醒</Menu.Item>
                        <Menu.Item key="25">全局Message</Menu.Item>
                        <Menu.Item key="26">Tab页签</Menu.Item>
                        <Menu.Item key="27">图片画廊</Menu.Item>
                        <Menu.Item key="28">轮播图</Menu.Item>
                    </SubMenu>
                    <SubMenu key="nav3" title="表单">
                        <Menu.Item key="31">登录</Menu.Item>
                        <Menu.Item key="32">注册</Menu.Item>
                    </SubMenu>
                    <SubMenu key="nav4" title="表格">
                        <Menu.Item key="41">基础表格</Menu.Item>
                        <Menu.Item key="42">高级表格</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="nav5">富文本</Menu.Item>
                    <Menu.Item key="nav6">城市管理</Menu.Item>
                    <Menu.Item key="nav7">订单管理</Menu.Item>
                    <Menu.Item key="nav8">员工管理</Menu.Item>
                    <Menu.Item key="nav9">车辆地图</Menu.Item>
                    <SubMenu key="nav10" title="图表">
                        <Menu.Item key="42">柱状图</Menu.Item>
                        <Menu.Item key="41">折线图</Menu.Item>
                        <Menu.Item key="42">饼状图</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="nav11">权限设置</Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}

export default MainSider;