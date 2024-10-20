import React, { useEffect, useState } from "react";
import { getAllEmployeesAPI, deleteEmployeeAPI } from "../services/employeeApi";
import AddEmployee from "./AddEmployee"; // Import your AddEmployee component
import { Link } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await getAllEmployeesAPI();
            if (response && response.data) {
                setEmployees(response.data);
            }
        };
        fetchEmployees();
    }, [reload]);

    const handleDeleteEmployee = async (id) => {
        await deleteEmployeeAPI(id);
        setReload(!reload); // Trigger a re-fetch
    };

    return (
        <div className="mt-3">
            <AddEmployee setEmployeeUploadResponse={setReload} />
            <h2>Employee List</h2>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th> {/* Added ID column */}
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td> {/* Display the ID */}
                            <td>{employee.username}</td>
                            <td>{employee.email}</td>
                            <td>{employee.status}</td>
                            <td>
                                <Link to={`/edit/${employee.id}`} className="btn btn-primary">Edit</Link>
                                <button onClick={() => handleDeleteEmployee(employee.id)} className="btn btn-danger ms-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
