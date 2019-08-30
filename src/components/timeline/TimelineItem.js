import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TimelineItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    fadeInSide: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
    color: PropTypes.number.isRequired
  };

  render() {
    const { title, period, paragraph, icon, fadeInSide, color } = this.props;
    return (
      <article
        className="timeline-entry animate-box"
        data-animate-effect={`fadeIn${fadeInSide.toUpperCase}`}
      >
        <div className="timeline-entry-inner">
          <div className={`timeline-icon color-${color}`}>
            <i className={icon} />
          </div>
          <div className="timeline-label">
            <h2>
              {title}&nbsp;
              <span>{period}</span>
            </h2>
            <p>{paragraph}</p>
          </div>
        </div>
      </article>
    );
  }
}

export default TimelineItem;
