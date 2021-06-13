import React from "react";
import './base.css';

import { FaHeart} from 'react-icons/fa';


export class Footer extends React.Component {
  years() {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();

    return (
        startYear === currentYear ? startYear : startYear + "-" + currentYear
    );
  }

  getBGSource() {
    return window.getComputedStyle(document.documentElement).getPropertyValue('--bg-source');
  }

  render() {
    return (
      <div className="footer">
        Made with &nbsp;
        <a className="love" href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank" rel="noopener noreferrer">
          <FaHeart color="red" />
        </a>
        &nbsp; by &nbsp;
        <a href="https://kaustubhhiware.in" className="plain-jane"
          target="_blank" rel="noopener noreferrer">
          Kaustubh Hiware
        </a>
        &nbsp; © {this.years()}
        &nbsp; 
        <a href="." id="bg-source"
          target="_blank" rel="noopener noreferrer">
          | Background
        </a>
      </div>
    );
  };
};

  export default Footer;