import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import '../index.css';
import './OnboardingManagement.css';

const OnboardingManagement = () => {
  const [employee, setEmployee] = useState('');
  const [status, setStatus] = useState('Pending');
  const [onboardingList, setOnboardingList] = useState([]);

  const handleAddOnboarding = () => {
    if (employee) {
      setOnboardingList([...onboardingList, { employee, status }]);
      setEmployee('');
      setStatus('Pending');
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formEmployeeName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter employee name"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>Completed</option>
          </Form.Control>
        </Form.Group>
        <Button variant="custom" onClick={handleAddOnboarding}>
          Add Onboarding Task
        </Button>
      </Form>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {onboardingList.map((task, index) => (
            <tr key={index}>
              <td>{task.employee}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OnboardingManagement;
