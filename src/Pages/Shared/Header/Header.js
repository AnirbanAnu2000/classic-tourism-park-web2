import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const activeStyle = {
    backgroundColor: "transparent",
    color: "#fff",
    border:"3px solid #fff"
  }

  const {user, logOut} = useAuth();

  return (
    <div>
      {/* navbar part start */}
      <Navbar expand="lg" className="main-navigation w-100">
        <Container className="main-navigation-container">
          <Navbar.Brand href="/home" className="brand-logo"> <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/logo.png" width="80px" alt="Brand Logo" /> <span className="text-white heading-font">Classic Tourism Park</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="brand-bg mx-auto mb-3" />
              <Navbar.Collapse id="basic-navbar-nav">
              
                <Nav className="ms-auto">
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/home">Home</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/about">About</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/services">Services</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/contact">Contact</NavLink>

                  {user.email && <NavLink activeStyle={activeStyle} className="navbar-link me-1" to="/myOrders" style={{fontSize:"14px"}}>My Orders</NavLink>}
                  
                  {user.email && <span style={{fontSize:"14px"}} className="text-light fw-bold ms-2 mt-2 me-2 text-center user-name">{user.displayName}</span>} 

                  {
                  user.email ?
                  <button onClick={logOut} className="btn btn-danger fw-bold">Logout</button>
                  :
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/login">Login</NavLink>}
                
              </Nav>
          </Navbar.Collapse>
          {user.email &&
            <nav aria-label="breadcrumb" className="ms-2 login-user-menu">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to="/addService">Add Service</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        <Link to="manageServices">Manage Services</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        <Link to="manageOrders">Manage Orders</Link>
                    </li>
                </ol>
            </nav>
        }
        </Container>         
      </Navbar>
    </div>
  );
};

export default Header;