import React, { Component } from 'react';
import { Card, Carousel } from 'antd';

import "../style/slide.css"

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="slide-page">
                <Card size="small" title="文字背景轮播" style={{ marginBottom: "20px" }} headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }}>
                    <Carousel autoplay>
                        <div>
                            <h3 className="text-slide">Hello React 1</h3>
                        </div>
                        <div>
                            <h3 className="text-slide">Hello React 2</h3>
                        </div>
                        <div>
                            <h3 className="text-slide">Hello React 3</h3>
                        </div>
                        <div>
                            <h3 className="text-slide">Hello React 4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card size="small" title="图片轮播" headStyle={{ textAlign: "left", fontWeight: "bold", background: "#f0f2f5" }}>
                    <Carousel autoplay>
                        <div className="image-slide">
                            <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg" alt="imageUrl"/>
                        </div>
                        <div className="image-slide">
                            <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg" alt="imageUrl"/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}

export default Slide;