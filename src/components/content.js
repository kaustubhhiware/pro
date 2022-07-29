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
  // somewhat complex object, so formatting earlier on
  var talkLinkFarm = [];
  Talks.PreviousTalks.forEach((talk) => {
    var talkLinks = [[
      {text: "- [link]", link: talk.URLs.Primary},
      {text: " | [video]", link: talk.URLs.Video},
      {text: " | [slides]", link: talk.URLs.Slides}
    ]];
    talkLinkFarm = talkLinkFarm.concat(talkLinks);
  });

  return (
    <Col lg={12} xl={9}>
    <Themer />

    {/* Intro */}
    <div className="content-card" id="intro">
      <div className="content-card-title">
        Hello, I'm {Bio.FirstName}! 👋
      </div>
      <div className="content-card-content" id="intro-content">
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
            // Description={job.Description}
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
        {Papers.map((paper) => (
          <Timeline
            When={paper.When}
            Title={paper.Title}
            TitleLink={paper.URL}
            Subtitle={paper.Venue.Full}
            DescriptionLine={paper.Authors}
            Description={[]}
          />
        ))}

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
        {Talks.PreviousTalks.map((talk, index) => (
          <Timeline
            When={talk.When}
            Title={talk.Title}
            TitleSupplementaryLinks={talkLinkFarm[index]}
            Subtitle={"at " + talk.Venue}
            SubtitleLink={talk.URLs.Venue}
            DescriptionLine={talk.Description}
            Description={[]}
          />
          ))}
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