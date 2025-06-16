import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { useFetchAwards } from "../hooks";
import routes from "../routes/routes";
import { Breakpoint } from "./Breakpoint";

export const AwardsProgress = () => {
  const [show, setShow] = useState(false);
  const [percentTS, setPercentTS] = useState(0);
  const [percentFE, setPercentFE] = useState(0);
  const [percentBE, setPercentBE] = useState(0);
  const [percentDesign, setPercentDesign] = useState(0);
  const { totalAwards } = useFetchAwards();
  const [isOnDisplay, setIsOnDisplay] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    setPercents();
  }, [isOnDisplay]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsOnDisplay(true);
      }
    });
    observer.observe(myRef.current);
  }, []);

  const setPercents = () => {
    if (isOnDisplay) {
      setPercentTS(80);
      setPercentFE(90);
      setPercentBE(60);
      setPercentDesign(90);
    }
  };

  return (
    <Container fluid className="px-5 py-3 awardProgress">
      <Row className="justify-content-center text-center">
        <Col lg={6} xs={12} className="pt-4">
          <ProgressBar progress={percentFE} />
          <h4 ref={myRef} className="text-white">
            Front-End
          </h4>
          <ProgressBar progress={percentBE} />
          <h4 className="text-white">Back-End</h4>
          <ProgressBar progress={percentTS} />
          <h4 className="text-white">Technical Support</h4>
          <ProgressBar progress={percentDesign} />
          <h4 className="text-white">Design</h4>
        </Col>
        <Col lg={6} xs={12} className="pt-3">
          <Row className="justify-content-center">
            <Breakpoint at="xs">
              <strong className="text-white fs-1 ">Awards</strong>
            </Breakpoint>
            <Breakpoint at="md">
              <strong className="text-white awardProgress--title">Awards</strong>
            </Breakpoint>
            <Breakpoint at="lg">
              <strong className="text-white awardProgress--title">Awards</strong>
            </Breakpoint>
          </Row>
          {isOnDisplay && (
            <CountUp
              delay={1}
              className="awardProgress--count"
              end={totalAwards}
              duration={3}
              separator=" "
              decimals={0}
              decimal=","
              onEnd={() => setShow(true)}
            />
          )}
          <FontAwesomeIcon icon={faCertificate} className="awardProgress--icon mx-3" />
          {show && (
            <Fragment>
              <h3 className="text-white awardProgress--icon">Ended! 👏</h3>{" "}
              <Link to={routes.awards}>
                <h2 className="awardProgress--icon">Check certifications</h2>{" "}
              </Link>
            </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  );
};
