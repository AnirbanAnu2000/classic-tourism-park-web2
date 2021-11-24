import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HomePageAbout.css';

const HomePageAbout = () => {
  return (
    <div>
      <Container className="pt-5">
        <Row>
          <Col lg={6} className="py-5 order-lg-0 order-1">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/about.jpeg" alt="About Us" className="w-100 p-3" style={{border:"6px solid #0078a6"}} />
          </Col>
          <Col lg={6} className="d-flex align-items-center order-lg-1 order-0">
            <div className="p-4 home-about-right-content">
              <h2 className="mb-4">About Us</h2>
              <h5 className="brand-color mb-4">Welcome To Our Website</h5>
              <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <Button variant="primary">Read More <i class="fas fa-angle-right"></i></Button>
            </div>
          </Col>
        </Row>
        <hr/>
        </Container>
    </div>
  );
};

export default HomePageAbout;