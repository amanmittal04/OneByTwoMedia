import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import FacebookIcon from "../../../assets/contact/instagram.jpg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
      <Col xs={12} lg={1} className="contact__social">
        <a href="https://instagram.com/onebytwomedia?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" width={40} height={40} />
        </a>
      </Col>
        {/* <Col xs={12} lg={1} className="contact__social">
          <img src={TwitterIcons} alt="Twitter" width={40} height={40}/>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <img src={DribbleIcon} alt="Dribble" width={40} height={40}/>
        </Col> */}
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
