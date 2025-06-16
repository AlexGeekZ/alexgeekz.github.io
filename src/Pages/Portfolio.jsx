import logo from "../assets/logo/logo3.png";
import janz from "../assets/companies/janz.png";
import quimera from "../assets/companies/quimera.png";
import { animateScroll as scroll } from "react-scroll";
import { NewProject } from "../components";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchProjects } from "../hooks";
import Viewer from "react-viewer";
import { useUserContext } from "../context";
import { Breakpoint } from "../components/Breakpoint";

export const Portfolio = () => {
  const { userDb } = useUserContext();
  const { projects, getNext, disable, totalProjects } = useFetchProjects();
  const [visible, setVisible] = useState(false);
  const [imgV, setImgV] = useState();

  const toTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  return (
    <Container className="justify-content-center text-center">
      <Row>
        <Col className="col-xs-1-12 my-3">{userDb?.role === "Admin" && <NewProject />}</Col>
      </Row>
      <Row>
        <Col className="col-xs-1-12 my-3">
          <h1> {`Total professional projects:  ${totalProjects}`} </h1>{" "}
        </Col>
      </Row>
      <Fragment>
        {projects.map((project, index) => (
          <ul key={index} className="awards mx-2">
            <Fragment>
              <div className="containerCard">
                <div className="card">
                  <div className="imgBx">
                    <Viewer
                      visible={visible}
                      noNavbar={true}
                      noImgDetails={true}
                      minScale={1}
                      maxScale={3}
                      onClose={() => {
                        setVisible(false);
                      }}
                      images={[{ src: `${imgV}` }]}
                    />
                    <Image
                      src={project.url}
                      className="img-fluid awards--cert"
                      onClick={() => {
                        setVisible(true);
                        setImgV(project.url);
                      }}
                    />
                  </div>
                  <div className="contentBx">
                    <h2> {project.title} </h2>
                    <Breakpoint at="xs">
                      <h2 className="mt-2">Touch for details</h2>
                    </Breakpoint>
                    <div className="category my-2">
                      <h3 className="mt-2">Company :</h3>
                      {project.company === "AlexGeekDev" && <img src={logo} className="containerCard--prov" />}
                      {project.company === "Quimera solutions" && (
                        <a href="https://si-quimera.com.mx/" rel="noreferrer" target="_blank">
                          <img src={quimera} className="containerCard--prov" />
                        </a>
                      )}
                      {project.company === "Janz" && <img src={janz} className="containerCard--prov" />}
                    </div>
                    <a href={project.link} rel="noreferrer" target="_blank">
                      <button className="btnMain">Go to project</button>
                    </a>
                    <h2 className="mt-2">{project.body}</h2>
                  </div>
                </div>
              </div>
            </Fragment>
          </ul>
        ))}
      </Fragment>
      <Row className="justify-content-center">
        {!disable && (
          <button className="btn-block w-100 px-5 btnGo" onClick={getNext}>
            Cargar más!!
          </button>
        )}
        {disable && (
          <button className="btn-block w-100 btnWarning px-5" onClick={toTop}>
            Ups! parece que son todos, Ir al principio!!
          </button>
        )}
      </Row>
    </Container>
  );
};
