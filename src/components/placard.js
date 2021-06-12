import React from "react";
import './base.css';
import { Col } from 'react-bootstrap';

import Bio from '../data/bio';
import profilePic from './../images/kaustubh.png';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";
import { IoMail } from "react-icons/io5";


export const Placard = () => {
  
  return (
    <Col lg={12} xl={3}>
    <div className="sidecard">
    <img src={profilePic} className="placard-image" alt="Profile"/>
    
    <div className="placard-title">
      {Bio.Name}
    </div>
    <div className="placard-role">
      {Bio.Role}
    </div>

    <div className="placard-location">
      {Bio.Location}
    </div>
    
    <hr className="liner" />

    <div className="social">
    <a href={Bio.URLs.Twitter} rel="noopener noreferrer" target="_blank">
      <FaTwitter />
    </a>
    <a href={Bio.URLs.LinkedIn} rel="noopener noreferrer" target="_blank">
      <FaLinkedinIn />
    </a>
    <a href={Bio.URLs.Instagram} rel="noopener noreferrer" target="_blank">
      <FaInstagram />
    </a>
    <a href={Bio.URLs.Github} rel="noopener noreferrer" target="_blank">
      <FaGithub />
    </a>
    <a href={Bio.URLs.GoogleScholar} rel="noopener noreferrer" target="_blank">
      <SiGooglescholar />
    </a>
    <a href={"mailto:" + Bio.URLs.Email} rel="noopener noreferrer" target="_blank">
      <IoMail />
    </a>
    </div>

    </div>
    </Col>
    );
  };

  export default Placard;