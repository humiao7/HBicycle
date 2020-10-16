import React from 'react';
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

import BackgroundUrl from './assets/background.jpg'

import './login.css'

function Login() {
    return (
        <div className="background" style={{ width: "100vw", height: "100vh", backgroundSize: "100% auto", backgroundImage: 'url(' + BackgroundUrl + ')' }}>
            <div style={{ position: "fixed", right: "10%", top: "25%", width: "500px", height: '400px', overflow: "hidden", background: "#fff", borderRadius: "10px" }}>
                <div style={{ height: '400px', padding: "100px 50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                    <Input size="large" placeholder="请输入账号" prefix={<UserOutlined />} />
                    <Input.Password size="large" placeholder="请输入密码" prefix={<KeyOutlined />} />
                    <Link to="/main-page">
                        <Button type="primary" block >登 录</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;