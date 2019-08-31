import React from "react";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

const Sidebar = () => (
  <div>
    <div>
      <nav
        href="#navbar"
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <i />
      </nav>
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div
            className="author-img"
            style={{ backgroundImage: "url(images/profile.jpg)" }}
          />
          <h1 id="colorlib-logo">
            <a href="index.html">Islam Murtazaev</a>
          </h1>
          <span className="email">
            <i className="icon-mail" /> islam.muratazaev@gmail.com
          </span>
        </div>
        <Navigation />
        <SocialLinks />
        <div className="colorlib-footer">
          <p>
            <small>
              Made with <i className="icon-heart" aria-hidden="true" />
              &nbsp; and&nbsp;
              <i className="icon-beer" aria-hidden="true" />
              <br />
              Thanks&nbsp;
              <a
                href="https://colorlib.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Colorlib
              </a>
              &nbsp; for inspiration
            </small>
          </p>
        </div>
      </aside>
    </div>
  </div>
);

export default Sidebar;
