import React from 'react'
import { Layout } from 'antd'

import MainSider from './components/sider'
import MainHeader from './components/header'
import MainContent from './components/content'

import './main.css';

function MainPage() {
    const { Header, Content, Footer, Sider } = Layout;

    return (
        <Layout>
            <Sider className="left-slide-layout" width={250}>
                <MainSider></MainSider>
            </Sider>
            <Layout className="content-layout">
                <Header className="header">
                    <MainHeader />
                </Header>
                <div className="content">
                        <MainContent></MainContent>
                </div>
                <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default MainPage;