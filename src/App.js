import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Timeline from "./components/Timeline";

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
