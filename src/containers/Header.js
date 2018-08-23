import React, { Component } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import PortButton from "./Code";

const ProfileImage = styled.img`
  border-radius: 2%;
  width: 300px;
`;

const ProfileTitle = styled.h1`
  color: black;
`;

const HeaderDiv = styled.div`
  text-align: center;
  margin-top: 70px;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  font-size: 16px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage
            src={require("../assets/dean_c.jpg")}
            alt=" Dean Asadi"
          />
          <h1> Dean Al-Asadi</h1>
        </Link>
        <div>
          <NavLink to="/">ABOUT</NavLink>
          <NavLink to="/code">PROJECTS</NavLink>
          <NavLink to="/writing">RESUME</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
        <hr />
      </HeaderDiv>
    );
  }
}

export default Header;
