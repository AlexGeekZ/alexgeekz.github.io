import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlexGeek from "../assets/video/Alex Geek Web.mp4";
import Janz from "../assets/video/Janz.png";
import Min from "../assets/video/min.png";

export const Video = () => {
  return (
    <Container fluid className="my-4">
      <Row className="justify-content-center mx-2">
        <Col lg={6} xs={12} className="mb-3 pt-3 text-center alexVideo--video">
          <video src={AlexGeek} poster={Min} controls={true} width="100%" max-width="1080"></video>
        </Col>
        <Col lg={6} xs={12}>
          <h2 className="text-center pt-5">
            This is a video presentation of the platform that I have developed, if you want to visit it click{" "}
            <a href="https://janz-learning.web.app/" rel="noreferrer" target="_blank">
              <h1 className="text-secondary">🎯Here</h1>
            </a>
          </h2>
          <a href="https://janz-learning.web.app/" rel="noreferrer" target="_blank">
            <Image fluid src={Janz} alt="Janz" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
