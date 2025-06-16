import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useUserContext, useUiContext } from "../context";
import useLogout from "../hooks/useLogout";
import { Link } from "react-router-dom";
import AlexLogo from "../assets/logo/logo1.png";
import { gitHubLight } from "../assets/socialMedia/";
import { ThemeChanger } from "./ThemeChanger";
import routes from "../routes/routes";

export const NavBar = () => {
  const { userDb } = useUserContext();
  const { logout } = useLogout();
  const { active } = useUiContext();

  return (
    <Container fluid>
      <Row className="row justify-content-around py-1 navbar">
        <Col xs={12} lg={3} className="text-start">
          <Link to={routes.home}>
            <Image src={AlexLogo} alt="Alex Logo" className="navbar--logo" />
            <strong className="mx-2">Alex Geek</strong>
          </Link>
          {active && (
            <Fragment>
              <Link>
                {userDb.photo && <Image src={userDb.photo} className="navbar--photo" width={50} height={50} />}
              </Link>
            </Fragment>
          )}
        </Col>
        <Col lg={1} className="text-end">
          <Link to={routes.home}>
            <strong className="mx-2">Home</strong>
          </Link>
        </Col>
        <Col lg={1} className="text-end">
          <Link to={routes.alexdev}>
            <strong className="mx-2">Hire me!</strong>
          </Link>
        </Col>
        <Col lg={1} className="text-end">
          <Link to={routes.awards}>
            <strong className="mx-2">Awards</strong>
          </Link>
        </Col>
        <Col lg={1} className="text-end">
          <Link to={routes.potfolio}>
            <strong className="mx-2">Portfolio</strong>
          </Link>
        </Col>
        <Col lg={1} className="text-end">
          <Link to={routes.gallery}>
            <strong className="mx-2">Gallery</strong>
          </Link>
        </Col>
        {active && (
          <Col lg={1} className="text-end">
            <Link>
              <strong className="navbar--logout" onClick={logout}>
                Logout
              </strong>
            </Link>
          </Col>
        )}
        {!active && (
          <Col lg={1} className="text-end">
            <Link to={routes.login}>
              <strong className="mx-2">Login</strong>
            </Link>
          </Col>
        )}
        <Col lg={1}>
          <a href="https://github.com/AlexGeekDev" rel="noreferrer" target="_blank">
            <Image src={gitHubLight} fluid width={40} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
