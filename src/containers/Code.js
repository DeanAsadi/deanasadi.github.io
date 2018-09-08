import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>
            <h2>Skills</h2>
          </CenteredHeader>
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-sm-4"
              style={{ marginLeft: "130px" }}
            >
              <h5>Front-end|</h5>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5 style={{ marginLeft: "150px" }}>Back-end|</h5>
              <ul style={{ marginLeft: "150px" }}>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL/PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHeader>Recent work:</CenteredHeader>
          <PortRow>
            <a href="https://align.fun/" target="_blank">
              <CodeThumbnail src={require("../assets/LinkZone.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>personal project</PortTitle>
                <PortButtonContainer>
                  <PortButton href="http://linkzone.world/" target="_blank">
                    Website
                  </PortButton>
                  <PortButton
                    href="https://github.com/Engwebdev/personal-project"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <br />
              Description
              <br />
              <br />
              LinkZone: Because networking is the best way to grow!
              <br />
              LinkZone is a website that allows you to create your profile and
              add your experiences , job history & more.
              <br />
              <br />
              JWT was used for authentication, without logging in you will be
              able to view other people's profile but you will NOT be able to
              create your own profile or chat with others.
              <br />
              <br />
              As a new user you will have to sign up first and then login, once
              you logged in you can create your profile and you can also chat
              with other people to grow your network.
              <br />
              <br />
              Please feel free to click on the WEBSITE button to view all the
              other features.
              <PortDescription>
                Technology were used in this project:
              </PortDescription>
              <PortDescription />
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux.js</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Bootstrap</UsedItem>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>Express</UsedItem>
                <UsedItem>MongoDB</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
          <PortRow>
            <a href="https://okcollab.herokuapp.com/" target="_blank">
              <CodeThumbnail src={require("../assets/GroupProject.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Group project</PortTitle>
                <PortButtonContainer>
                  <PortButton href="http://fetch-tech.com" target="_blank">
                    Website
                  </PortButton>
                  <PortButton
                    href="https://github.com/fetch-tech/fetch-tech"
                    target="_blank"
                  >
                    Code
                  </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>Description</PortDescription>
              Fetch Tech: The ultimate source to get all of your daily tech
              news.
              <br />
              <br />
              <br />
              NOTE: You will NOT be able to navigate away from this landing page
              and throughout the rest of the website without logging in.
              <br />
              <br />
              Logging In: Upon clicking the login button, you'll be redirected
              to an Auth0 login page, where you can either login using a
              Google/GitHub account, or sign up. We recommend signing in with
              either your Google or Github account since the feature that
              handles signing up with an email and creating a password does not
              currently work.
              <br />
              <br />
              NOTE: If you sign in with your Google/GitHub account, it is
              important to know that we DO NOT get ANY of your account
              information except for the name associated with your Google/GitHub
              account. This means we DO NOT get any PASSWORDS or any other
              private information. We only use the name associated with the
              account in order to create a unique user experience for the logged
              in user.
              <br />
              <br />
              Please feel free to click on the WEBSITE button to review all the
              other features.
              <PortDescription>
                Technology were used in this project:
              </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux.js</UsedItem>
                <UsedItem>CSS</UsedItem>
                <UsedItem>Bootstrap</UsedItem>
                <UsedItem>Node.js</UsedItem>
                <UsedItem>Express</UsedItem>
                <UsedItem>PostgreSQL</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <hr />
        </div>
      </div>
    );
  }
}

export default Code;
