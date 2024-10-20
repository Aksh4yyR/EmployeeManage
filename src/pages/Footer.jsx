import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide an efficient solution to manage employee details with easy-to-use features.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light" aria-label="Privacy Policy">Privacy Policy</a></li>
              <li><a href="#" className="text-light" aria-label="Terms of Service">Terms of Service</a></li>
              <li><a href="#" className="text-light" aria-label="Support">Support</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:support@employeemanagement.com" className="text-light">support@employeemanagement.com</a><br />
              Phone: <a href="tel:+1234567890" className="text-light">+123 456 7890</a>
            </p>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p>&copy; 2024 Employee Management. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
