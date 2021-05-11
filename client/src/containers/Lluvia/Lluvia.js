import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import lluvia1 from "../../images/lluvia.jpeg";
import lluvia2 from "../../images/clothing/lluvia4.jpeg";
import lluvia3 from "../../images/clothing/lluvia6.png";
import './Lluvia.css'

const Lluvia = (props) => {
  return (
    <Container className='lluvia-container' id='lluvia'>
      <h1 className='text-center lluvia-header'>WELCOME TO LLUVIA IN STYLE CHILDREN'S BOUTIQUE</h1>
      <p className='text-center' style={{ fontSize: '18px' }}>Lluvia in Style is a modeling business and fashion boutique that sells clothing for children ages 12 months - 12 years. </p>
      <hr style={{ marginBottom: '4%' }} />
      <Row>
        <Card className='lluvia-card'>
          <Card.Img variant="top" src={lluvia1} className='lluvia-card-img' />
        </Card>
        <Card className='lluvia-card'>
          <Card.Img variant="top" src={lluvia3} className='lluvia-card-img' />
        </Card>
        <Card className='lluvia-card'>
          <Card.Img variant="top" src={lluvia2} className='lluvia-card-img' />
        </Card>
      </Row>
    </Container >
  );
}

export default Lluvia;