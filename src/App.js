
import React, { Component } from 'react';
import {Route, Navlink, HashROuter} from 'react-router-dom';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Home from './components/home.js';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
      <Router>
      <div>
      <Route exact path="/" component = {Home}/>
      <Route path="listing" component = {Header}/>
      <Route path="solution" component = {Header}/>
      <Route path="blog" component = {Header}/>
      <Route path="about" component = {Header}/>
      <Route path="career" component = {Header}/>
      <Route path="enquiry" component = {Header}/>
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
