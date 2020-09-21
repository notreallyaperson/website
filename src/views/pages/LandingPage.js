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
import { faUsers, faClock, faCogs, faCode } from '@fortawesome/free-solid-svg-icons';

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
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">App Development</h4>
                    <p>
                      Developing custom Web and Mobile Apps based on user requirements
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
