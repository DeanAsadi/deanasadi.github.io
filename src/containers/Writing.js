import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { PortButton } from "./Code";

const Date = styled.p`
  font-size: 12px;
`;

class Writing extends Component {
  render() {
    return (
      <CenteredHeader>
        <PortButton
          href="https://docs.google.com/document/d/1y_wBt5Hw2lfD4eoVNgAdXNYkHsdiDK7jb2riFXVQnhw/edit?usp=sharing"
          target="_blank"
        >
          Download My Resume
        </PortButton>
      </CenteredHeader>
    );
  }
}

export default Writing;
