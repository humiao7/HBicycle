import React, { Component } from 'react';
import { Col, Row, Card } from 'antd';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import "./home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: '用户骑行订单',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO订单量',
                    type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        });
    }


    render() {
        return (
            <div className="home-page">
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <div id="main" style={{ width: "500px", height: "200px" }}></div>
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Col span={8}>
                        <Card size="small" title="代办事项" headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}></Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="异常订单" headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}></Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="新增用户" headStyle={{ fontWeight: "bold", background: "#f0f2f5" }}></Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;