import React from "react";
import SocialLinksItem from "./SocialLinksItem";

const SocialLinks = () => (
  <nav id="colorlib-main-menu">
    <ul>
      <SocialLinksItem
        url="https://www.facebook.com/islam.murtazaev.9"
        icon="icon-facebook2"
      />
      <SocialLinksItem
        url="https://www.linkedin.com/in/islam-murtazaev/"
        icon="icon-linkedin2"
      />
      <SocialLinksItem
        url="https://github.com/IslaMurtazaev"
        icon="icon-github"
      />
    </ul>
  </nav>
);

export default SocialLinks;
