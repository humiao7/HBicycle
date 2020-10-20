import React, { Component, Fragment } from 'react'
import { Layout, Menu } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, DesktopOutlined, SkinOutlined, FormOutlined, InsertRowAboveOutlined, ProfileOutlined, ShopOutlined, ContainerOutlined, TeamOutlined, CarOutlined, BarChartOutlined, KeyOutlined } from '@ant-design/icons';
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import logoUrl from "./assets/snowman.svg"

import './style/main.css';

import routes from './router';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    // 展开收起侧导航栏
    toggleCollapsed = () => {
        console.log(this.state.collapsed)
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout>
                <Sider className="slide-layout" collapsed={this.state.collapsed}>
                    <div className="main-logo">
                        <img src={logoUrl} alt="logo" />
                        {!this.state.collapsed ? <h1>React Demo</h1> : <Fragment />}
                    </div>
                    <Menu
                        defaultSelectedKeys={['nav1']}
                        mode="vertical"
                        theme="dark">
                        <Menu.Item key="nav1" icon={<DesktopOutlined />}>
                            <Link to="/main-page/home">首页</Link>
                        </Menu.Item>
                        <SubMenu key="nav2" title="UI" icon={<SkinOutlined />}>
                            <Menu.Item key="nav21">
                                <Link to="/main-page/ui/buttons">按钮</Link>
                            </Menu.Item>
                            <Menu.Item key="nav22">
                                <Link to="/main-page/ui/modal">弹窗</Link>
                            </Menu.Item>
                            <Menu.Item key="nav23">
                                <Link to="/main-page/ui/loading">Loading</Link>
                            </Menu.Item>
                            <Menu.Item key="nav24">
                                <Link to="/main-page/ui/notification">通知提醒</Link>
                            </Menu.Item>
                            <Menu.Item key="nav25">
                                <Link to="/main-page/ui/message">全局Message</Link>
                            </Menu.Item>
                            <Menu.Item key="nav26">
                                <Link to="/main-page/ui/tab">Tab页签</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="nav3" title="表单" icon={<FormOutlined />}>
                            <Menu.Item key="nav31">
                                <Link to="/login">登录</Link>
                            </Menu.Item>
                            <Menu.Item key="nav32">
                                <Link to="/login">注册</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="nav4" title="表格" icon={<InsertRowAboveOutlined />}>
                            <Menu.Item key="nav41">
                                <Link to="/main-page/form/basic">基础表格</Link>
                            </Menu.Item>
                            <Menu.Item key="nav42">
                                <Link to="/main-page/form/senior">高级表格</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="nav5" icon={<ProfileOutlined />}>
                            <Link to="/main-page/rich-text">富文本</Link>
                        </Menu.Item>
                        <Menu.Item key="nav6" icon={<ShopOutlined />}>
                            <Link to="/main-page/citys">城市管理</Link>
                        </Menu.Item>
                        <Menu.Item key="nav7" icon={<ContainerOutlined />}>
                            <Link to="/main-page/order-manage">订单管理</Link>
                        </Menu.Item>
                        <Menu.Item key="nav8" icon={<TeamOutlined />}>
                            <Link to="/main-page/employees">员工管理</Link>
                        </Menu.Item>
                        <Menu.Item key="nav9" icon={<CarOutlined />}>
                            <Link to="/main-page/map">车辆地图</Link>
                        </Menu.Item>
                        <SubMenu key="nav10" title="图表" icon={<BarChartOutlined />}>
                            <Menu.Item key="nav101">
                                <Link to="/main-page/charts1">柱状图</Link>
                            </Menu.Item>
                            <Menu.Item key="nav102">
                                <Link to="/main-page/charts2">折线图</Link>
                            </Menu.Item>
                            <Menu.Item key="nav103">
                                <Link to="/main-page/charts3">饼状图</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="nav11" icon={<KeyOutlined />}>
                            <Link to="/main-page/permission">权限设置</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="content-layout">
                    <Header className="header">
                        <div className="sider-togger" onClick={this.toggleCollapsed}>{
                            this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                        }</div>
                        <div className="header-placehoder"></div>
                        <span className="welcome">欢迎你，王路飞</span>
                        <Link className="logout" to="/login"><span>退出</span></Link>
                    </Header>
                    <div className="content">
                        <Switch>
                            {
                                routes.map((router, index) => {
                                    return (
                                        <Route key={index} exact={router.exact} path={router.path} component={router.component} />
                                    )
                                })
                            }
                            <Redirect to="/main-page/home"></Redirect>
                        </Switch>
                    </div>
                    <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainPage;