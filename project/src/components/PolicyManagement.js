import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import '../index.css';

const PolicyManagement = () => {
  const [policy, setPolicy] = useState('');
  const [policies, setPolicies] = useState([
    'Equal Opportunity Policy',
    'Non-Discrimination Policy',
    // Add more sample policies as needed
  ]);

  const handleAddPolicy = () => {
    if (policy) {
      setPolicies([...policies, policy]);
      setPolicy('');
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formPolicy">
          <Form.Label>New Policy</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter policy"
            value={policy}
            onChange={(e) => setPolicy(e.target.value)}
          />
        </Form.Group>
        <Button variant="custom" onClick={handleAddPolicy}>
          Add Policy
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {policies.map((policy, index) => (
          <ListGroup.Item key={index}>{policy}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PolicyManagement;
