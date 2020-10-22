import React, { Component, Fragment } from 'react'
import { Layout, Menu, Tabs } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, DesktopOutlined, SkinOutlined, FormOutlined, InsertRowAboveOutlined, ProfileOutlined, ShopOutlined, ContainerOutlined, TeamOutlined, CarOutlined, BarChartOutlined, KeyOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import Home from './pages/home'
import Buttons from './pages/buttons'
import Modal from './pages/modal'
import Loading from './pages/loading'
import Notification from './pages/notification'
import Message from './pages/message'
import Tab from './pages/tab'
import BasicList from './pages/basic-list'
import SeniorList from './pages/senior-list'
import RichText from './pages/rich-text'
import Citys from './pages/citys'
import OrderManage from './pages/order-manage'
import Employees from './pages/employees'
import CarMap from './pages/car-map'
import Charts from './pages/charts'
import Permission from './pages/permission'

import logoUrl from "./assets/bicycle.svg"

import './style/main.css';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

const menuList = [
    { key: "nav1", title: "首页", icon: <DesktopOutlined />, component: <Home /> },
    {
        key: "nav2", title: "UI", icon: <SkinOutlined />, component: null, subMenus: [
            { key: "nav21", title: "按钮", component: <Buttons /> },
            { key: "nav22", title: "弹框", component: <Modal /> },
            { key: "nav23", title: "Loading", component: <Loading /> },
            { key: "nav24", title: "通知提醒", component: <Notification /> },
            { key: "nav25", title: "全局Message", component: <Message /> },
            { key: "nav26", title: "Tab页签", component: <Tab /> },
            { key: "nav27", title: "轮播图", component: <Tab /> },
        ]
    },
    {
        key: "nav3", title: "表单", icon: <FormOutlined />, component: null, subMenus: [
            { key: "nav31", title: "登录", component: null },
            { key: "nav32", title: "注册", component: null },
        ]
    },
    {
        key: "nav4", title: "表格", icon: <InsertRowAboveOutlined />, component: null, subMenus: [
            { key: "nav41", title: "基础表格", component: <BasicList /> },
            { key: "nav42", title: "高级表格", component: <SeniorList /> },
        ]
    },
    { key: "nav5", title: "富文本", icon: <ProfileOutlined />, component: <RichText /> },
    { key: "nav6", title: "城市管理", icon: <ShopOutlined />, component: <Citys /> },
    { key: "nav7", title: "订单管理", icon: <ContainerOutlined />, component: <OrderManage /> },
    { key: "nav8", title: "员工管理", icon: <TeamOutlined />, component: <Employees /> },
    { key: "nav9", title: "车辆地图", icon: <CarOutlined />, component: <CarMap /> },
    { key: "nav10", title: "图表", icon: <BarChartOutlined />, component: <Charts /> },
    { key: "nav11", title: "权限设置", icon: <KeyOutlined />, component: <Permission /> }
]

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false, // 收起/展开侧边栏
            openTabs: [{ ...menuList[0] }], // 打开的tab页签
            activeTabKey: menuList[0].key
        }
    }

    // 展开收起侧导航栏
    toggleCollapsed = () => {
        console.log(this.state.collapsed)
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    // 打开新的Tab页
    clickSiderMenu = (menu) => {
        let openTabs = [...this.state.openTabs]
        if (!openTabs.some((tab) => { return tab.key === menu.key })) {
            openTabs.push(menu);
            this.setState({
                openTabs,
                activeTabKey: menu.key
            })
        } else {
            this.onTabClick(menu.key); // 切换页签
        }
    }

    // 删除页签时的触发事件
    onEdit = (targetKey) => {
        let openTabs = [...this.state.openTabs], activeTabKey = this.state.activeTabKey
        for (let i = 0; i < openTabs.length; i++) {
            if (openTabs[i].key === targetKey) {
                openTabs.splice(i, 1);
                // 如果删除是当前激活的页签
                if (targetKey === activeTabKey) {
                    activeTabKey = openTabs[i - 1].key
                }
                break;
            }
        }
        this.setState({
            openTabs,
            activeTabKey
        })
    }

    // 切换页签时触发
    onTabClick = (targetKey) => {
        this.setState({
            activeTabKey: targetKey
        })
    }
    render() {
        return (
            <Layout>
                <Sider className="slide-layout" collapsed={this.state.collapsed}>
                    <div className="main-logo">
                        <img src={logoUrl} alt="logo" />
                        {!this.state.collapsed ? <h1>Bicycle</h1> : <Fragment />}
                    </div>
                    <Menu
                        defaultSelectedKeys={[menuList[0].key]}
                        mode="vertical"
                        theme="dark">{
                            menuList.map(menu => {
                                if (menu.subMenus) {
                                    return (
                                        <SubMenu key={menu.key} title={menu.title} icon={menu.icon}>{
                                            menu.subMenus.map(subMenu => {
                                                return (
                                                    <Menu.Item key={subMenu.key} icon={subMenu.icon} onClick={() => {
                                                        this.clickSiderMenu(subMenu)
                                                    }}>{subMenu.title}</Menu.Item>
                                                )
                                            })
                                        }</SubMenu>
                                    )
                                } else {
                                    return (
                                        <Menu.Item key={menu.key} icon={menu.icon} onClick={() => {
                                            this.clickSiderMenu(menu)
                                        }}>{menu.title}</Menu.Item>
                                    )
                                }
                            })
                        }</Menu>
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
                    <Content className="content">
                        <Tabs
                            defaultActiveKey={this.state.openTabs[0].key}
                            className={this.state.activeTabKey === this.state.openTabs[0].key ? 'antd-tab-gary-backrgound' : 'antd-tab-whit-backrgound'}
                            activeKey={this.state.activeTabKey}
                            type="editable-card"
                            size="small"
                            onTabClick={this.onTabClick}
                            onEdit={this.onEdit}
                            hideAdd>{
                                this.state.openTabs.map(tab => {
                                    return (
                                        <TabPane tab={tab.title} key={tab.key} closable={tab.key !== "nav1"}>{tab.component}</TabPane>
                                    )
                                })
                            }</Tabs>
                    </Content>
                </Layout>
            </Layout >
        );
    }
}

export default MainPage;