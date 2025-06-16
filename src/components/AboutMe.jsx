import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/logo/logo3.png";
import Alex from "../assets/alex/Alex2021Small-min.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrav } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
  return (
    <Container fluid className="px-4 hero">
      <Row className="justify-content-center align-middle text-center">
        <Col lg={4} xs={12} className=" pt-5">
          <Image src={logo} alt="Alex Welsh" className="img-fluid pt-5" />
        </Col>
        <Col lg={4} xs={12} className=" text-justify my-4 pt-5">
          <h1 className="text-white">Alex Welsh</h1>
          <h2 className="text-white">
            About Me
            <FontAwesomeIcon icon={faGrav} className="hero--icons mx-2" />
            Hi! my name is Alex Welsh, I am an engineer in computer systems, I have tried to always stay at the
            forefront of new technologies throughout my career{" "}
            <FontAwesomeIcon icon={faLaptopCode} className="hero--icons mx-2" />, through courses and certifications and
            of course putting it into practice, I like to be proactive and I consider myself self-taught definitely. I
            love this stack
            <FontAwesomeIcon icon={faHtml5} className="hero--icons mx-2" />
            <FontAwesomeIcon icon={faCss3} className="hero--icons mx-2" />
            <FontAwesomeIcon icon={faSass} className="hero--icons mx-2" />
            <FontAwesomeIcon icon={faBootstrap} className="hero--icons mx-2" />
            <FontAwesomeIcon icon={faReact} className="hero--icons mx-2" />
            <FontAwesomeIcon icon={faJs} className="hero--icons mx-2" />
            <FontAwesomeIcon icon={faNode} className="hero--icons mx-2" />
            <FontAwesomeIcon icon={faPython} className="hero--icons mx-2" />
          </h2>
        </Col>
        <Col lg={4} xs={12}>
          <img src={Alex} alt="Alex Welsh" className="img-fluid hero--photo" />
        </Col>
      </Row>
    </Container>
  );
};
