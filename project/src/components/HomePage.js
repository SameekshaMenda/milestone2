import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './HomePage.css';
import image1 from '../assets/hrms.jpg';
import image2 from '../assets/study.jpg';
import image3 from '../assets/culture1.jpeg';

const Home = () => {
    return (
        <Container fluid className="mt-5">
            <h2 className="text-center mb-4">Welcome!!!!!</h2>

            {/* First Image and Content aligned to the left */}
            <Row className="align-items-center mb-5 content-row justify-content-start">
                <Col md={6} className="img-col">
                    <img src={image1} alt="HRMS" className="img-fluid rounded shadow img-card" />
                </Col>
                <Col md={6} className="text-col">
                    <Card className="text-black bg-lightgrey p-3 shadow content-card">
                        <Card.Body>
                            <Card.Title>HR Management</Card.Title>
                            <Card.Text>
                                Our HR management system is designed to streamline and optimize all aspects of employee management processes. By automating routine tasks and providing advanced tools for tracking and reporting, it significantly enhances productivity while ensuring adherence to compliance standards. This robust system facilitates efficient handling of various HR functions, from managing attendance and leave requests to overseeing policy enforcement and employee onboarding. With an intuitive interface and comprehensive features, our HR management system empowers organizations to efficiently manage their human resources, improve operational efficiency, and support a more engaged and satisfied workforce.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Second Image and Content aligned to the right */}
            <Row className="align-items-center mb-5 content-row justify-content-end">
                <Col md={6} className="order-md-2 img-col">
                    <img src={image2} alt="HRMS" className="img-fluid rounded shadow img-card" />
                </Col>
                <Col md={6} className="order-md-1 text-col">
                    <Card className="text-black bg-lightgrey p-3 shadow content-card">
                        <Card.Body>
                            <Card.Title>Employee Development</Card.Title>
                            <Card.Text>
                                Our commitment to employee development is at the core of our organizational philosophy, ensuring that every team member has the opportunity for continuous learning and career advancement. We provide a range of professional development programs, training sessions, and mentorship opportunities designed to enhance skills, foster personal growth, and prepare employees for future roles. By investing in our employees' development, we not only support their individual career aspirations but also drive organizational success through a more skilled, knowledgeable, and motivated workforce. This holistic approach to employee development contributes to a dynamic and innovative work environment, benefiting both our employees and the organization as a whole.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Third Image and Content aligned to the left */}
            <Row className="align-items-center content-row justify-content-start">
                <Col md={6} className="img-col">
                    <img src={image3} alt="HRMS" className="img-fluid rounded shadow img-card" />
                </Col>
                <Col md={6} className="text-col">
                    <Card className="text-black bg-lightgrey p-3 shadow content-card">
                        <Card.Body>
                            <Card.Title>Company Culture</Card.Title>
                            <Card.Text>
                                We are dedicated to fostering a positive and inclusive company culture that values diversity, promotes inclusion, and prioritizes employee well-being. Our work environment is designed to be supportive, collaborative, and empowering, where every individual feels respected and valued. By actively promoting a culture of openness and mutual support, we encourage diverse perspectives and innovative thinking. Our commitment to creating a nurturing workplace not only enhances employee satisfaction and engagement but also drives our collective success. We believe that a positive company culture is essential for attracting and retaining top talent and achieving our organizational goals.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
