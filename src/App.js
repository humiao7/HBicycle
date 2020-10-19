import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import router from "./router"

import './App.css';

function App() {
  return (
    <Router>{
      router.map((router, index) => {
        return (
          <Route exact path={router.path} component={router.component} key={index}/>
        )
      })
    }</Router>
  );
}

export default App;
