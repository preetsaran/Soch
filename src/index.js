import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Impact from './Components/Impact';
import WhoAreWe from './Components/whoAreWe';
import WhatWeDo from './Components/whatWeDo';
import WhoSupportUs from './Components/whoSupportUs';
import Donate from './Components/Donate'
import NotFound from './Components/NotFound'
import JoinUs from './Components/joinUs'                                                                                                                                                                                                                                                                                                        
import ContactUs from './Components/contactUs'
import Scholarship from './Components/scholarship';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


const routing = (
    <React.Fragment>
    <Router>
        <div>
                  
<a class="navbar-brand" href="#"></a>  
            <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" fixed="top">
           
                <Navbar.Brand as={Link} to="/"> <img class="logo" alt="Transparent MDB Logo" id="animated-img1" src={require("./assets/Images/SochLogo.png")} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <div class="dropdown">
                         
                         <Nav.Link as={Link} to="#">About Us</Nav.Link>
                        <div class="dropdown-content">
                            <Nav.Link as={Link} to="/about/whoarewe">Who Are We</Nav.Link>
                            <Nav.Link as={Link} to="/about/whatwedo">What We Do</Nav.Link>
                            <Nav.Link as={Link} to="/whosupportus">Who Support Us</Nav.Link>
                            <Nav.Link as={Link} to="/join">Join Us</Nav.Link>
                            <Nav.Link as={Link} to="/scholarship">Scholarship</Nav.Link>
                            {/* <a href="/about/whatwedo">What We Do</a>
                            <a href="/whosupportus">Who Support Us</a> */}
                        </div>
                        </div>
                        <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about/whoarewe" component={WhoAreWe} />
                <Route path="/about/whatwedo" component={WhatWeDo} />
                <Route path="/whosupportus" component={WhoSupportUs} />
                <Route path="/donate" component={Donate}/>
                <Route path="/join" component={JoinUs}/>
                <Route path="/contact" component={ContactUs}/>
                <Route path="/scholarship" component={Scholarship}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
    <footer class="footer">
            <div class="footer-copyright text-center py-3">© 2019 Copyright: Sochnet.com</div>
        </footer>
    </React.Fragment>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
