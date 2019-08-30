import React from "react";
import TimelineItem from "./TimelineItem";
import { YELLOW, PURPLE, AQUA } from "../constants";

const Timeline = () => (
  <div>
    <section className="colorlib-experience" data-section="timeline">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">highlights</span>
            <h2 className="colorlib-heading animate-box">Timeline</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              <TimelineItem
                title="CS department at Ala-Too International University"
                period="2017-2021"
                paragraph="Applied to Computer Science department for learning how to
                use programming as a tool for problem solving. I have had
                a numerous challenges including lots of programming
                problems to solve, building and presenting my projects,
                learning algrithms and data structures. Currently my GPA
                is 87."
                icon="icon-study"
                fadeInSide="left"
                color={YELLOW}
              />
              <TimelineItem
                title="Internship at Attractor-Software"
                period="June - Nov 2018"
                paragraph="After first year at University, I applied to best IT
                companies at the region and got accepted to almost all of
                them, although my choice fell on Attractor Software,
                because of their good reputation as company that values
                Clean Code principles and uses agile manifesto. During
                internship I have had first experience of developing web
                applications in a team."
                icon="icon-lab2"
                fadeInSide="top"
                color={PURPLE}
              />
              <TimelineItem
                title="Full stack developer at Attactor-Software"
                period="Dec 2018 - Present"
                paragraph="Started working in Scrum team that delivers high quality
                software through automated CI/CD processes. Developed
                restful APIs using Clean Architecture and used React
                library to create beautiful and responsive frontend.
                Understood the value of good test coverage."
                icon="icon-group"
                fadeInSide="left"
                color={AQUA}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Timeline;
