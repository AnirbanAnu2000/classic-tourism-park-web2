import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Container className="border-top border-1 border-primary">
        <h1 className="fw-bold brand-color text-center mt-5 mb-4 contact-heading" style={{fontSize:"50px"}}>Contact With Us</h1>
        <Row className="justify-content-center">
          <Col lg={8} className="pb-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Your Contact Number" />
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Tour Package You Interested To Book</Form.Label>
                <Form.Control type="text" placeholder="Tour Package" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-bold">Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>

              <Button variant="primary" className="fw-bold" type="submit">
                Submit
              </Button>
            </Form>
          </Col>  
        </Row>
      </Container>
    </div>
  );
};

export default Contact;