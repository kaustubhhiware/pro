import React from "react";
import './base.css';
import { Col } from 'react-bootstrap';

import Themer from './themer';
import Bio from '../data/bio';
import Papers from '../data/papers';

export const Content = () => {
  
  return (
    <Col xs={12} md={9}>
    <Themer />

    <div className="content-card">
      <div className="content-card-title">
        Hello, I'm {Bio.FirstName}! 👋
      </div>
      <div className="content-card-content">
        {Bio.Intro} <a href={Bio.URLs.Podcast} target="_blank">{Bio.PodcastName}</a>
      </div>
    </div>

    <div className="content-card">
      <div className="content-card-title">
        Publications
      </div>
      <div className="content-card-content">
        <ul>
          {Papers.map((paper) => (
            <li class="paper-list">
              {paper.Title} - <a href={paper.URL} target="_blank" className="paper-link">link</a><br />
              <span className="content-card-subtitle">
                at the {paper.Venue}
              </span>
              <br />
              <span className="content-card-subtitle">{paper.Authors}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Col>

    );
  };

  export default Content;