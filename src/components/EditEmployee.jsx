import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleEmployeeAPI, updateEmployeeAPI } from "../services/employeeApi";
import Button from "react-bootstrap/Button";
import { Form, FloatingLabel, Alert } from "react-bootstrap";

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employeeDetails, setEmployeeDetails] = useState({ id: "", username: "", email: "", status: "active" });
    const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
    const [alertMessage, setAlertMessage] = useState(""); // State to manage alert message

    useEffect(() => {
        const fetchEmployee = async () => {
            const response = await getSingleEmployeeAPI(id);
            if (response && response.data) {
                setEmployeeDetails(response.data);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleUpdateEmployee = async () => {
        try {
            await updateEmployeeAPI(id, employeeDetails);
            setAlertMessage("Employee updated successfully!"); // Set success message
            setShowAlert(true); // Show the alert
            setTimeout(() => {
                navigate('/'); // Redirect to home or employee list after a short delay
            }, 2000);
        } catch (error) {
            setAlertMessage("Failed to update employee."); // Set error message
            setShowAlert(true); // Show the alert
        }
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            
            {/* Alert for success or failure */}
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                </Alert>
            )}
            
            {/* Display the ID */}
            <FloatingLabel controlId="floatingId" label="ID" className="mb-3">
                <Form.Control 
                    type="text" 
                    placeholder="ID" 
                    value={employeeDetails.id} 
                    readOnly // Makes the ID non-editable
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
                <Form.Control 
                    type="text" 
                    placeholder="Username" 
                    value={employeeDetails.username}
                    onChange={e => setEmployeeDetails({ ...employeeDetails, username: e.target.value })} 
                />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    value={employeeDetails.email}
                    onChange={e => setEmployeeDetails({ ...employeeDetails, email: e.target.value })} 
                />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingStatus" label="Status" className="mb-3">
                <Form.Select 
                    value={employeeDetails.status}
                    onChange={e => setEmployeeDetails({ ...employeeDetails, status: e.target.value })}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </Form.Select>
            </FloatingLabel>
            
            <Button onClick={handleUpdateEmployee} variant="primary">Update</Button>
        </div>
    );
};

export default EditEmployee;
