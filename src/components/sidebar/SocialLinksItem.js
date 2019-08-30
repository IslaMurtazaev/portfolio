import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SocialLinksItem extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    const { url, icon } = this.props;

    return (
      <li>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <i className={icon} />
        </a>
      </li>
    );
  }
}

export default SocialLinksItem;
