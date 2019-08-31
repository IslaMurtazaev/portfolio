import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class IntroItemWrapper extends PureComponent {
  static propTypes = {
    backgroundImageUrl: PropTypes.string.isRequired,
    chidren: PropTypes.node.isRequired
  };

  render() {
    const { backgroundImageUrl, children } = this.props;

    return (
      <li style={{ backgroundImage: backgroundImageUrl }}>
        <div className="overlay" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
              <div className="slider-text-inner js-fullheight">
                <div className="desc intro-item">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default IntroItemWrapper;
