import React from "react";
import './base.css';
import { Col } from 'react-bootstrap';


export const Content = () => {
    
    return (
        <Col xs={12} md={7} className="content">
            This website is under active development. <br />
            Please visit back a week later.
        </Col>
        );
    };
    
    export default Content;