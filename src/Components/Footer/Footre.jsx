import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col lg={3} md={6} className="footer-col">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper magna nec libero ultricies, id lacinia justo condimentum.</p>
          </Col>
          <Col lg={3} md={6} className="footer-col">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
              <li><a href="#service3">Service 3</a></li>
              <li><a href="#service4">Service 4</a></li>
            </ul>
            
          </Col>
          <Col lg={3} md={6} className="footer-col">
            <h5>Contact Us</h5>
            <p>1234 Main Street, Anytown, USA</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col lg={3} md={6} className="footer-col">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
