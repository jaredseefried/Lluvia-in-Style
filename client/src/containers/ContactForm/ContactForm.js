// Dependencies
import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import axios from 'axios'

import LoaderButton from "../../components/LoaderButton/LoaderButton";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';

// CSS
import './ContactForm.css';

const ContactForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    textarea: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await axios({
        method: "POST",
        url: "/api/sendMail",
        data: fields
      }).then((response) => {
        if (response.data.status === 'success') {
          alert("Message Sent.");
          setIsLoading(false)
          setFields({
            name: "",
            email: "",
            textarea: ""
          })
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
          setIsLoading(false);
        }
      })
    } catch (e) {
      onError(e);
    }
  }

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit} className='contact-wrapper'>
          <h1 className="text-center" style={{ color: '#0d0e0e', marginTop: '10px' }}>Contact Me For Orders</h1>
          <p></p>
          <hr style={{ marginBottom: '4%', width: '100%' }} />
          <Form.Group controlId="formHorizontalName" size="lg" controlId="name">
            <Form.Control
              name='name'
              placeholder='Name'
              // autoFocus
              type="name"
              value={fields.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formHorizontalEmail" size="lg" controlId="email">
            <Form.Control
              name='email'
              placeholder='email or phone'
              // autoFocus
              type="email"
              value={fields.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formHorizontalTextarea" size="lg" controlId="textarea">
            <Form.Control
              as='textarea'
              name='textarea'
              placeholder='Message...'
              // autoFocus
              type="textarea"
              value={fields.textarea}
              onChange={handleInputChange}
            />
            <LoaderButton
              block
              size="lg"
              type="submit"
              isLoading={isLoading}
              style={{ marginTop: '25px' }}
            >
              Send
        </LoaderButton>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}

export default ContactForm;