import React from "react";
import './base.css';
import { Row, Col } from 'react-bootstrap';


export const Themer = () => {
  
  return (
    <Row class="themer-row">
    <Col xs={0} md={6}></Col>
    <Col xs={6} md={3}>Top nav</Col>
    <Col xs={6} md={3} class="themer-set">
    <div class="themer">
    colors
    </div>
    </Col>
    </Row>
    );
  };

  export default Themer;