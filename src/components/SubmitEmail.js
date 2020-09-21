import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";
import axios from 'axios';

// Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

function SubmitEmail() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessages, setErrorMessages] = useState([])
    const [alertDanger, setAlertDanger] = useState([]);
    const [alertSuccess, setAlertSuccess] = React.useState(false);
    const [loading, setLoading] = useState(false)

    const submitMessage = async e => {
        e.preventDefault()
        setLoading(true);
        var arr = []
        if(!name){arr.push('Name is Required')}
        if(!RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email))
        {arr.push('Valid Email is Required')}
        if(!message){arr.push('Message is Required')}
        setErrorMessages(arr)
        if(arr.length>0){
            var notificationState = arr.map(() => true)
            setLoading(false);
            return setAlertDanger(notificationState)
        }
        const request = {
            PassCode: "ThisisaPostcallsonobodyshouldseethisbuteventuallyweneedaproperuniquecode",
            name,
            email,
            message
        }
        
        const URI = "https://script.google.com/macros/s/AKfycbzqQplcfy92HR0isYDhcmwmBaXSj6Lp3M33OyPl7AHkZxCwRGI/exec"
        var reqBody = JSON.stringify(request)
        const res = await axios.post(URI, reqBody);

        if (res.data === "Success") {
            setAlertSuccess(true)
            setLoading(false);
            setEmail('')
            setName('')
            setMessage('')
        } else {
            setErrorMessages([res.data])
            setAlertDanger([false])
        }
    }

    const closeNotification = i => {
        var arr = alertDanger.map((e,j) => {
            if(i===j){return false}
            return e
        })
        setAlertDanger(arr)
    }

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });

    return (
        <Container>
            <Alert color="success" isOpen={alertSuccess}>
                <Container>
                    <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setAlertSuccess(false)}
                    >
                    <i style={{color: '#061708'}} className="nc-icon nc-simple-remove" />
                    </button>
                    <span style={{color: '#061708'}}>We have recieved your message and will get back to you.</span>
                </Container>
            </Alert>
            {errorMessages.map((e,i) => <Alert key ={e} className="alert-with-icon" color="danger" isOpen={alertDanger[i]}>
                    <Container>
                        <div className="alert-wrapper">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                            onClick={() => closeNotification(i)}
                        >
                            <i className="nc-icon nc-simple-remove" />
                        </button>
                        <div className="message">
                            <i className="nc-icon nc-bell-55" /> {e}
                        </div>
                        </div>
                    </Container>
                </Alert>
            )}
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <FontAwesomeIcon icon={faEnvelope} />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            placeholder="Email" 
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Let us know how we can help..."
                    type="textarea"
                    rows="4"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      {loading?
                      <Button className="btn-fill" color="danger" size="lg" disabled>
                          Send Message
                      </Button>
                      :<Button className="btn-fill" color="danger" size="lg" onClick={e => submitMessage(e)}>
                        Send Message
                      </Button>}
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
    )
}

export default SubmitEmail;