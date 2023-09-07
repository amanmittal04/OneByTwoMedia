import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg';
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";
import FacebookIcon from "../../../assets/contact/instagram.jpg";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
        <a href="https://instagram.com/onebytwomedia?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer">
          <ContactInfoBox
              icon={FacebookIcon}
              textLine1="@onebytwomedia"
              width={40}  
              height={40} 
            />
        </a>
        </Col>
        <Col xs={12} lg={3} className="contact__info">
        <a href="https://wa.me/7338416359" target="_blank">
          <ContactInfoBox
            icon={ContactInfoIcon2}
            textLine1="+91 73384 16359"
          />
        </a>
        </Col>
        <Col xs={12} lg={3} className="contact__info">
        <a href="mailto:connect@onebytwomedia.com" style={{ textDecoration: 'none', color: 'black' }}>
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine1="connect@onebytwomedia.com"
          />
        </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
