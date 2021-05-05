import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import MainBackground from '../../images/Main-Banner.png'
import './MainHeader.css'

const MainHeader = (props) => {
  return (
    <>
      <Jumbotron>
        {/* <img src={MainBackground} alt='...' className='main-background' /> */}
        <h1 className='text-center title'>LLUVIA IN STYLE</h1>
        <h2 className='text-center title2'>CHILDREN'S BOUTIQUE</h2>

      </Jumbotron>
    </>
  );
}

export default MainHeader;