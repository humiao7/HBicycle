import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 引入路由配置文件
import router from "./router"

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <Switch>{
          router.map((router, index) => {
            return (
              <Route key={index} path={router.path} exact={router.exact} component={router.component} />
            )
          })
        }</Switch>
      </Router>
    );
  }
}

export default App;
