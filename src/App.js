import React from 'react';
import { Layout, Menu } from 'antd';
import logoUrl from "./assets/snowman.svg"

import './App.css';

function App() {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Layout className="App">
      <Sider className="left-slide" width={250}>
        <div className="app-logo">
          <img src={logoUrl} alt="" />
          <h1>React Demo</h1>
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
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: '0 20px 0 0', textAlign: 'right' }}>
          <span style={{ color: '#000000a6', fontSize:"14px", marginRight: "40px" }}>欢迎，王路飞</span>
          <a>退出</a>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
