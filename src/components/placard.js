import React from "react";
import './placard.css';
import { Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import circularIncrement from './../utils/utils.js';
import changeLang from  './../utils/changeLang.js';

import {Bio, LangDefault} from '../data/bio';
import profilePic from './../images/kaustubh.png';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";
import { IoMail } from "react-icons/io5";

export function ToggleLang() {
  let index = window.getComputedStyle(document.documentElement).getPropertyValue('--lang-index');
  
  index = index - "0" || 0;
  index = circularIncrement(index, Bio.Name.length);
  let next_index = circularIncrement(index, Bio.Name.length);
  changeLang(Bio.Name[index], Bio.Name[next_index])

  document.documentElement.style.setProperty('--lang-index', (index).toString());
}

const renderTooltip = (props) => (
  <Tooltip id="lang-tooltip" {...props}>
    Change language
  </Tooltip>
);

export const Placard = () => {
  
  return (
    <Col lg={12} xl={3}>
    <div className="sidecard">
    <img src={profilePic} className="placard-image" alt="Profile"/>
    
    <div className="placard-title">
      <span role="img" aria-label="lang-switcher" id="lang-name-text">
        {Bio.Name[LangDefault].Name}
      </span>
      
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}>
        <button id="lang-switcher" onClick={ToggleLang}>
          <span role="img" aria-label="lang-switcher" id="langemoji">
            {Bio.Name[circularIncrement(parseInt(LangDefault), Bio.Name.length)].Emoji}
          </span>
        </button>
      </OverlayTrigger>
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