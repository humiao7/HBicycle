import React, { Component } from 'react';
import { Card, Table, Tag } from 'antd';

import "../style/basic-list.css"

class BasicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'id',
                    dataIndex: 'id',
                    key: 'id',
                    align: "center",
                    width: 50
                }, {
                    title: '用户名',
                    dataIndex: 'name',
                    key: 'name',
                    align: "center",
                    width: 110
                }, {
                    title: '性别',
                    dataIndex: 'sex',
                    key: 'sex',
                    align: "center",
                    width: 80
                }, {
                    title: '称谓',
                    dataIndex: 'title',
                    key: 'title',
                    align: "center",
                    width: 140,
                    render: title => {
                        switch (title) {
                            case "钻石王老五":
                                return (<Tag color='geekblue' key={title}>{title}</Tag>);
                            case "无名鼠辈":
                                return (<Tag color='green' key={title}>{title}</Tag>);
                            case "蓝胖子":
                                return (<Tag color='blue' key={title}>{title}</Tag>);
                            case "海贼王":
                                return (<Tag color='orange' key={title}>{title}</Tag>);
                            default:
                                return (<Tag color='volcano' key={title}>{title}</Tag>);

                        }
                    },
                }, {
                    title: '爱好',
                    dataIndex: 'favorite',
                    key: 'favorite',
                    align: "center",
                    width: 80
                }, {
                    title: '生日',
                    dataIndex: 'birthday',
                    key: 'birthday',
                    align: "center",
                    width: 170
                }, {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address',
                    align: "center",
                    width: 360
                }, {
                    title: '打卡时间',
                    dataIndex: 'clockOn',
                    key: 'clockOn',
                    align: "center",
                    width: 140
                },
            ],
            dataSource: [
                {
                    id: "1",
                    name: '汤姆',
                    sex: "男",
                    title: "钻石王老五",
                    favorite: "抓老鼠",
                    birthday: "1990-01-02",
                    address: "New York No. 1 Lake Park",
                    clockOn: "09:00"
                }, {
                    id: "2",
                    name: '杰瑞',
                    sex: "男",
                    title: "无名鼠辈",
                    favorite: "偷奶酪",
                    birthday: "1999-01-01",
                    address: "London No. 1 Lake Park",
                    clockOn: "01:00"
                }, {
                    id: "3",
                    name: '斯帕克',
                    sex: "男",
                    title: "忠犬八公",
                    favorite: "啃骨头",
                    birthday: "1995-01-01",
                    address: "Sidney No. 1 Lake Park",
                    clockOn: "06:00"
                }, {
                    id: "4",
                    name: '多啦A梦',
                    sex: "男",
                    title: "蓝胖子",
                    favorite: "吃铜锣烧",
                    birthday: "1998-01-01",
                    address: "Japan No. 1 Lake Park",
                    clockOn: "12:00"
                }, {
                    id: "5",
                    name: '路飞',
                    sex: "男",
                    title: "海贼王",
                    favorite: "吃肉",
                    birthday: "1993-01-01",
                    address: "Japan No. 1 Lake Park",
                    clockOn: "18:00"
                }
            ]
        }
    }
    render() {
        return (
            <div className="basic-list-page">
                <Card size="small" title="基础表格" style={{ marginBottom: "20px" }} headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }} bodyStyle={{ textAlign: "left" }}>
                    <Table bordered dataSource={this.state.dataSource} columns={this.state.columns} pagination={false} />
                </Card>
            </div>
        );
    }
}

export default BasicList;