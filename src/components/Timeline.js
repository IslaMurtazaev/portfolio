import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
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
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          CS department at Ala-Too International
                          University&nbsp;<span>2017-2021</span>
                        </h2>
                        <p>
                          Applied to Computer Science department for learning
                          how to use programming as a tool for problem solving
                          and cultivating my innovativeness. I have had a great
                          time solving difficult tech assignments, building and
                          presenting my first projects. One of my goals is to
                          graduate with GPA >= 90)
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-lab2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at Attractor-Software&nbsp;
                          <span>June - Nov 2018</span>
                        </h2>
                        <p>
                          After first year at University, I applied to best IT
                          companies at the region and got accepted to almost all
                          of them, although my choice fell on Attractor
                          Software, because of their good reputation as company
                          that values Clean Code principles and uses agile
                          manifesto. During internship I have had first
                          experience of developing web applications in a team.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-group" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Full stack developer at Attactor-Software&nbsp;
                          <span>Dec 2018 - Present</span>
                        </h2>
                        <p>
                          Started working in Scrum team that delivers high
                          quality software in two week iterations through
                          automated CI/CD process. Impoved my understanding in
                          Django framework, building restful APIs using Clean
                          Architecture and React library creating beautiful and
                          responsive frontend.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
