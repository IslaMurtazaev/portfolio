import React from "react";
import WhatIDoItem from "./WhatIDoItem";
import { BLUE, YELLOW, AQUA } from "../constants";

const WhatIDo = () => (
  <section className="colorlib-about">
    <div className="colorlib-narrow-content">
      <div className="row">
        <div
          className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span className="heading-meta">What I do?</span>
          <h2 className="colorlib-heading">Here are some of my expertise</h2>
        </div>
      </div>
      <div className="row row-pt-md">
        <WhatIDoItem
          color={BLUE}
          icon="icon-bulb"
          title="Web Development"
          paragraph="I have experience building interactive websites using
                JavaScript, React, HTML, CSS and APIs"
        />
        <WhatIDoItem
          color={YELLOW}
          icon="icon-flow-merge"
          title="Data Structures & Algorithms"
          paragraph="As coming from the CS background, I have good grasp over
          fundamental concepts of DSA"
        />
        <WhatIDoItem
          color={AQUA}
          icon="icon-data"
          title="Data Science"
          paragraph="During my leisure time I like to experiment with python's Natural
          Language Processing libraries"
        />
      </div>
    </div>
  </section>
);

export default WhatIDo;
