import React, { Component } from 'react';
import Header from './header.js';
import Nav from './nav.js';
import banner from '../images/home-banner.jpg'
import banner2 from '../images/home-banner2.jpg'
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import mixer from '../images/icons/mixer.jpg';
import van from '../images/icons/van.jpg';
import geometric from '../images/icons/geometric.jpg';
import pro1 from '../images/home-pro-1.jpg';
import pro2 from '../images/home-pro-2.jpg';
import pro3 from '../images/home-pro-3.jpg';
import pro4 from '../images/home-pro-4.jpg';
import blog1 from '../images/home-blog-1.jpg';
import blog2 from '../images/home-blog-2.jpg';
import blog3 from '../images/home-blog-3.jpg';
import eye from '../images/eye.png';
import partner1 from '../images/partners-logo/logo-1.jpg';
import partner2 from '../images/partners-logo/logo-2.jpg';
import partner3 from '../images/partners-logo/logo-3.jpg';
import partner4 from '../images/partners-logo/logo-4.jpg';
import footerlogo from '../images/footer-logo.png';
import Slider from 'react-animated-slider';

class Home extends Component {
  render(){
    return(
      <div class="home-carousel">
<div class="single-item">
  <Carousel showArrows={false} infiniteLoop={true} showIndicators={false}>
  <div>
  	<img src={banner} class="img-responsive" />
  	<div class="description">
  	<h2>EQUIPSHARE SHARING CONSTRUCTION EQUIPEMENTS </h2>
  	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum has been the industry's standard dummy text.</p>
<a href="#" class="slide-btn">See More</a>
  </div>
</div>
  <div>
  	<img src={banner2} class="img-responsive" />
<div class="description">
  	<h2>EQUIPSHARE SHARING CONSTRUCTION EQUIPEMENTS </h2>
  	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum has been the industry's standard dummy text.</p>
<a href="#" class="slide-btn">See More</a>
  </div>
  </div>
  <div>
  	<img src={banner} class="img-responsive" />
<div class="description">
  	<h2>EQUIPSHARE SHARING CONSTRUCTION EQUIPEMENTS </h2>
  	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum has been the industry's standard dummy text.</p>
<a href="#" class="slide-btn">See More</a>
  </div>
  </div>
  <div>
  	<img src={banner2} />
<div class="description">
  	<h2>EQUIPSHARE SHARING CONSTRUCTION EQUIPEMENTS </h2>
  	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum has been the industry's standard dummy text.</p>
<a href="#" class="slide-btn">See More</a>
  </div>
  </div>
</Carousel>
</div>
<div class="content">

<div class="sort-form">
	<form method="get" action="/">
		<div class="col">
			<label>Equipement Type</label>
			<select>
			<option>Select Equipment type</option>
			<option>Select Equipment type</option>
			<option>Select Equipment type</option>
			<option>Select Equipment type</option>
		</select>
		</div>
		<div class="col">
			<label>Category</label>
		<select>
			<option>Select Category</option>
			<option>Select Category</option>
			<option>Select Category</option>
			<option>Select Category</option>
		</select>
		</div>
		<div class="col">
			<label>Machine Name</label>
		<select>
			<option>Select Machine</option>
			<option>Select Machine</option>
			<option>Select Machine</option>
			<option>Select Machine</option>
		</select>
		</div>
		<div class="col">
		<button type="submit">Search</button>
		</div>
	</form></div>

<div class="top-cta">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<img src={mixer} class="img-responsive" alt="Construction Equipements at your Fingertips" title="Construction Equipements at your Fingertips" />
				<h3>Construction Equipements <br />at your Fingertips</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum</p>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<img src={van} class="img-responsive" alt="Live Tracking of Equipements you Hired" title="Live Tracking of Equipements you Hired" />
				<h3>Live Tracking of <br />Equipements you Hired</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum</p>
			</div>
			<div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-0 col-xs-12">
				<img src={geometric} class="img-responsive" alt="You Want Quality we promise !" title="You Want Quality we promise !" />
				<h3>You Want Quality we <br />promise !</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum</p>
			</div>
		</div>
	</div></div>

<div class="featured-mach">
<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h3>Featured Machines</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industrys standard dummy text</p>
	<ul class="list-unstyled list-inline">
		<li>
			<div class="mach-img"></div>
			<div class="desc">
				<img src={pro1} class="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
				<h4>Concrete Mixer</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<span class="price"><i class="fa fa-inr" aria-hidden="true"></i>52304.00</span>
				<a href="#" class="more">More Info</a>
			</div></li>
		<li>
			<div class="mach-img"></div>
			<div class="desc">
				<img src={pro2} class="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
				<h4>Concrete Mixer</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<span class="price"><i class="fa fa-inr" aria-hidden="true"></i>52304.00</span>
				<a href="#" class="more">More Info</a>
			</div></li>
		<li>
			<div class="mach-img"></div>
			<div class="desc">
				<img src={pro3} class="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
				<h4>Concrete Mixer</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<span class="price"><i class="fa fa-inr" aria-hidden="true"></i>52304.00</span>
				<a href="#" class="more">More Info</a>
			</div></li>
		<li>
			<div class="mach-img"></div>
			<div class="desc">
				<img src={pro4} class="img-responsive" alt="Concrete Mixer" title="Concrete Mixer" />
				<h4>Concrete Mixer</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<span class="price"><i class="fa fa-inr" aria-hidden="true"></i>52304.00</span>
				<a href="#" class="more">More Info</a>
			</div></li>			</ul>
</div>
</div>
</div>
</div>
<div class="home-blog">
<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h3>Read Our Amazing Blog!</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industrys standard dummy text</p>
<ul class="list-unstyled list-inline">
		<li>
			<div class="blog-img">
				<img class="img-responsive" src={blog1} alt="" title="" />
			</div>
			<div class="blog-post">
				<h4>The number of protons</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<div class="post-detail">
					<span class="date">
						<i class="fa fa-clock-o" aria-hidden="true"></i> 1 june 2015
					</span>
					<span class="view">
						<img src={eye} class="view-icon" />343
					</span>
				</div>
			</div></li>
		<li>
			<div class="blog-img">
				<img class="img-responsive" src={blog2} alt="" title="" />
			</div>
			<div class="blog-post">
				<h4>Sport Stadium Birdview</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<div class="post-detail">
					<span class="date">
						<i class="fa fa-clock-o" aria-hidden="true"></i> 1 june 2015
					</span>
					<span class="view">
						<img src={eye} class="view-icon" />343
					</span>
				</div>
			</div></li>
		<li>
			<div class="blog-img">
				<img class="img-responsive" src={blog3} alt="" title="" />
			</div>
			<div class="blog-post">
				<h4>The number of protons</h4>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<div class="post-detail">
					<span class="date">
						<i class="fa fa-clock-o" aria-hidden="true"></i> 1 june 2015
					</span>
					<span class="view">
						<img src={eye} class="view-icon" />343
					</span>
				</div>
			</div></li>
		</ul>

</div>
</div>
</div>
</div>
<div class="partners">
<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h3>Our Partners</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industrys standard dummy text</p>
				<div class="responsive">
            <Carousel>
            <div><img src={partner1} /></div>
  					<div><img src={partner2} /></div>
  					<div><img src={partner3} /></div>
  					<div><img src={partner4} /></div>
  					<div><img src={partner2} /></div>
            </Carousel>
          </div>
  				<a href="#" class="join-btn">Join Us Today</a>
			</div>
		</div>
</div>
</div>
<div class="home-newsletter">
<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h3>Sign up for monthly news, fun promotions, <small>and news about new machines!</small></h3>
                <div class="input-group">
      <input type="text" class="form-control" placeholder="Enter your email address" />
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Subscribe</button>
      </span>
    </div>
			</div>
		</div>
	</div>
</div>
</div>
<footer>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
				<img src={footerlogo} class="img-responsive" alt="" title="" />
			</div>
			<div class="col-lg-6 col-md-6 col-sm-8 col-xs-12">
			<div class="footer-nav">
				<div class="menu-area">
					<h4>Equipments</h4>
					<ul class="list-unstyled">
						<li><a href="#">Popular</a></li>
						<li><a href="#">Trending</a></li>
						<li><a href="#">Catalog</a></li>
						<li><a href="#">Features</a></li>
					</ul>
				</div>
				<div class="menu-area">
					<h4>Company</h4>
					<ul class="list-unstyled">
						<li><a href="index.html">Home</a></li>
						<li><a href="listing.html">Rentals</a></li>
						<li><a href="solution.html">Solutions</a></li>
						<li><a href="blog.html">Blog</a></li>
					</ul>
				</div>
				<div class="menu-area">
					<h4>Info</h4>
					<ul class="list-unstyled">
						<li><a href="#">Rental Terms</a></li>
						<li><a href="#">Disclaimer</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Tearms of Service</a></li>
					</ul>
				</div>
			</div>
			</div>
			<div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-1 col-sm-3 col-xs-offset-2 col-xs-8 minus-margin">
				<h4>Follow Us</h4>
				<ul class="list-inline list-unstyled footer-social-icon">
				<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
			</ul>
			<a href="#" class="contact-btn">Contact Us</a>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 copy-right"><p>&copy;2018 EquipShare. All rights reserved</p></div>
		</div>
	</div>
</footer>
</div>
    );
  }
}

export default Home;
