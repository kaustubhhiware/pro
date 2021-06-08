import React from "react";
import './base.css';
import { Col } from 'react-bootstrap';

import profilePic from './../images/kaustubh.png';


export const Placard = () => {
  
  return (
    <Col xs={12} md={3}>
    <div className="sidecard">
    <img src={profilePic} className="placard-image" alt="Profile"/>
    
    <div className="placard-title">
    Kaustubh Hiware
    </div>
    
    <hr className="liner" />
    </div>
    </Col>
    );
  };

  export default Placard;