import React, { useState } from 'react';
import { Form, Button, ListGroup, Accordion } from 'react-bootstrap';
import './PolicyManagement.css'; // Custom styling for PolicyManagement

const PolicyManagement = () => {
  const [policy, setPolicy] = useState('');
  const [policies, setPolicies] = useState([
    { name: 'Equal Opportunity Policy', details: 'Details about Equal Opportunity Policy.' },
    { name: 'Non-Discrimination Policy', details: 'Details about Non-Discrimination Policy.' },
    // Add more sample policies as needed
  ]);

  const handleAddPolicy = () => {
    if (policy) {
      setPolicies([...policies, { name: policy, details: 'No details provided.' }]);
      setPolicy('');
    }
  };

  return (
    <div className="policy-management-page">
      <div className="policy-management-card">
        <h2>Policy Management</h2>
        <Form className="policy-management-form">
          <Form.Group controlId="formPolicy">
            <Form.Label>New Policy</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter policy"
              value={policy}
              onChange={(e) => setPolicy(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" className="mt-3" onClick={handleAddPolicy}>
            Add Policy
          </Button>
        </Form>
        <Accordion className="mt-3 policy-management-accordion">
          {policies.map((policy, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{policy.name}</Accordion.Header>
              <Accordion.Body>
                {policy.details}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default PolicyManagement;
