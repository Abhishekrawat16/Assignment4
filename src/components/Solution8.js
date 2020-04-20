import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// import '../css/Counter.css';

    const NavLinks=()=>
    <div>
        <NavLink activeClassName="selected" to="/">Home</NavLink>&nbsp;|&nbsp;
        <NavLink activeClassName="selected" to="/about">About</NavLink>&nbsp;|&nbsp;
        <NavLink activeClassName="selected" to="/contact">Contact</NavLink>

    </div>

    const HomePage=()=>
        <h1>Home Page</h1>;

    const AboutPage=()=>
        <h1>About Page</h1>;

    const ContactPage=()=>
        <h1>Contact Page</h1>;


    const Solution8=()=>(
        <Router>
            <NavLinks />
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
        </Router>
    );

export default Solution8;