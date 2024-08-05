import React, { useState } from 'react';
import { Table, Modal, Button, Image } from 'react-bootstrap';
import '../index.css';

const EmployeeProfile = () => {
  const [show, setShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    { id: 1, name: 'John Doe', profession: 'Software Engineer', photo: '/path-to-photo1.jpg' },
    { id: 2, name: 'Jane Smith', profession: 'HR Manager', photo: '/path-to-photo2.jpg' },
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
    <div>
      <Table striped bordered hover>
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
                <Button variant="custom" onClick={() => handleShow(employee)}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedEmployee && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEmployee.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={selectedEmployee.photo} fluid rounded />
            <p>Profession: {selectedEmployee.profession}</p>
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
