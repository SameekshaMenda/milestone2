import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container">
      <h2 className="dashboard-title">HRMS Dashboard</h2>

      {/* First Row: Sales Overview and Employee Count */}
      <Row>
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="text-black">Sales Overview</Card.Title>
              <div className="graphic-container">
                <ProgressBar now={75} label={`75%`} className="progress-bar-custom" />
              </div>
              <Card.Text className="text-muted">
                Monthly sales performance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="text-black">Employee Count</Card.Title>
              <div className="graphic-container">
                <h3 className="employee-count">150</h3>
                <p className="text-muted">Total Employees</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Second Row: Attendance, Leave, and Policy Management */}
      <Row>
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="text-black">Attendance Management</Card.Title>
              <Card.Text className="text-muted">
                Manage employee attendance efficiently.
              </Card.Text>
              <Link to="/attendance-management" className="btn btn-dark">
                Go to Attendance
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="text-black">Leave Management</Card.Title>
              <Card.Text className="text-muted">
                Handle employee leave requests.
              </Card.Text>
              <Link to="/leave-management" className="btn btn-dark">
                Go to Leave Management
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title className="text-black">Onboarding Management</Card.Title>
                <Card.Text className="text-muted">
                  Manage the onboarding process for new employees.
                </Card.Text>
                <Link to="/onboarding-management" className="btn btn-dark">
                  Go to Onboarding
                </Link>
              </Card.Body>
            </Card>
          </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="text-black">Policy Management</Card.Title>
              <Card.Text className="text-muted">
                Manage company policies and updates.
              </Card.Text>
              <Link to="/policy-management" className="btn btn-dark">
                Go to Policy Management
              </Link>
            </Card.Body>
          </Card>
        </Col>


        {/* Third Row: Employee Profile and Onboarding Management */}

        <Col md={4} className="mb-4">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="text-black">Employee Profile</Card.Title>
              <Card.Text className="text-muted">
                View and edit employee profiles.
              </Card.Text>
              <Link to="/employee-profile" className="btn btn-dark">
                Go to Employee Profile
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

        <Row>

          
        </Row>
    </Container>
  );
};

export default Dashboard;
