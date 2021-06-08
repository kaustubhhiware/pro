import React from "react";
import './base.css';
import { Row, Col } from 'react-bootstrap';
import changeTheme from './../utils/changeTheme.js';

// starting theme - should probably pass as prop
  let theme = 'dark-theme';

const toggleThemes = () => {
  if (theme === 'light-theme') {
    changeTheme('dark-theme', '🌸');
    theme = 'dark-theme';
  } else {
    changeTheme('light-theme', '🌊');
    theme = 'light-theme'
  }
}

export const Themer = () => {
  
  return (
    <Row className="themer-row">
    <Col xs={6} md={1} className="themer-set">
    <button id="themer" className="themer" onClick={toggleThemes}>
    🌸
    </button>
    </Col>
    <Col xs={6} md={3}>Top nav</Col>
    <Col xs={0} md={6}></Col>
    </Row>
    );
  };

  export default Themer;