import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Introduction from "./introduction/Introduction";
import About from "./about/About";
import Timeline from "./timeline/Timeline";

const App = () => (
  <div id="colorlib-page">
    <div id="container-wrap">
      <Sidebar />
      <div id="colorlib-main">
        <Introduction />
        <About />
        <Timeline />
      </div>
    </div>
  </div>
);

export default App;
