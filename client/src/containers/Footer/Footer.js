import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'

const Footer = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Llucia in Style</h1>
        </Col>
        <Col>Connect with Lluvia in Style on</Col>
      </Row>
      <Row>
        <Col>Website created by Mile High Web Solutions, LLC</Col>
      </Row>
      <Row>
        <Col>
          <Image src="holder.js/100px250" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;