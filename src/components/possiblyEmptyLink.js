import React from "react";
import './base.css';

export class PossiblyEmptyLink extends React.Component {
  /*
    Flow:
    1. If no link, return alt title
    2. If link and no alt title, return title with class formatting
    3. If link and alt title, return title, no formatting - shouldn't reduce font-size
  */

  render() {
    if (!this.props.link) {
      return (this.props.alt_title);
    }

    if (!this.props.alt_title) {
      return (
        <a href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="possibly-empty-link"
          >
          {this.props.title}
        </a>
      );
    }

    // don't return class if alt_title available
    return (
      <a href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
        >
        {this.props.title}
      </a>
    );

  }
}

export default PossiblyEmptyLink;