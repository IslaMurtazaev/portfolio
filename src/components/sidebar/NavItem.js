import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavItem extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: ""
  };

  render() {
    const { text, target, className } = this.props;

    return (
      <li className={className}>
        <a href={`#${target}`} data-nav-section={target}>
          {text}
        </a>
      </li>
    );
  }
}

export default NavItem;
