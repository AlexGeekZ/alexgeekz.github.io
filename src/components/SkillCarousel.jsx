import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  animate,
  audition,
  blender,
  bootstrap,
  cinema4d,
  css,
  dreamweaver,
  effects,
  encoder,
  facebook,
  firebase,
  git,
  gitHub,
  html,
  illustrator,
  javaScript,
  linux,
  mongo,
  mySql,
  node,
  npm,
  office,
  photoshop,
  premiere,
  python,
  react,
  reactjs,
  reactNative,
  redux,
  sass,
  stripe,
  terminal,
  twilio,
  ubuntu,
  webRtc,
  windowsServer,
  xd,
  yarn,
} from "../assets/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMemory } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

export const SkillCarousel = () => {
  return (
    <Container fluid className="py-4 skill">
      <Row className="justify-content-center px-5">
        <Col className="col-sm-1-12 col-lg-10">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            stopOnHover={true}
            emulateTouch
            interval={5000}
          >
            <div>
              <h1>
                Development and Programming <FontAwesomeIcon icon={faCode} className="skill--icons mx-2" />
              </h1>
              <h3>
                HTML, JavaScript, CSS, SASS, Bootstrap, React, Redux, Firebase, WEBRTC, NodeJS, MongoDB, Express,
                Stripe, Twilio, Facebook Developers, Git & GitHub, Python, NPM, Yarn
              </h3>
            </div>
            <div>
              <h1>
                Technical Support <FontAwesomeIcon icon={faMemory} className="skill--icons mx-2" />{" "}
              </h1>
              <h3>Help Desk, Software, Hardware and Internet Networks Official certifications in IC3 and Microsoft</h3>
            </div>
            <div>
              <h1>
                Computing <FontAwesomeIcon icon={faMicrosoft} className="skill--icons mx-2" />
              </h1>
              <h3>Official certifications in Microsoft Office, IC3, Certiport, Windows and Windows Server</h3>
            </div>
            <div>
              <h1>
                Servers <FontAwesomeIcon icon={faServer} className="skill--icons mx-2" />
              </h1>
              <h3>Ubuntu Servers, Terminal and command line, Regular expressions and Windows Server</h3>
            </div>
            <div>
              <h1>
                Design and Edition <FontAwesomeIcon icon={faPalette} className="skill--icons mx-2" />
              </h1>
              <h3>Photoshop, Illustrator, After Effects, Audition, Premiere, XD, Media Encoder, Animate</h3>
            </div>
          </Carousel>
        </Col>
        <Col className="col-sm-1-12 col-lg-2 skill--imgContainer">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            stopOnHover={true}
            emulateTouch
            interval={1000}
            transitionTime={50}
          >
            <div>
              <img src={reactjs} alt="React" className="skill--img" />
            </div>
            <div>
              <img src={javaScript} alt="JavaScript" className="skill--img" />
            </div>
            <div>
              <img src={reactNative} alt="React-Native" className="skill--img" />
            </div>
            <div>
              <img src={node} alt="NodeJs" className="skill--img" />
            </div>
            <div>
              <img src={firebase} alt="Firebase" className="skill--img" />
            </div>
            <div>
              <img src={redux} alt="Redux" className="skill--img" />
            </div>
            <div>
              <img src={git} alt="Git" className="skill--img" />
            </div>
            <div>
              <img src={gitHub} alt="GitHub" className="skill--img" />
            </div>
            <div>
              <img src={python} alt="Python" className="skill--img" />
            </div>
            <div>
              <img src={html} alt="Html" className="skill--img" />
            </div>
            <div>
              <img src={sass} alt="Sass" className="skill--img" />
            </div>
            <div>
              <img src={css} alt="Css" className="skill--img" />
            </div>
            <div>
              <img src={yarn} alt="Yarn" className="skill--img" />
            </div>
            <div>
              <img src={npm} alt="NPM" className="skill--img" />
            </div>
            <div>
              <img src={bootstrap} alt="Bootstrap" className="skill--img" />
            </div>
            <div>
              <img src={webRtc} alt="WebRTC" className="skill--img" />
            </div>
            <div>
              <img src={twilio} alt="Twilio" className="skill--img" />
            </div>
            <div>
              <img src={stripe} alt="Stripe" className="skill--img" />
            </div>
            <div>
              <img src={mongo} alt="MongoDB" className="skill--img" />
            </div>
            <div>
              <img src={mySql} alt="MySql" className="skill--img" />
            </div>
            <div>
              <img src={photoshop} alt="Photoshop" className="skill--img" />
            </div>
            <div>
              <img src={ubuntu} alt="Ubuntu" className="skill--img" />
            </div>
            <div>
              <img src={xd} alt="Adobe XD" className="skill--img" />
            </div>
            <div>
              <img src={blender} alt="Blender" className="skill--img" />
            </div>
            <div>
              <img src={office} alt="Microsoft Office" className="skill--img" />
            </div>
            <div>
              <img src={effects} alt="After Effects" className="skill--img" />
            </div>
            <div>
              <img src={animate} alt="Animate" className="skill--img" />
            </div>
            <div>
              <img src={cinema4d} alt="Cinema4D" className="skill--img" />
            </div>
            <div>
              <img src={dreamweaver} alt="Dreamweaver" className="skill--img" />
            </div>
            <div>
              <img src={windowsServer} alt="Windows Server" className="skill--img" />
            </div>
            <div>
              <img src={audition} alt="Audition" className="skill--img" />
            </div>
            <div>
              <img src={facebook} alt="Facebook Developers" className="skill--img" />
            </div>
            <div>
              <img src={illustrator} alt="Illustrator" className="skill--img" />
            </div>
            <div>
              <img src={linux} alt="Linux" className="skill--img" />
            </div>
            <div>
              <img src={premiere} alt="Premiere" className="skill--img" />
            </div>
            <div>
              <img src={terminal} alt="Terminal" className="skill--img" />
            </div>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
