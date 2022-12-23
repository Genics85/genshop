import React from "react";
import { Card, Container, NavLink, Row, Col } from "react-bootstrap";
import { CaretRight } from "react-bootstrap-icons";
import Items from "../items/Items";
import "./pallete.css";
function Pallete() {
  return (
    <>
      <Card>
        <Card.Header className="center-space card-header">
          <Container>
            <Row>
              <Col className="col-12 col-sm-9">
                <h5>Top Deals | Extra 10% off with Prime</h5>
              </Col>
              <Col className="col-3 col-sm-3 ">
                <NavLink
                  to="/groceries"
                  className="d-flex align-items-center end"
                >
                  <p className="mb-0 ">SEE ALL</p>
                  <CaretRight />
                </NavLink>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Container className="pallete-body">
          <Row >
            <Col>
              <Card.Body className="d-flex flex-row flex-nowrap overflow-auto gap-1 items-container">
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default Pallete;
