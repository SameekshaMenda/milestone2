import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../index.css';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src="/path-to-company-image.jpg" alt="Company" className="card-img-left" />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Company Details</Card.Title>
              <Card.Text>
                Here are the details about the company.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
