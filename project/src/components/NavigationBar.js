import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/home">HRMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/attendance-management">Attendance Management</Nav.Link>
          <Nav.Link as={Link} to="/leave-management">Leave Management</Nav.Link>
          <Nav.Link as={Link} to="/policy-management">Policy Management</Nav.Link>
          <Nav.Link as={Link} to="/employee-profile">Employee Profile</Nav.Link>
          <Nav.Link as={Link} to="/onboarding-management">Onboarding Management</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as="button" onClick={handleLogout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
