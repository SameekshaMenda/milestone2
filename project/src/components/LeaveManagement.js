import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import '../index.css';
import './LeaveManagement.css';

const LeaveManagement = () => {
  const [requests, setRequests] = useState([
    { id: 1, employee: 'John Doe', date: '2024-08-15', status: 'Pending' },
    // Add more sample data as needed
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: action } : req
    ));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.employee}</td>
              <td>{request.date}</td>
              <td>{request.status}</td>
              <td>
                <Button 
                  variant="success" 
                  onClick={() => handleAction(request.id, 'Accepted')}
                >
                  Accept
                </Button>
                <Button 
                  variant="danger" 
                  onClick={() => handleAction(request.id, 'Rejected')}
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LeaveManagement;
