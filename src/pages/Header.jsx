// src/pages/Header.jsx
import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='text-secondary fw-bold' style={{ fontSize: '50px' }} href="#">Employee Management</Navbar.Brand>
        <div>
          <Link to="/add-employee">
            <Button className='ms-3' variant="success">Add Employee</Button>
          </Link>
          <Link to="/employees">
            <Button className='ms-3' variant="warning">View Employees</Button>
          </Link>
          <Link to="/home">
            <Button className='ms-3' variant="info">Home</Button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
