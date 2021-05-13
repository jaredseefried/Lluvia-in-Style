import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Logo from '../../images/Lluvia-in-style-logo-outline.png'
import './MainHeader.css'

const MainHeader = () => {
  return (
    <Jumbotron>
      <img src={Logo} alt='Lluvia In Style Logo' className='lluvia-logo mx-auto d-block' />
      <h1 className='tagline text-center'>Be unique. Be in style. Be yourself.</h1>
    </Jumbotron>

  );
}

export default MainHeader;