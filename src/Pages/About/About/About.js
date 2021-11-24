import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div>
      <Container className="py-5 border-top border-1 border-primary">
        <Row className="justify-content-center">
          <Col md={9} xs={12}>
            <div className="our-mission mb-5">
              <h1 style={{fontSize:"60px"}} className="brand-color text-center about-heading">Our Mission</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className="our-vision border-top border-1 border-primary">
              <h1 style={{fontSize:"60px"}} className="brand-color text-center mt-5 about-heading">Our Vision</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className="our-vision border-top border-1 border-primary">
              <h1 style={{fontSize:"60px"}} className="brand-color text-center mt-5 about-heading">Our Story</h1>
              <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;