import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HomePageBanner.css';

const HomePageBanner = () => {
  return (
    <div className="home-page-banner">
      <div className="home-page-banner-overlay d-flex justify-content-left align-items-center">
        <Container>
          <Row className="">
            <Col lg={6} className=""> 
              <div className="">
                <h1 className="banner-heading text-light">Let's Enjoy The Wonders of Nature</h1>
                <p className="text-white mb-5">Find great places to stay, eat, shop, or visit via us</p>
                <Button variant="primary" size="lg">Read More <i class="fas fa-angle-right"></i></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePageBanner;