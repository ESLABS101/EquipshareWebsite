<HashRouter>
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
    <li><input type="text" class="form-control" placeholder="Search" name="q" /><button class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button></li>
  </ul>
  <div>
    <Route path="/" component = {Header}/>
    <Route path="listing" component = {Header}/>
    <Route path="solution" component = {Header}/>
    <Route path="blog" component = {Header}/>
    <Route path="about" component = {Header}/>
    <Route path="career" component = {Header}/>
    <Route path="enquiry" component = {Header}/>
  </div>
  </div>
  </div>
  </HashRouter>
