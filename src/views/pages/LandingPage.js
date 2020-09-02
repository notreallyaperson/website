/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import SubmitEmail from "components/SubmitEmail";

// Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock, faCogs, faChartLine } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Our History</h2>
                <h5 className="description">
                Qworky is a ERP solutions provider targeting SMEs in Malaysia
                <br />
                <br />
                From our debut in 2019, Qworky got involved in multiple projects, allowing the company to grow steadily. 
                Malaysia has always been lacking in terms of digital infrastructure. 
                So Qworky was formed to fill that gap
                <br />
                <br />
                We strive to make digitalisation affordable and accessible.
                <br />
                We strive to create scalable personalized solutions
                </h5>
                <br />
                {/* <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Task Management</h4>
                    <p className="description">
                      Manage all projects and track staff perfomance and output in a centralized location
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Proposal Tracking</h4>
                    <p>
                    Based on the consultancy model, track proposal changes from inception to Invoicing
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faCogs} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Custom ERP</h4>
                    <p>
                      Create specific solutions for your business process to be integrated to your exsiting environment.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Dashboards</h4>
                    <p>
                      Create custom dashboards to better understand your companies performace
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's Talk About Us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Sultani_Profile.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a>
                      <div className="author">
                        <CardTitle tag="h4">Mohammad Sultani</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Addressing business requirements with code is fun, but
                    it can get even more interesting when your job is simplifying
                    other people's tasks and business operations.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a>
                      <img
                        alt="..."
                        src={require("assets/img/faces/AviProfile.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a>
                      <div className="author">
                        <CardTitle tag="h4">Avinash Naidu</CardTitle>
                        <h6 className="card-category">Person</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Creating a place for people to come together to learn, share and grow together.
                      I want to get to the peak surrounded by the people that helped me along the way.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button> */}
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/avinashofthewild/"
                      target="_blank"
                      //onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.linkedin.com/in/avinash-naidu-638ba977/"
                      target="_blank"
                      //onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Jack_Profile.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a>
                      <div className="author">
                        <CardTitle tag="h4">Jack Te</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Developing and maintaining existing and new apps with clean and reusable codes.  
                    Sharing ideas and trying to make an Impact on the people around me.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="https://github.com/VanBawi"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                    </Button>
                    {/* <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <SubmitEmail />
        </div>
      </div>
      
    </>
  );
}

export default LandingPage;
