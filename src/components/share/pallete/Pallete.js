import { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { NavLink,useNavigate } from "react-router-dom";
import { CaretRight } from "react-bootstrap-icons";
import Items from "../items/Items";
import "./pallete.scss";
function Pallete() {
  const[category,setCategory]=useState("");
  const navigate=useNavigate();
  const handleOnClick=()=>{
    
  }
  return (
    <>
      <Card onClick={handleOnClick}>
        <Card.Header className="center-space cardheader">
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
                  <p className="mb-0 ">SEE ALL  </p>
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
