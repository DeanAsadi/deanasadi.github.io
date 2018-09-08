import React, { Component } from "react";

import { CenteredHeader } from "./App.js";

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi, I'm Dean.</CenteredHeader>
        <p>
          I am a full stack web developer, I graduated from a great boot camp
          called DevMountain located in Dallas, TX. Learning responsive
          frameworks, databases, and best code practice.
          <br />
          My objective is simply to be the best web developer that I can be and
          contribute to the technology industry all that I know and can do. I am
          perfecting my craft by learning from seasoned web developer, remaining
          humble and continuously making strides to learn all that I can about
          web development.
        </p>
      </div>
    );
  }
}

export default Home;
