import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import TeamInfo1 from "./teamInfo1";
import TeamInfo2 from "./teamInfo2";
import TeamInfo3 from "./teamInfo3";
import TeamInfo4 from "./teamInfo4";
import TeamInfo5 from "./teamInfo5";
import TeamInfo6 from "./teamInfo6";

import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      {/* <Title title="ABOUT US." className="box"/> */}
      <div className="box" >
      <h1 className=" weight800 font60 padding40">WHAT WE DO?</h1>
      <h1 className=" weight800 font60 padding40">WHAT WE DO?</h1>

      {/* <Title title="ABOUT US." className="box"/>
      <Title title="ABOUT US." className="box"/> */}
    </div>
      <p className="font19">
      At OneByTwo Media, we are the architects of digital success, where creativity meets strategy, 
      and innovation knows no bounds. With a passion for visual creations, marketing wizardry, and an unwavering
      commitment to our clients, we craft brand stories that resonate, captivate, and ultimately, thrive in the digital landscape.
      </p>
      <Row>
        {/* <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Luke Skywalker" job="Web designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col> */}
        <Col md={12} lg={4}>
          <TeamInfo1 />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo2 />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo3 />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo4 />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo5 />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo6 />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
