import '../css/bootstrap.css';
import '../css/bootstrap-theme.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/font-awesome.css';
import '../css/slick.css';
import '../css/slick-theme.css';
import '../css/style.css';
import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Header from './header.js';
import Home from './home.js';
import logo from '../images/site-logo.png';


class Nav extends Component {
  render(){
    return(
      <HashRouter>
      <div class="site-navigation">
      <div class="container">
      	<div class="row">
      		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <nav class="navbar" role="navigation">
              <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src={logo} class="img-responsive" /></a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div class="col-md-8 col-sm-8 col-xs-12">
          <ul class="nav navbar-nav">
          <li class="active"><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="listing">Rental</NavLink></li>
          <li><NavLink to="solution">Solution</NavLink></li>
          <li><NavLink to="blog">Blog</NavLink></li>
          <li><NavLink to="about">About Us</NavLink></li>
          <li><NavLink to="career">Career</NavLink></li>
          <li><NavLink to="enquiry">Enquiry</NavLink></li>
          </ul>

              <form class="navbar-form" role="search">
              <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search" name="q" />
                  <div class="input-group-btn">
                      <button class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                  </div>
              </div>
              </form>
          </div>
        </div>
      </nav>
      </div>
      </div>
      </div>
      </div>
      </HashRouter>
    );
  }
}


export default Nav;
