import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// import '../css/Counter.css';

    
    const NavLinks=()=>
    <div>
        <NavLink activeClassName="selected" to="/login">Login</NavLink>&nbsp;|&nbsp;
        <NavLink activeClassName="selected" to="/register">Register</NavLink>&nbsp;|&nbsp;
        {/* <NavLink activeClassName="selected" to="/contact">Contact</NavLink> */}
    </div>

    const LoginPage=()=>
        <h1>Login Page</h1>;
    
    const RegisterPage=()=>
        <h1>Register Page</h1>;

    class Solution6 extends React.Component{
        state={
            users:[]
        }
    
        render(){
            return(
                <div>
                   User Id: <input id="username" type="text"></input>
                   User Id: <input id="userpass" type="password"></input>
                    <Router>
                    <NavLinks />
                    <Route exact path="/login" component={LoginPage}></Route>
                    <Route path="/register" component={RegisterPage}></Route>
                    </Router>
                </div>
            );
        }
    }
    export default Solution6;