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
            <p className="col-md-6">
              <a
                className="btn gradient-button"
                href="https://docs.google.com/document/d/1hs6T0KXUydcGOOLWkcD0xeC5EYNpagVCCaE2ORsO8Vg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>View CV</strong>&nbsp;
                <i className="icon-file" />
              </a>
            </p>
          </IntroItemWrapper>
          <IntroItemWrapper
            backgroundImageUrl={`url(images/img_bg${
              window.innerWidth > 1200 ? "2" : ""
            }.jpg)`}
          >
            <h1>
              I love building
              <br /> THINGS !!
            </h1>
            <p className="col-md-6">
              <a
                className="btn gradient-button"
                href="https://github.com/IslaMurtazaev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>View Projects</strong> <i className="icon-briefcase3" />
              </a>
            </p>
          </IntroItemWrapper>
        </ul>
      </div>
    </section>
  </div>
);

export default Introduction;
