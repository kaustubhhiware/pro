import React from "react";
import './themer.css';
import { Row } from 'react-bootstrap';
import changeTheme from './../utils/changeTheme.js';
import circularIncrement from './../utils/utils.js';

import {Themes, ThemeDefault} from '../data/_themes';
import { MdHome, MdWork, MdModeEdit, MdMic, MdSchool } from "react-icons/md";



export function ToggleThemes() {
  let index = window.getComputedStyle(document.documentElement).getPropertyValue('--theme-index');
  
  index = index - "0" || 0;
  index = circularIncrement(index, Themes.length);
  let next_index = circularIncrement(index, Themes.length);
  changeTheme(Themes[index], Themes[next_index])

  document.documentElement.style.setProperty('--theme-index', (index).toString());
}

export const Themer = () => {
  
  return (
    <Row className="themer-row">
        <button id="themer" onClick={ToggleThemes}>
          <span role="img" aria-label="theme-switcher" id="themoji">
            {Themes[circularIncrement(parseInt(ThemeDefault))].Emoji}
          </span>
        </button>

        <div className="nav-container">
          <a href="#intro" className="navLink">
            <MdHome className="navIcon" />
          </a>
          <a href="#work" className="navLink">
            <MdWork className="navIcon" />
          </a>
          <a href="#publications" className="navLink">
            <MdModeEdit className="navIcon" />
          </a>
          <a href="#talks" className="navLink">
            <MdMic className="navIcon" />
          </a>
          <a href="#education" className="navLink">
            <MdSchool className="navIcon" />
          </a>
        </div>
    </Row>
    );
  };

export default Themer;
