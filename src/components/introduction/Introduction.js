import React from "react";
import IntroItemWrapper from "./IntroItem";

const Introduction = () => (
  <div>
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <IntroItemWrapper backgroundImageUrl="url(images/img_bg.jpg)">
            <h1>
              Hi! <br />
              I'm Islam
            </h1>
            <p>
              <a
                className="btn btn-primary btn-learn"
                href="https://docs.google.com/document/d/1ahnMHmyT0Ny7AVg60u7WEmSJi4s-3aEJrfo82olZXD0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
                <i className="icon-download4" />
              </a>
            </p>
          </IntroItemWrapper>
          <IntroItemWrapper backgroundImageUrl="url(images/img_bg.jpg)">
            <h1>
              I love building
              <br /> THINGS !!
            </h1>
            <p>
              <a
                className="btn btn-primary btn-learn"
                href="https://github.com/IslaMurtazaev"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Projects <i className="icon-briefcase3" />
              </a>
            </p>
          </IntroItemWrapper>
        </ul>
      </div>
    </section>
  </div>
);

export default Introduction;
