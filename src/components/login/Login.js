import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <Container>
        <Row>
          <Col className="left d-none d-md-block col-6 red">
            <h1>ONLINE SHOPPING</h1>
            <p>
              Cupidatat tempor magna laboris aliquip laborum incididunt ad
              cupidatat quis adipisicing mollit aliqua ullamco in.
            </p>
            <img src=""/>
            {/* <Image src="../../assets/img/webshop.png"/> */}
          </Col>
          <Col className="right col-12 col-md-6 blue"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
