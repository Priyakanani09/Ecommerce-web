import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary" expand="lg">
                <Container style={{ maxWidth: '1550px' }}>
                    <Navbar.Brand><img src={require('./img/p2.png')} className='logo' /><h6 style={{ color: 'green' }}>Plant store</h6></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-4 text-center">
                            <Nav.Link><Link to="/" className='navb'>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about" className='navb'>About Us</Link></Nav.Link>
                            <Nav.Link><Link to="/product" className='navb'>Product</Link></Nav.Link>
                            <Nav.Link><Link to="/blog" className='navb'>Blog</Link></Nav.Link>
                            <Nav.Link><Link to="/contact" className='navb'>Contact Us</Link></Nav.Link>
                        </Nav>

                        <Nav className="ms-lg-3 mt-3 mt-lg-0 gap-2 icon">
                            <Nav.Link as={Link} to="/cart">
                                <FontAwesomeIcon icon={faShoppingCart} title='cart' />
                            </Nav.Link>

                            <div className="user-box">
                                <FontAwesomeIcon icon={faUser} className="navb1" />

                                <div className="hover-buttons2">
                                    <Link to="/login">
                                        <button className="btn mt-lg-2 btn-success" style={{ width: '82px' }}>Login</button>
                                    </Link>
                                    <Link to="/register">
                                        <button className="btn btn-primary mt-2">Register</button>
                                    </Link>
                                </div>
                            </div>

                            <Nav.Link as={Link} to="/heart">
                                <FontAwesomeIcon icon={faHeart} title='Wishlist' />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}   

export default Header