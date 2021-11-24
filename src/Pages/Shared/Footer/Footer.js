import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Container className="py-5">
          <Row className="py-5">
            <Col xl={4}>
              <div className="footer-left-content d-flex justify-content-left mb-4">
                <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/logo.png" alt="Footer Logo" width="80px" />
                <span style={{fontSize:"24px"}} className="brand-color fw-bold heading-font">Classic Tourism Park</span>
              </div>
              <div>
                <ul style={{paddingLeft:0}} className="contact-social-link">
                  <li><i className="far fa-envelope"></i> classic-tourism-park@gmail.com</li>
                  <li><i className="fas fa-map-marker-alt"></i> Mount Tabor, Monsey, New York.</li>
                  <li><i className="fas fa-phone-volume"></i> 914-59-553-4051</li>
                  <li className="footer-social-links">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xl={4}>
              <h2 style={{fontSize:"24px"}} className="brand-color fw-bold mb-4">Popular Destination</h2>
              <div className="footer-middle-content d-flex align-items-center">
                <ul style={{paddingLeft:0,marginRight:"50px"}}>
                  <li>Indonesia</li>
                  <li>India</li>
                  <li>Italy</li>
                  <li>Franch</li>
                  <li>USA</li>
                </ul>
                <ul style={{paddingLeft:0}}>
                  <li>UK</li>
                  <li>Spain</li>
                  <li>Australia</li>
                  <li>Thailand</li>
                  <li>Malaysia</li>
                </ul>
              </div>
            </Col>
            <Col xl={4}>
            <h2 style={{fontSize:"24px"}} className="brand-color fw-bold mb-4 footer-instagram">Instagram</h2>
            <div>
              <div className="row">
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/footer/footer1.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/footer/footer2.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/footer/footer3.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/footer/footer4.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/footer/footer5.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/footer/footer6.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom-part text-center m-0 py-4 fw-bold" style={{backgroundColor:"#111"}}>
        <p className="m-0" style={{color:"#fff"}}>Copyright by @Classic Tourism Park - 2021</p>
      </div>
    </div>
  );
};

export default Footer;