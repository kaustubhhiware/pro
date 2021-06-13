import React from "react";
import './content.css';
import './base.css';
import { Col } from 'react-bootstrap';

import Themer from './themer';
import PossiblyEmptyLink from "./possiblyEmptyLink";
import Timeline from "./timeline";

import Bio from '../data/bio';
import Work from '../data/work';
import Papers from '../data/papers';
import Talks from '../data/talks';
import Education from '../data/education';

export const Content = () => {
  
  return (
    <Col lg={12} xl={9}>
    <Themer />

    {/* Intro */}
    <div className="content-card" id="intro">
      <div className="content-card-title">
        Hello, I'm {Bio.FirstName}! 👋
      </div>
      <div className="content-card-content">
        {Bio.Intro} <PossiblyEmptyLink href={Bio.URLs.Podcast} text={Bio.PodcastName} alt_text="." />
      </div>
    </div>

    {/* Experience */}
    <div className="content-card" id="work">
      <div className="content-card-title">
        Work Experience
      </div>
      <div className="content-card-content">
        {Work.map((job) => (
          <Timeline 
            When={job.When}
            Title={job.Role}
            Logo={job.Company.Logo}
            Subtitle={job.Company.Name}
            SubtitleLink={job.Company.URL}
            Description={job.Description}
          />
        ))}
      </div>
    </div>

    {/* Publications */}
    <div className="content-card" id="publications">
      <div className="content-card-title">
        Publications
      </div>
      <div className="content-card-content">
        <ul>
          {Papers.map((paper) => (
            <li className="content-list" key={paper.Title}>
              {paper.Title} - <PossiblyEmptyLink href={paper.URL} className="content-link" text="link" alt_text="link" />
              <br />
              <span className="content-card-subtitle">
                at the {paper.Venue}
              </span>
              <br />
              <span className="content-card-subtitle">
                {paper.Authors}
              </span>
            </li>
          ))}
        </ul>

        Fun fact: I have an&nbsp;
        <PossiblyEmptyLink href={Bio.Erdos.URL} text="Erdős" alt_text="."/>
        &nbsp;number of {Bio.Erdos.Number}.
      </div>
    </div>

    {/* Talks */}
    <div className="content-card" id="talks">
      <div className="content-card-title">
        Talks
      </div>
      <div className="content-card-content">
        {Talks.TalkIntro} <PossiblyEmptyLink href={Bio.URLs.Podcast} text={Bio.PodcastName} alt_text="."/>
        <hr className="breather" />
        <ul>
          {Talks.PreviousTalks.map((talk) => (
            <li className="content-list" key={talk.Title}>
              {talk.Title}
              -
              <PossiblyEmptyLink text=" [link]" href={talk.URLs.Primary} /> {/* link shouldn't be empty, but what the heck I like this abstraction now */}
              <PossiblyEmptyLink text=" | [video]" href={talk.URLs.Video} alt_text=""/>
              <PossiblyEmptyLink text=" | [slides]" href={talk.URLs.Slides} alt_text=""/>
              <br />
              <div className="content-card-subtitle-displaced">
                <span className="right-float">
                  {talk.When}
                </span>
                at <PossiblyEmptyLink text={talk.Venue} href={talk.URLs.Venue} alt_text="."/>
              </div>
              <p className="content-card-subtitle">
                {talk.Description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Education */}
    <div className="content-card" id="education">
      <div className="content-card-title">
        Education
      </div>
      <div className="content-card-content">
        {Education.map((school) => (
          <Timeline 
            When={school.When}
            Title={school.Name}
            Logo={school.Logo}
            TitleLink={school.URL}
            Subtitle={school.Degree}
            Description={school.Description}
          />
        ))}
      </div>
    </div>
    </Col>

    );
  };

  export default Content;