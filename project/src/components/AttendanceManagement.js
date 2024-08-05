import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import '../index.css';
import './AttendanceManagement';

const Attendancemanagement = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Present');
  const [records, setRecords] = useState([]);

  const handleAddRecord = () => {
    setRecords([...records, { name, date, status }]);
    setName('');
    setDate('');
    setStatus('Present');
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formEmployeeName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter employee name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control 
            as="select" 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Present</option>
            <option>Absent</option>
          </Form.Control>
        </Form.Group>
        <Button variant="custom" onClick={handleAddRecord}>
          Add Record
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Attendancemanagement;
