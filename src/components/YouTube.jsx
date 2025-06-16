import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Alex from "../assets/alex/AlexGeek Small.png";
import { Breakpoint } from "./Breakpoint";

export const YouTube = () => {
  return (
    <Container className="container-fluid youtube">
      <Row className="justify-content-center text-center">
        <Col className="col-xs-1-12 col-lg-6 mt-3 pt-5">
          <a href="https://www.youtube.com/channel/UCVVW0L9iP0i2ziq3Z8DrgZQ" rel="noreferrer" target="_blank">
            <strong className="youtube--text">
              <Breakpoint at="xs">
                <h5>Follow me in my Youtube Channel</h5>
              </Breakpoint>
              <Breakpoint at="sm">
                <h4>Follow me in my Youtube Channel</h4>
              </Breakpoint>
              <Breakpoint at="md">
                <h3>Follow me in my Youtube Channel</h3>
              </Breakpoint>
              <Breakpoint at="lg">
                <h1>Follow me in my Youtube Channel</h1>
              </Breakpoint>
              <FontAwesomeIcon icon={faYoutube} size="xl" className="mt-5" />
            </strong>
          </a>
        </Col>
        <Col className="col-xs-1-12 col-lg-6">
          <img src={Alex} alt="Alex Geek" className="img-fluid youtube--photo" />
        </Col>
      </Row>
    </Container>
  );
};
