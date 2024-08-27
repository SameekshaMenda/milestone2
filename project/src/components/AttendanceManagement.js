import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const AttendanceManagement = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [newRecord, setNewRecord] = useState({ employee: '', date: '', status: 'Present' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchAttendanceRecords();
    }, []);

    const fetchAttendanceRecords = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/attendance');
            setAttendanceRecords(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleStatusChange = (index, status) => {
        const updatedRecords = [...attendanceRecords];
        updatedRecords[index].status = status;
        setAttendanceRecords(updatedRecords);
    };

    const handleSaveChanges = async () => {
        try {
            await axios.post('http://localhost:5000/api/attendance', attendanceRecords);
            setMessage('Changes saved successfully!');
            setError('');
        } catch (err) {
            setError('Error saving changes');
            setMessage('');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
    };

    const handleAddRecord = () => {
        setAttendanceRecords((prevRecords) => [...prevRecords, newRecord]);
        setNewRecord({ employee: '', date: '', status: 'Present' });
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Attendance Management</h3>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
                <Form.Group>
                    <Form.Label>Employee</Form.Label>
                    <Form.Control
                        type="text"
                        name="employee"
                        value={newRecord.employee}
                        onChange={handleInputChange}
                        placeholder="Enter employee name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        value={newRecord.date}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        as="select"
                        name="status"
                        value={newRecord.status}
                        onChange={handleInputChange}
                    >
                        <option>Present</option>
                        <option>Absent</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="secondary" onClick={handleAddRecord} className="mt-2">
                    Add Record
                </Button>
            </Form>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record, index) => (
                        <tr key={index}>
                            <td>{record.employee}</td>
                            <td>{record.date}</td>
                            <td>
                                <Form.Control
                                    as="select"
                                    value={record.status}
                                    onChange={(e) => handleStatusChange(index, e.target.value)}
                                >
                                    <option>Present</option>
                                    <option>Absent</option>
                                </Form.Control>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="secondary" onClick={handleSaveChanges}>
                Save Changes
            </Button>
        </div>
    );
};

export default AttendanceManagement;
