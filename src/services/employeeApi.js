import commonAPI from './commonAPI';
import SERVER_URL from './serverUrl';

// Add Employee
export const addEmployeeAPI = async (employeeDetails) => {
    const url = `${SERVER_URL}/employees`; // Ensure this URL matches your server's endpoint
    return await commonAPI('POST', url, employeeDetails);
};

// Get All Employees
export const getAllEmployeesAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/employees`, "");
};

// Get Single Employee
export const getSingleEmployeeAPI = async (id) => {
    return await commonAPI("GET", `${SERVER_URL}/employees/${id}`, "");
};

// Update Employee
export const updateEmployeeAPI = async (id, employeeDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/employees/${id}`, employeeDetails);
};

// Delete Employee
export const deleteEmployeeAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/employees/${id}`, {});
};
