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
    <Container className='lluvia-container'>
      <h1 className='text-center'>LLUVIA</h1>
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