import React, { Component } from 'react';
import LoadingButton from './LoadingButton'; 
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, ButtonToolbar} from 'react-bootstrap'
 
class Navigation extends Component{
    
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">Confessions</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullRight>
                    <LoadingButton/>
                </Navbar.Form>                   
            </Navbar>
        );    
    }
}


export default Navigation;