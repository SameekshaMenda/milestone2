import React from 'react';
import { useParams } from 'react-router-dom';
//import './EmployeeDetailPage.css'; // Custom CSS for EmployeeDetailPage

const EmployeeDetailPage = () => {
  const { id } = useParams();

  // Dummy data or fetch employee details from an API based on the ID
  const employee = {
    id,
    photo: '/path/to/dummy-photo.jpg',
    name: 'John Doe',
    position: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    department: 'Engineering',
    joiningDate: 'January 1, 2020',
    skills: ['JavaScript', 'React', 'Node.js'],
    bio: 'Experienced software engineer with a passion for building scalable web applications. Adept at problem-solving and collaborative teamwork.'
  };

  return (
    <div className="employee-detail-container">
      <h1>Employee Details</h1>
      <div className="employee-detail">
        <img src={employee.photo} alt={`${employee.name}'s profile`} className="employee-detail-photo" />
        <div className="employee-detail-info">
          <h2>{employee.name}</h2>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Address:</strong> {employee.address}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Joining Date:</strong> {employee.joiningDate}</p>
          <p><strong>Skills:</strong> {employee.skills.join(', ')}</p>
          <p><strong>Bio:</strong> {employee.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
