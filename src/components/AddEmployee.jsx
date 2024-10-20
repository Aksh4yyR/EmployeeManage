import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addEmployeeAPI } from '../services/employeeApi';

const AddEmployee = () => {
  const [employeeDetails, setEmployeeDetails] = useState({ id: '', username: '', email: '', status: 'active' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addEmployeeAPI(employeeDetails);
      if (response.status >= 200 && response.status < 300) {
        alert('Employee added successfully!');
        // Optionally reset form after successful addition
        setEmployeeDetails({ id: '', username: '', email: '', status: 'active' });
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to add employee.'); // Optional: show user-friendly error
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <Form onSubmit={handleSubmit}>
        {/* ID Input Field */}
        <Form.Group controlId="formId">
          <Form.Label>ID</Form.Label>
          <Form.Control 
            type="text" 
            name="id" 
            value={employeeDetails.id} 
            onChange={handleInputChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            name="username" 
            value={employeeDetails.username} 
            onChange={handleInputChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={employeeDetails.email} 
            onChange={handleInputChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control 
            as="select" 
            name="status" 
            value={employeeDetails.status} 
            onChange={handleInputChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Form.Control>
        </Form.Group>

        <Button className='mt-3 mb-3' variant="primary" type="submit">Add Employee</Button>
      </Form>
    </div>
  );
};

export default AddEmployee;
