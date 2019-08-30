import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class WhatIDoItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.number.isRequired
  };

  render() {
    const { title, paragraph, icon, color } = this.props;

    return (
      <div className="col-md-4 text-center animate-box">
        <div className={`services color-${color}`}>
          <span className="icon">
            <i className={icon} />
          </span>
          <div className="desc">
            <h3>{title}</h3>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatIDoItem;
