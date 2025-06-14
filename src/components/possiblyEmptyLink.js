import React from "react";
import './base.css';

export class PossiblyEmptyLink extends React.Component {
  /*
    Flow:
    1. If no href, return alt text
    2. If href and no alt text, return text with class formatting
    3. If href and alt text, return text, no formatting - shouldn't reduce font-size
  */
  /*
    props.is_icon - adds a class for conditional css for icons
    used with props.hover_text
  */

  render() {
    if (!this.props.href) {
      return (this.props.alt_text);
    }

    return (
      <a href={this.props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${this.props.is_icon ? 'icon-link' : ''}`}
      title={this.props.hover_text || ''}
      >
      {this.props.text}
      </a>
    );
  }
}

export default PossiblyEmptyLink;
