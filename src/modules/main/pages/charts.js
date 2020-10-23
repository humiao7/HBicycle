import React, { Component } from 'react';
import { Col, Row, Card } from 'antd';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入图表类型
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/gauge';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

import "../style/charts.css"

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(() => {
            this.drawBarChart(); // 绘制柱状图
            this.drawLineChart(); // 绘折线状图
            this.drawPieChart(); // 绘制饼状图
            this.drawScatterChart(); // 绘制散点图
            this.drawRadarChart(); // 绘制雷达图
            this.drawGaugeChart(); // 绘制仪表盘
        }, 200)
    }

    // 绘制柱状图
    drawBarChart = () => {
        let xAxisData = [];
        let data1 = [];
        let data2 = [];
        for (let i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
        let barChart = echarts.init(document.getElementById('barChart'));
        barChart.setOption({
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            color: ['#e062ae', '#67e0e3'],
            series: [{
                name: 'bar',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'bar2',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        });
    }
    // 绘折线状图
    drawLineChart = () => {
        let lineChart = echarts.init(document.getElementById('lineChart'));
        lineChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            color: ['#37a2da', '#67e0e3', '#ffdb5c', '#ff9f7f', '#e062ae'],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {},
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        });
    }
    // 绘制饼状图
    drawPieChart = () => {
        let pieChart = echarts.init(document.getElementById('pieChart'));
        pieChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['Firefox', 'Safari', 'Microsoft Edge', 'IE Explorer', 'Google Chrome']
            },
            color: ['#37a2da', '#67e0e3', '#ffdb5c', '#ff9f7f', '#e062ae'],
            series: [
                {
                    name: '浏览器市场占比',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 335, name: 'Firefox' },
                        { value: 310, name: 'Safari' },
                        { value: 234, name: 'Microsoft Edge' },
                        { value: 135, name: 'IE Explorer' },
                        { value: 1548, name: 'Google Chrome' }
                    ]
                }
            ]
        });
    }
    // 绘制散点图
    drawScatterChart = () => {
        let scatterChart = echarts.init(document.getElementById('scatterChart'));
        scatterChart.setOption({
            xAxis: {},
            yAxis: {},
            color: "#ff69b4",
            series: [{
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.0, 6.95],
                    [13.0, 7.58],
                    [9.0, 8.81],
                    [11.0, 8.33],
                    [14.0, 9.96],
                    [6.0, 7.24],
                    [4.0, 4.26],
                    [12.0, 10.84],
                    [7.0, 4.82],
                    [5.0, 5.68]
                ],
                type: 'scatter'
            }]
        });
    }
    // 绘制雷达图
    drawRadarChart = () => {
        let radarChart = echarts.init(document.getElementById('radarChart'));
        radarChart.setOption({
            tooltip: {},
            legend: {
                top: 20,
                left: 10,
                data: ['一叶之秋', '君莫笑']
            },
            color: ['#37a2da', '#ffd85c'],
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [
                    { name: '力量', max: 6500 },
                    { name: '敏捷', max: 16000 },
                    { name: '防御', max: 30000 },
                    { name: '魔法', max: 38000 },
                    { name: '智力', max: 52000 },
                    { name: '生命值', max: 25000 }
                ]
            },
            series: [{
                name: '一叶之秋 vs 君莫笑',
                type: 'radar',
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000, 19000],
                        name: '一叶之秋'
                    },
                    {
                        value: [5000, 14000, 28000, 31000, 42000, 21000],
                        name: '君莫笑'
                    }
                ]
            }]
        });
    }
    // 绘制仪表盘
    drawGaugeChart = () => {
        let gaugeChart = echarts.init(document.getElementById('gaugeChart'));
        let option = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%',
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: { formatter: '{value}%', fontSize: "12px" },
                    data: [{ value: 50, fontSize: "12px" }]
                }
            ]
        }
        gaugeChart.setOption(option);
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            gaugeChart.setOption(option, true);
        }, 2000);
    }
    render() {
        return (
            <div className="charts-page">
                <Row gutter={[24, 24]}>
                    <Col span={8}>
                        <Card size="small" title="柱状图" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ width: "100%", height: "100%", padding: "15px", textAlign: "center" }}>
                            <div id="barChart" className="charts-component"></div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="折线图" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ width: "100%", height: "100%", padding: "15px", textAlign: "center" }}>
                            <div id="lineChart" className="charts-component"></div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="饼状图" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ width: "100%", height: "100%", padding: "15px", textAlign: "center" }}>
                            <div id="pieChart" className="charts-component"></div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="散点图" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ width: "100%", height: "100%", padding: "15px", textAlign: "center" }}>
                            <div id="scatterChart" className="charts-component"></div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="雷达图" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ width: "100%", height: "100%", padding: "15px", textAlign: "center" }}>
                            <div id="radarChart" className="charts-component"></div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="仪表盘" hoverable headStyle={{ fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ width: "100%", height: "100%", padding: "15px", textAlign: "center" }}>
                            <div id="gaugeChart" className="charts-component"></div>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Charts;