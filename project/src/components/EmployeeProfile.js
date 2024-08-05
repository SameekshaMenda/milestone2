import React, { useState } from 'react';
import { Table, Modal, Button, Image } from 'react-bootstrap';
import './EmployeeProfile.css'; // Use this for custom styling

const EmployeeProfile = () => {
  const [show, setShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    { id: 1, name: 'John Doe', profession: 'Software Engineer', photo: '/path-to-photo1.jpg', email: 'john.doe@example.com', phone: '123-456-7890', address: '123 Main St', department: 'Engineering', joiningDate: '2021-06-15', skills: ['JavaScript', 'React', 'Node.js'], bio: 'Experienced in building web applications.' },
    { id: 2, name: 'Jane Smith', profession: 'HR Manager', photo: '/path-to-photo2.jpg', email: 'jane.smith@example.com', phone: '987-654-3210', address: '456 Elm St', department: 'Human Resources', joiningDate: '2019-04-22', skills: ['Recruitment', 'Employee Relations'], bio: 'Skilled in managing HR operations and employee relations.' },
    // Add more sample employees as needed
  ];

  const handleShow = (employee) => {
    setSelectedEmployee(employee);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedEmployee(null);
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
                <Button variant="primary" onClick={() => handleShow(employee)}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedEmployee && (
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedEmployee.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="employee-detail">
              <Image src={selectedEmployee.photo} fluid rounded className="employee-detail-photo" />
              <div className="employee-detail-info">
                <p><strong>Profession:</strong> {selectedEmployee.profession}</p>
                <p><strong>Email:</strong> {selectedEmployee.email}</p>
                <p><strong>Phone:</strong> {selectedEmployee.phone}</p>
                <p><strong>Address:</strong> {selectedEmployee.address}</p>
                <p><strong>Department:</strong> {selectedEmployee.department}</p>
                <p><strong>Joining Date:</strong> {selectedEmployee.joiningDate}</p>
                <p><strong>Skills:</strong> {selectedEmployee.skills.join(', ')}</p>
                <p><strong>Bio:</strong> {selectedEmployee.bio}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default EmployeeProfile;
