import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/bootstrap-theme.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/font-awesome.css';
import '../css/slick.css';
import '../css/slick-theme.css';
import '../css/style.css';

class Header extends Component {
  render(){
    return(
      <div class="head-info">
      <div class="container">
	     <div class="row">
		    <div class="col-lg-4 col-md-5 col-sm-6 col-xs-7">
			     <ul class="list-inline list-unstyled info">
				       <li><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:info@equipshare.in">info@equipshare.in</a></li>
				       <li><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:+91 9767460825">+91 9767460825</a></li>
			     </ul>
		    </div>
		    <div class="col-lg-offset-5 col-lg-3 col-md-offset-3 col-md-4 col-sm-offset-0 col-sm-6 col-xs-offset-0 col-xs-5 social-icon-col">
			     <ul class="list-inline list-unstyled social-icon">
				       <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
				       <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				       <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
				       <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
			     </ul>
			     <div class="logon-btns">
				       <a href="#">Login</a> | <a href="#">Signup</a>
			     </div>
		    </div>
	     </div>
      </div>
      </div>
    );
  }
}

export default Header;
