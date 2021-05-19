import React from "react";
import './base.css';
import { Container, Row, Col } from 'react-bootstrap';
import HeadShake from 'react-reveal/HeadShake';


export const IntroPage = () => {

    return (
    <div className="div-page">
        <Container className="container">
            <div></div>
            <Row>
                <Col xs={6} md={4}>
                Hello, I'm Kaustubh.
                <HeadShake>👋</HeadShake>
                </Col>
             </Row>
        </Container>
    </div>
    );
};

export default IntroPage;