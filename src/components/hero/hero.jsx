import React,{ Component } from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero-image.png';
//Components
import Button from '../ui-components/button/button';
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

  render() {
    return (
      <>
      <ReactPlayer ref={this.reactPlayerRef} className="background" url='../../assets/hero/backgroundVideo.mp4' width='100%' height='100%' muted = {true} controls = {false} loop={true} playing={true} />
        <div className="hero" id="hero">
          <div className="wrapper">
            <Row>
              <Col md={12} lg={6}>
                <div className="hero-info">
                  <h1 className="weight800 font60">Hola!!!</h1>
                  <h1 className="weight800 font60">
                    We're helping brands and creators go viral
                  </h1>
                  <p className="font19 ">
                  "We Craft the Buzz, You Steer the Fuzz: Making Virality a Must for Your Brand!"
                  </p>
                  <Button label="SEND MESSAGE" target={"contact"} className="rotateText"/>
                </div>
              </Col>
              {/* <Col md={12} lg={6}>
                <div className="hero-image">
                  <img src={HeroImage} alt="hero" />
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
        </>
    );
  }
};

export default VideoPlayer;
