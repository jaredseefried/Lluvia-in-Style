import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from "react-router-bootstrap";
import './NavBar.css';
import { SiTiktok } from 'react-icons/si'
import { GrInstagram, GrFacebookOption } from 'react-icons/gr'

function Navigation() {
  return (
    <Navbar bg='light' collapseOnSelect expand='md' varient='light'>
      <LinkContainer to="/">
        <Navbar.Brand href="#home">Lluvia in Style</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#lluvia">Lluvia</Nav.Link>
          <Nav.Link href="#clothing-line">Clothing</Nav.Link>
          <Nav.Link href="#contact-form">Contact</Nav.Link>
        </Nav>
        <div className='icon-wrapper'>
          <a href='https://www.facebook.com/lluviainstyle' target='_blank'>
            <GrFacebookOption className='social-icon' id='facebook-icon' />
          </a>
          <a href='' target='_blank'>
            <GrInstagram className='social-icon' id='instagram-icon' />
          </a>
          <a href='https://www.tiktok.com/@lluviainstyle?lang=en' target='_blank'>
            <SiTiktok className='social-icon' id='tiktok-icon' />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;