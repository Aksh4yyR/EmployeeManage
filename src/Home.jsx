// Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import giphy from './assets/giphy.gif'; 

const Home = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="mb-4">Welcome to Employee Management System</h1>
          <p>
            Manage all your employee information in one place. Our Employee Management System
            makes it easy to track and update employee details, manage statuses, and more. Whether
            you're adding new employees or viewing existing records, this system provides a smooth
            experience.
          </p>
          
        </Col>
        <Col md={6}>
          <img src={giphy} alt="Employee Management" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
