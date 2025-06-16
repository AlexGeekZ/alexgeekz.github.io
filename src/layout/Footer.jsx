import { facebook, gitHubLight, instagram, linkedIn, twitter, whatsApp, youtube } from "../assets/socialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="container-fluid pt-3 footer">
      <div className="row justify-content-center text-center">
        <div className="col-xs-1-12 col-lg-6 mt-2 mb-2">
          <h3>
            {`Web Design by Alex Welsh ${date}`} <FontAwesomeIcon icon={faCopyright} className="mx-2" />
          </h3>
        </div>
        <div className="col-xs-1-12 col-lg-6">
          <a href="https://www.facebook.com/AlexZGeek/" rel="noreferrer" target="_blank">
            <img src={facebook} alt="Facebook" className="img-fluid mx-2 my-2 footer--icons" />
          </a>
          <a href="https://www.linkedin.com/in/alexzepeda/" rel="noreferrer" target="_blank">
            <img src={linkedIn} alt="LinkedIn" className="img-fluid mx-2 my-2 footer--icons" />
          </a>
          <a href="https://www.instagram.com/alexpopgeek/" rel="noreferrer" target="_blank">
            <img src={instagram} alt="Instagram" className="img-fluid mx-2 my-2 footer--icons" />
          </a>
          <a href="https://www.youtube.com/channel/UCVVW0L9iP0i2ziq3Z8DrgZQ" rel="noreferrer" target="_blank">
            <img src={youtube} alt="Youtube" className="img-fluid mx-2 my-2 footer--icons" />
          </a>
          <a href="https://twitter.com/alexpopdj" rel="noreferrer" target="_blank">
            <img src={twitter} alt="Twitter" className="img-fluid mx-2 my-2 footer--icons" />
          </a>
          <a href="https://wa.me/527222330226" rel="noreferrer" target="_blank">
            <img src={whatsApp} alt="WhatsApp" className="img-fluid mx-2 my-2 footer--icons" />
          </a>
          <a href="https://github.com/AlexGeekDev" rel="noreferrer" target="_blank">
            <Image src={gitHubLight} fluid width={55} className="mx-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
