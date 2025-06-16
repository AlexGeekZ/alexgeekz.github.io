import { Fragment, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { NavBar } from "./NavBar";
import Burger from "./Burger";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 991;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const Render = () => {
    return (
      <Fragment>
        {width < breakpoint ? <Burger /> : <NavBar />}
        <Container fluid>
          <Row>{children}</Row>
        </Container>
        <Footer />
      </Fragment>
    );
  };

  return <Render />;
};
