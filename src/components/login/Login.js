import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { LockFill, PersonFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  return (
    <div className="login center vh-100">
      <Container>
        <Row className="vh-100 center">
          <Col className="left d-none d-md-block col-6 ">
            <h1 className="center heading">ONLINE SHOPPING</h1>
            <p align="center">
              Cupidatat tempor magna laboris aliquip laborum incididunt ad
              cupidatat quis adipisicing mollit aliqua ullamco in.
            </p>
            <Image src="https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-3736818-3122116.png" />
          </Col>
          <Col className="right col-12 col-md-6 ">
            <Card className="loginCard h-100 center">
              <Form className="form w-75">
              <h4 className="mb-4 center form-title">USER LOGIN</h4>
                <Form.Group className="email mb-3" controlId="emailGroup">
                  <div className="icon-textfield center gap-2">
                    <PersonFill className="login-icon"/>
                    <Form.Control type="email" className="form-control shadow-none" placeholder="Enter your email" />
                  </div>
                </Form.Group>
                <Form.Group className="password mb-3 " controlId="passwordGroup">
                  <div className="icon-textfield center gap-2">
                    <LockFill className="login-icon"/>
                    <Form.Control
                      className="input shadow-none"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </Form.Group>
                <Form.Group
                  className="forgot-password mb-3 center"
                  controlId="forgotPassword"
                >
                  <Link className="login-link"> Forgot Your Password?</Link>
                </Form.Group>
                <Form.Group
                  className="submit-button mb-3 center"
                  controlId="submitId-login"
                >
                  <Button type="submit">
                    LOGIN
                  </Button>
                </Form.Group>
                <Form.Group
                  className="create-account mb-3 center"
                  controlId="createAccount"
                >
                  <Link className="login-link" to="/signup"> Create Account</Link>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
