import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Logo from '../../images/Lluvia-in-style-logo-outline.png'
import './MainHeader.css'

const MainHeader = (props) => {
  return (
    <Jumbotron>
      <img src={Logo} alt='...' className='lluvia-logo mx-auto d-block' />
    </Jumbotron>

  );
}

export default MainHeader;