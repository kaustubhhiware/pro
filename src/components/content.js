import React from "react";
import './base.css';
import { Col } from 'react-bootstrap';

import Themer from './themer';
import PossiblyEmptyLink from "./possiblyEmptyLink";

import Bio from '../data/bio';
import Papers from '../data/papers';
import Talks from '../data/talks';

export const Content = () => {
  
  return (
    <Col lg={12} xl={9}>
    <Themer />

    <div className="content-card">
      <div className="content-card-title">
        Hello, I'm {Bio.FirstName}! 👋
      </div>
      <div className="content-card-content">
        {Bio.Intro} <a href={Bio.URLs.Podcast} target="_blank" rel="noopener noreferrer">{Bio.PodcastName}</a>
      </div>
    </div>

    <div className="content-card">
      <div className="content-card-title">
        Experience
      </div>
      <div className="content-card-content">
        // ToDo
      </div>
    </div>

    <div className="content-card">
      <div className="content-card-title">
        Publications
      </div>
      <div className="content-card-content">
        <ul>
          {Papers.map((paper) => (
            <li className="content-list" key={paper.Title}>
              {paper.Title} - <a href={paper.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="content-link">
                link
              </a><br />
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

    <div className="content-card">
      <div className="content-card-title">
        Talks
      </div>
      <div className="content-card-content">
        {Talks.TalkIntro} <a href={Bio.URLs.Podcast} target="_blank" rel="noopener noreferrer">{Bio.PodcastName}</a>
        <hr className="breather" />
        <ul>
          {Talks.PreviousTalks.map((talk) => (
            <li className="content-list" key={talk.Title}>
              {talk.Title}
              -
              <PossiblyEmptyLink title=" [link]" link={talk.URLs.Primary} /> {/* link shouldn't be empty, but what the heck I like this abstraction now */}
              <PossiblyEmptyLink title=" | [video]" link={talk.URLs.Video} alt_title=""/>
              <PossiblyEmptyLink title=" | [slides]" link={talk.URLs.Slides} alt_title=""/>
              <br />
              <span className="content-card-subtitle-displaced">
                at <PossiblyEmptyLink title={talk.Venue} link={talk.URLs.Venue} alt_title={talk.Venue}/>
                <span className="right-float">
                  {talk.When}
                </span>
              </span>
              <br />
              <span className="content-card-subtitle">{talk.Description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Col>

    );
  };

  export default Content;