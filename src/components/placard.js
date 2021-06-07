import React from "react";
import './base.css';
import { Col } from 'react-bootstrap';

import profilePic from './../images/kaustubh.png';


export const Placard = () => {
  
  return (
    <Col xs={12} md={3}>
    <div class="sidecard">
    <img src={profilePic} class="placard-image" alt="Profile"/>
    
    <div class="placard-title">
    Kaustubh Hiware
    </div>
    
    <hr class="liner" />
    </div>
    </Col>
    );
  };

  export default Placard;