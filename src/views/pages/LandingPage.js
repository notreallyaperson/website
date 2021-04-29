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
  Table
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import SubmitEmail from "components/SubmitEmail";
import StaffCarousel from 'components/StaffCarousel'
import CustomerList from "components/CustomerList";

// Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock, faCogs, faCode, faChartLine, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import 'assets/css/custom.css'


function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <div>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">About Us</h2>
                <h5 className="description">
                  Qworky is a Digital Solutions provider for your entire digital expansion journey
                <br />
                  <br />
                From our founding in 2019, Qworky has now begun operating out of UK and Malaysia. 
                With a wide array of experience in digtal transformation accross industries
                <br />
                  <br />
                We strive to make digitalisation affordable and accessible.
                <br />
                We strive to create scalable personalized solutions
                <br />
                We strive to be better
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
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                  </div>
                  <div className="description">
                    <h4 className="info-title smallmargin">Consulting</h4>
                    <p className="description">
                      Let us help you make sense of the digital revolution that is upon us
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
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <div className="description">
                    <h4 className="info-title smallmargin">App Development</h4>
                    <p>
                      Developing custom Web and Mobile Apps catered to your needs
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
                    <h4 className="info-title smallmargin">Platform Management</h4>
                    <p>
                      Let us worry about your digital portfolio so you can focus on your business
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
                    <h4 className="info-title smallmargin">Digital Expansion</h4>
                    <p>
                      We want to be your long tem partner. Your success is our success
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
            <StaffCarousel />
            <br /><br />
            <CustomerList />
          </Container>
        </div>
        <div className="section landing-section">
          <SubmitEmail />
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
