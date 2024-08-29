import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Update import
import './EmployeeProfile.css'; // Use this for custom styling

const EmployeeProfile = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const employees = [
    { id: 1, name: 'John Doe', profession: 'Software Engineer', photo: '/path-to-photo1.jpg' },
    { id: 2, name: 'Jane Smith', profession: 'HR Manager', photo: '/path-to-photo2.jpg' },
    // Add more sample employees as needed
  ];

  const handleViewDetails = (employeeId) => {
    navigate(`/employee/${employeeId}`); // Redirect to the employee detail page
  };

  return (
    <div className="employee-profile-container">
      <h1>Employee Profiles</h1>
      <Table striped bordered hover className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Profession</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.profession}</td>
              <td>
                <Button variant="primary" onClick={() => handleViewDetails(employee.id)}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeProfile;
