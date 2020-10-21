import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

import './style/login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Admin",
            password: "123456"
        }
    }
    render() {
        return (
            <div className="loginBackground">
                <div className="loginBox">
                    <h1>Login</h1>
                    <Input size="large" allowClear placeholder="请输入账号" prefix={<UserOutlined />} style={{ borderRadius: "2px 2px 0 0" }} value={this.state.userName}/>
                    <Input.Password size="large" placeholder="请输入密码" prefix={<KeyOutlined />} style={{ borderRadius: "0 0 2px 2px" }} value={this.state.password}/>
                    <Link to="/main">
                        <Button type="primary" block className="loginButton">登 录</Button>
                    </Link>
                    <div className="register">
                        <a href="/">忘了密码？</a>
                        <span>注册新账号</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login
