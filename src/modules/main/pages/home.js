import React, { Component } from 'react';
import { Col, Row, Card, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

import "./home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.drawAlivedataChart(); // 绘制实时数据图
        this.drawOverviewChart(); // 绘制整体走势图
    }

    // 绘制实时数据图
    drawAlivedataChart = () => {
        setTimeout(() => {
            // 基于准备好的dom，初始化echarts实例
            let alivedataChart = echarts.init(document.getElementById('alivedataChart'));
            alivedataChart.setOption({
                title: {
                    text: '实时数据',
                    x: 'left'
                },
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    data: ['助力车', '自行车', '电动车'],
                    right: 0
                },
                xAxis: {
                    data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '助力车',
                        type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                        data: [1500, 1800, 1200, 3300, 1000, 1800, 1000],
                        smooth: true,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#f36302'
                                }
                            }
                        },
                    },
                    {
                        name: '自行车',
                        type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                        data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
                        smooth: true,
                        itemStyle: {
                            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#4962bf' // 0% 处的颜色
                                }, {
                                    offset: 0.5, color: '#4962bf5e' // 100% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }]
                                ),  //背景渐变色 
                                lineStyle: {        // 系列级个性化折线样式  
                                    width: 3,
                                    type: 'solid',
                                    color: "#4962bf"
                                }
                            }
                        },
                        areaStyle: { normal: {} }
                    }, {
                        name: '电动车',
                        type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                        data: [600, 2250, 1800, 2600, 1500, 1000, 1500],
                        smooth: true,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#27c7a1'
                                }
                            }
                        },
                    }
                ]
            });
        }, 200)
    }

    // 绘制整体走势图
    drawOverviewChart = () => {
        setTimeout(() => {
            let overviewChart = echarts.init(document.getElementById('overviewChart'));
            overviewChart.setOption({
                xAxis: {
                    data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
                    show: false,
                },
                yAxis: {
                    type: 'value',
                    show: false,
                },
                grid: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 0
                },
                series: [
                    {
                        name: 'OFO订单量',
                        type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                        data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
                        smooth: true,
                        itemStyle: {
                            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#4962bf' // 0% 处的颜色
                                }, {
                                    offset: 0.5, color: '#4962bf5e' // 100% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }]
                                ),  //背景渐变色 
                                lineStyle: {        // 系列级个性化折线样式  
                                    width: 3,
                                    type: 'solid',
                                    color: "#4962bf"
                                }
                            }
                        },
                        areaStyle: { normal: {} }
                    }
                ]
            });
        }, 200)
    }

    render() {
        return (
            <div className="home-page">
                <Row gutter={[24, 24]}>
                    <Col span={6}>
                        <Card hoverable bodyStyle={{ padding: "15px", textAlign: "left" }}>
                            <h3 className="card-title">今日统计</h3>
                            <div className="statistic-num">455 <span className="uprise">+13.5% <ArrowUpOutlined /></span></div>
                            <div className="statistic-dist">
                                <div className="dist-item">进行中<span>256</span></div>
                                <div className="dist-item">已结束<span>194</span></div>
                                <div className="dist-item">异常<span>5</span></div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card hoverable bodyStyle={{ padding: "15px", textAlign: "left" }}>
                            <h3 className="card-title">进行中的订单</h3>
                            <div className="statistic-num">115 <span className="decline">-21.3% <ArrowDownOutlined /></span></div>
                            <div className="statistic-dist">
                                <div className="dist-item">进行中<span>50</span></div>
                                <div className="dist-item">已结束<span>60</span></div>
                                <div className="dist-item">异常<span>5</span></div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card hoverable bodyStyle={{ padding: "15px", textAlign: "left" }}>
                            <h3 className="card-title">用户反馈</h3>
                            <div className="statistic-num">15 <span className="uprise">+13.5% <ArrowUpOutlined /></span></div>
                            <div className="statistic-dist">
                                <div className="dist-item">未处理<span>5</span></div>
                                <div className="dist-item">处理中<span>10</span></div>
                                <div className="dist-item">已完成<span>8</span></div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card hoverable bodyStyle={{ padding: "15px", textAlign: "left" }}>
                            <h3 className="card-title">维修订单</h3>
                            <div className="statistic-num">98 <span className="decline">-31.6% <ArrowDownOutlined /></span></div>
                            <div className="statistic-dist">
                                <div className="dist-item">未开始<span>20</span></div>
                                <div className="dist-item">进行中<span>28</span></div>
                                <div className="dist-item">已完成<span>50</span></div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Col span={18}>
                        <Card hoverable style={{ height: "396px" }} bodyStyle={{ width: "100%", height: "100%", padding: "15px", textAlign: "center" }}>
                            <div id="alivedataChart" style={{ width: "100%", height: "100%" }}></div>
                        </Card>
                    </Col>
                    <Col span={6} >
                        <Card hoverable style={{ height: "186px", marginBottom: "24px" }} bodyStyle={{ padding: "15px", textAlign: "left" }}>
                            <div className="overview-title">处理情况</div>
                            <div className="overview-progress">
                                <Progress type="dashboard" percent={75} />
                                <div>
                                    <div className="progress-type">待处理：282<span style={{ color: "#f44336" }}> <ArrowUpOutlined /></span></div>
                                    <div className="progress-type">处理中：113<span style={{ color: "#00bfa5" }}> <ArrowDownOutlined /></span></div>
                                </div>
                            </div>
                        </Card>
                        <Card hoverable style={{ height: "186px" }} bodyStyle={{ padding: "15px", textAlign: "left" }}>
                            <div className="overview-title">
                                总体走势
                                <div className="overview-title-desc">(2020年)<span>+13.5% <ArrowUpOutlined /></span></div>
                            </div>
                            <div id="overviewChart" style={{ width: "100%", height: "120px" }}></div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;