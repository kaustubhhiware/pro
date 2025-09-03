import React from "react";
import './content.css';
import './base.css';
import { Col } from 'react-bootstrap';
import { FaYoutube } from 'react-icons/fa';
import { RiSlideshowFill } from "react-icons/ri";

import Themer from './themer';
import PossiblyEmptyLink from "./possiblyEmptyLink";
import Timeline from "./timeline";

import Bio from '../data/bio';
import Work from '../data/work';
import Papers from '../data/papers';
import Talks from '../data/talks';
import Education from '../data/education';

export const Content = () => {
  // somewhat complex object, so formatting earlier on
  var talkLinkFarm = [];
  Talks.PreviousTalks.forEach((talk) => {
    var talkLinks = [[
      {text: <span> <FaYoutube /></span>, link: talk.URLs.Video, hover_text: "Video"},
      {text: <span> <RiSlideshowFill /></span>, link: talk.URLs.Slides, hover_text:"Slides"}
    ]];
    talkLinkFarm = talkLinkFarm.concat(talkLinks);
  });

  return (
    <Col lg={12} xl={9}>
    <Themer />

    {/* Intro */}
    <div className="content-card glitch" id="intro">
      <div className="content-card-title">
        Hello, I'm {Bio.FirstName}! 👋
      </div>
      <div className="content-card-content" id="intro-content">
        {Bio.Intro}
      </div>
    </div>

    {/* Experience */}
    <div className="content-card glitch" id="work">
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
            key={job.Role}
            // Description={job.Description}
          />
        ))}
      </div>
    </div>

    {/* Talks */}
    <div className="content-card glitch" id="talks">
      <div className="content-card-title">
        Talks
      </div>
      <div className="content-card-content">
        {Talks.PreviousTalks.map((talk, index) => (
          <Timeline
            When={talk.When}
            Title={(talk.Type ? `${Talks.TypeEmojiMap[talk.Type] || ''} ` : '') + talk.Title}
            TitleLink={talk.URLs.Primary}
            Subtitle={talk.Venue}
            SupplementaryLinks={talkLinkFarm[index]}
            DescriptionLine={talk.Description}
            Description={[]}
            key={talk.Title}
          />
          ))}
      </div>
    </div>

    {/* Publications */}
    <div className="content-card glitch" id="publications">
      <div className="content-card-title">
        Publications
      </div>
      <div className="content-card-content">
        {Papers.map((paper) => (
          <Timeline
            When={paper.When}
            Title={paper.Title}
            TitleLink={paper.URL}
            Subtitle={paper.Venue.Full}
            // DescriptionLine={paper.Authors}
            Description={[]}
            key={paper.Title}
          />
        ))}

        Fun fact: I have an&nbsp;
        <PossiblyEmptyLink href={Bio.Erdos.URL} text="Erdős" alt_text="."/>
        &nbsp;number of {Bio.Erdos.Number}.
      </div>
    </div>

    {/* Education */}
    <div className="content-card glitch" id="education">
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
            key={school.Name}
          />
        ))}
      </div>
    </div>
    </Col>

    );
  };

  export default Content;
