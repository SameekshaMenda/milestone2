import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import '../index.css';
import './LeaveManagement.css';

const LeaveManagement = () => {
  // State to manage the list of leave requests
  const [requests, setRequests] = useState([
    { id: 1, employee: 'John Doe', date: '2024-08-15', status: 'Pending' },
    // Add more sample data as needed
  ]);

  // State to manage the form inputs
  const [employeeName, setEmployeeName] = useState('');
  const [leaveDate, setLeaveDate] = useState('');
  const [leaveReason, setLeaveReason] = useState('');

  // Handle form submission
  const handleApply = (e) => {
    e.preventDefault();

    // Create a new leave request object
    const newRequest = {
      id: requests.length + 1, // Assign a new ID based on the length of the array
      employee: employeeName,
      date: leaveDate,
      status: 'Pending'
    };

    // Add the new request to the list
    setRequests([...requests, newRequest]);

    // Clear the form fields
    setEmployeeName('');
    setLeaveDate('');
    setLeaveReason('');
  };

  // Handle accept/reject actions
  const handleAction = (id, action) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: action } : req
    ));
  };

  return (
    <div className="leave-management-container">
      <h2>Leave Management</h2>
      <Form className="leave-management-form" onSubmit={handleApply}>
        <Form.Group controlId="formEmployeeName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter employee name" 
            value={employeeName} 
            onChange={(e) => setEmployeeName(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="formLeaveDate">
          <Form.Label>Leave Date</Form.Label>
          <Form.Control 
            type="date" 
            value={leaveDate} 
            onChange={(e) => setLeaveDate(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="formLeaveReason">
          <Form.Label>Reason</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={leaveReason} 
            onChange={(e) => setLeaveReason(e.target.value)} 
          />
        </Form.Group>
        <Button variant="secondary" type="submit" className="apply-button">Apply</Button>
      </Form>
      <Table bordered hover className="mt-3 leave-management-table">
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
