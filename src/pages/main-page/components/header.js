import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div style={{ height: '60px', display: "inline-flex", alignItems: "center", justifyContent: "flex-end" }}>
                <span style={{ color: '#000000a6', fontSize: "14px", marginRight: "40px" }}>欢迎你，王路飞</span>
                <Link to="/login"><span>退出</span></Link>
            </div>
        )
    }
}

export default Header;