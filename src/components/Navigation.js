import React from 'react'
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function Navigation() {
    return (
        <div>
             <Navbar bg="dark" expand="lg">
               <Navbar.Toggle aria-controls = "basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
               <Nav>
   
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink  className="d-inline p-2 bg-dark text-white" to="/Department" activeStyle>
                    Department
                    </NavLink>
                    <NavLink  className="d-inline p-2 bg-dark text-white" to="/Employee" activeStyle>
                    Employee
                    </NavLink>   
                    <NavLink  className="d-inline p-2 bg-dark text-white" to="/Test" activeStyle>
                    Test
                    </NavLink>          
           </Nav> 
           </Navbar>
        </div>
    )
}

export default Navigation
